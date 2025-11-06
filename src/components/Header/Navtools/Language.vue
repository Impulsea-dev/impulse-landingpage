<template>
  <div>
    <Listbox v-model="selectLanguage">
      <div class="relative z-[22]">
        <ListboxButton
          class="relative flex w-full cursor-pointer items-center space-x-[8px] rtl:space-x-reverse text-slate-900 dark:text-white"
        >
          <span class="inline-flex h-5 w-5 md:h-6 md:w-6 overflow-hidden rounded-full border border-slate-200">
            <img
              :src="selectLanguage.image"
              :alt="selectLanguage.title"
              class="h-full w-full object-cover"
            />
          </span>
          <span class="text-sm font-semibold uppercase tracking-wide">
            {{ selectLanguage.name }}
          </span>
        </ListboxButton>

        <Transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-auto min-w-[120px] overflow-auto rounded border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 ltr:right-0 rtl:left-0 md:top-[30px] top-[20px]"
          >
            <ListboxOption
              v-for="item in languages"
              :key="item.name"
              :value="item"
              as="template"
              v-slot="{ active }"
            >
              <li
                :class="[
                  active
                    ? 'bg-[#662ebb]/10 text-slate-900 dark:bg-slate-700/70 dark:text-white'
                    : 'text-slate-600 dark:text-slate-300',
                  'first:rounded-t last:rounded-b w-full cursor-pointer border-b border-b-slate-200/50 px-3 py-2 last:border-none',
                ]"
                @click="selectLang(item.name)"
              >
                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                  <span class="flex-none">
                    <span class="inline-block h-5 w-5 rounded-full border border-slate-200 overflow-hidden lg:h-6 lg:w-6">
                      <img
                        :src="item.image"
                        :alt="item.title"
                        class="h-full w-full object-cover"
                      />
                    </span>
                  </span>
                  <span class="flex-1 text-sm font-medium capitalize text-slate-700 dark:text-slate-200">
                    {{ item.title }}
                  </span>
                </div>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import langImg1 from "@/assets/images/flags/En.png"
import langImg2 from "@/assets/images/flags/Es.png"
import { ref, onMounted } from "vue"
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from "@headlessui/vue"
import { useI18n } from "vue-i18n"

const { locale } = useI18n()

const languages = [
  { name: "EN", title: "English", image: langImg1 },
  { name: "ES", title: "Español", image: langImg2 }
]

const selectLanguage = ref(languages[0])

const selectLang = (lang) => {
  switch (lang) {
    case "EN":
      locale.value = "en"
      selectLanguage.value = languages[0]
      localStorage.setItem("enLang", "EN")
      break
    case "ES":
      locale.value = "es"
      selectLanguage.value = languages[1]
      localStorage.setItem("enLang", "ES")
      break
  }
}

onMounted(() => {
  languages.forEach((lang) => {
    const preloadImage = new Image()
    preloadImage.src = lang.image
  })

  const storedLang = localStorage.getItem("enLang")
  if (storedLang) {
    selectLang(storedLang)
  } else {
    selectLang("EN")
  }
})
</script>
