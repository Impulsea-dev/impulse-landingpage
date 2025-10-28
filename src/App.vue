<template>
  <router-view />
</template>

<script>
import { useThemeSettingsStore } from "@/store/themeSettings";
export default {
  mounted() {
    this.$store.themeSettingsStore = useThemeSettingsStore()
    let themeSettingsStore = useThemeSettingsStore()
    themeSettingsStore.setTheme("light")
  }
}
</script>

<style>
/* Animaciones globales para la landing page */
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-left {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-right {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scale-up {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Animaciones suaves con elasticidad */
@keyframes gentle-rise {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  60% {
    opacity: 1;
    transform: translateY(-5px) scale(1.01);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes smooth-float {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes soft-entrance {
  0% {
    opacity: 0;
    transform: scale(0.92) translateY(20px);
  }
  70% {
    opacity: 1;
    transform: scale(1.02) translateY(-3px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-fade-up {
  animation: fade-up 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-slide-left {
  animation: slide-left 0.7s ease-out forwards;
}

.animate-slide-right {
  animation: slide-right 0.7s ease-out forwards;
}

.animate-scale-up {
  animation: scale-up 0.7s ease-out forwards;
}

.animate-gentle-rise {
  animation: gentle-rise 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.animate-smooth-float {
  animation: smooth-float 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-soft-entrance {
  animation: soft-entrance 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Delays para efectos en cascada suaves */
.animate-delay-50 {
  animation-delay: 0.05s;
}

.animate-delay-100 {
  animation-delay: 0.1s;
}

.animate-delay-150 {
  animation-delay: 0.15s;
}

.animate-delay-200 {
  animation-delay: 0.2s;
}

.animate-delay-250 {
  animation-delay: 0.25s;
}

.animate-delay-300 {
  animation-delay: 0.3s;
}

.animate-delay-350 {
  animation-delay: 0.35s;
}

.animate-delay-400 {
  animation-delay: 0.4s;
}

.animate-delay-450 {
  animation-delay: 0.45s;
}

.animate-delay-500 {
  animation-delay: 0.5s;
}

.animate-delay-600 {
  animation-delay: 0.6s;
}
</style>
