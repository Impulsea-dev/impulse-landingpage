import { all } from 'axios';
import { defineStore } from 'pinia';

export const useThemeSettingsStore = defineStore('themeSettings', {
    state: () => ({
        sidebarCollaspe: true,
        sidebarHidden: false,
        mobielSidebar: false,
        semidark: false,
        semiDarkTheme: "semi-light",
        monochrome: false,
        isDark: false,
        skin: "default",
        theme: "light",
        isOpenSettings: false,
        cWidth: "full",
        menuLayout: "horizontal",
        navbarType: "static",
        isMouseHovered: false,
        footerType: "static",
        direction: false,
        chartColors: {
            title: "red",
        },
        allSections: [],
        observer: null,
        observerOptions: {
            root: null,
            rootMargin: '0px',
            threshold: 0.50
        },
        logoColor: null,
    }),
    actions: {
        bringAllSections(sections) {
            const $sections = sections;
            this.allSections = $sections
            this.prepareObservers();
        },
        prepareObservers() {

            if (this.observer) {
                this.logoColor = null
                this.observer.disconnect()
            }

            const $header = document.querySelector('#l-header');
            if ($header) {
                $header.style.color = ''
                $header.style.backgroundColor = ''
                this.observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        const { isIntersecting, intersectionRatio } = entry
                        if (isIntersecting && intersectionRatio > .5) {
                            const color = entry.target.getAttribute('data-header-color')
                            const bg = entry.target.getAttribute('data-header-bg')
                            $header.style.color = color
                            $header.style.backgroundColor = bg
                            this.logoColor = color
                        }
                    })
                }, this.observerOptions);
                //   console.log(this.allSections);
                this.allSections.forEach((section) => this.observer.observe(section));
            }


        },

        setSidebarCollasp() {
            this.sidebarCollasp = !this.sidebarCollasp;
        },

        toogleDark() {
            this.isDark = true;
            document.body.classList.remove(this.theme);
            this.theme = "dark";
            document.body.classList.add(this.theme);
            localStorage.setItem("theme", this.theme);

            document.documentElement.setAttribute("menu-layout", this.menuLayout);
            localStorage.setItem("menuLayout", this.menuLayout);
        },
        toogleLight() {
            this.isDark = false;
            document.body.classList.remove(this.theme);
            this.theme = "light";
            document.body.classList.add(this.theme);
            localStorage.setItem("theme", this.theme);

            document.documentElement.setAttribute("menu-layout", this.menuLayout);
            localStorage.setItem("menuLayout", this.menuLayout);

        },

        toggleMonochrome() {
            const isMonochrome = (localStorage.getItem('monochrome') !== null);
            if (isMonochrome) {
                localStorage.removeItem("monochrome");
                document.getElementsByTagName('html')[0].classList.remove('grayscale');
                return;
            }
            localStorage.setItem("monochrome", true);
            document.getElementsByTagName('html')[0].classList.add('grayscale');
            return;
        },

        toggleSettings() {
            this.isOpenSettings = !this.isOpenSettings;
        },
        toggleMsidebar() {
            this.mobielSidebar = !this.mobielSidebar;
        },
        toggleSemiDark() {
            this.semidark = !this.semidark;
            this.semiDarkTheme = this.semidark ? "semi-dark" : "semi-light";
            document.body.classList.toggle(this.semiDarkTheme);
            localStorage.setItem("semiDark", this.semidark);
        },
    },
})