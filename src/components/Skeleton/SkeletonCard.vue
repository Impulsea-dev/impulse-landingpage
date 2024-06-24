<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      <div v-for="item in columns" :key="item" class="max-w-md rounded-lg shadow animate-pulse bg-white dark:bg-black-500">
        <div class="flex items-center justify-center h-48 mb-6 bg-white/50 rounded-t-lg"></div>
        <div class="p-4">
          <div class="h-2.5 rounded-full bg-white/50 w-48 mb-4"></div>
          <div class="h-2 rounded-full bg-white/50 mb-2.5"></div>
          <div class="h-2 rounded-full bg-white/50 mb-2.5"></div>
          <div class="h-2 rounded-full bg-white/50"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        columns: 1,
      };
    },
    mounted() {
      this.calculateColumns();
      window.addEventListener('resize', this.calculateColumns);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.calculateColumns);
    },
    methods: {
      calculateColumns() {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 1536) {
          this.columns = 4; 
        } else if (windowWidth >= 1280) {
          this.columns = 3;
        } else if (windowWidth >= 768) {
          this.columns = 2;
        } else {
          this.columns = 1;
        }
      },
    },
  };
  </script>
  