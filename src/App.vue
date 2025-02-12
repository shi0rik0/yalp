<script setup lang="ts">
import { ref, watch } from 'vue'

const imagePath = ref('')
const onClicked = async () => {
  const path = await window.eAPI.openFile()
  imagePath.value = path
}
const imageContent = ref(null)
watch(imagePath, async (path) => {
  if (path === '') {
    imageContent.value = null
    return
  }
  const content = await window.eAPI.loadFile(path)
  const imageBase64 = btoa(String.fromCharCode.apply(null, content))
  console.log(imageBase64)
  imageContent.value = `data:image/unknown;base64,${imageBase64}`
})
</script>

<template>
  <h1 class="text-xl text-white bg-black">Hello world!</h1>
  <button @click="onClicked">Click me</button>
  <img :src="imageContent"></img>
  <p>{{ imagePath === '' ? '<empty>' : imagePath }}</p>
</template>

<style scoped></style>
