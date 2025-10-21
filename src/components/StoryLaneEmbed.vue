<template>
  <div class="w-full flex justify-center">
    <div class="w-full max-w-[750px]">
      <div
        class="sl-embed"
        style="position:relative;padding-bottom:calc(64.18% + 25px);width:100%;height:0;transform:scale(1)"
      >
        <iframe
          loading="lazy"
          class="sl-demo"
          src="https://app.storylane.io/demo/6idi8esavrzq?embed=inline"
          name="sl-embed"
          allow="fullscreen"
          allowfullscreen
          style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow:0px 0px 18px rgba(26,19,72,0.15);border-radius:10px;box-sizing:border-box;"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const STORYLANE_SCRIPT_SRC = 'https://js.storylane.io/js/v2/storylane.js'

onMounted(() => {
  // Ensure the Storylane script is present once the component mounts
  if (document.querySelector(`script[src="${STORYLANE_SCRIPT_SRC}"]`)) {
    return
  }

  const script = document.createElement('script')
  script.async = true
  script.src = STORYLANE_SCRIPT_SRC
  document.body.appendChild(script)
})
</script>
