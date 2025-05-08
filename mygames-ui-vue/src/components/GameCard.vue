<template>
  <Card
    style="overflow: hidden; width: 15rem; height: auto;"
    class="p-3 border-1 surface-200 border-round shadow-3 hover:shadow-5 cursor-pointer bg-white hover:surface-200"
  >
    <template #title>
      {{ props.game.name }} ({{ props.game.yearpublished }})
    </template>
    <template #content class="align-items-center">
      <!-- Image with consistent size and overflow hidden -->
      <div class="image-wrapper">
        <img
          :src="props.game.image"
          :alt="`${props.game.name} thumbnail`"
          class="game-image"
        />
      </div>
      <br />
      <span>
        <br />
        Rating: <Tag :value="props.game.rating" ></Tag>
      </span>
    </template>
  </Card>
</template>
<style scoped>
/* Wrapper for image to control overflow */
.image-wrapper {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 8px;
}

/* Ensuring the image covers the area without stretching */
.game-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Button styling adjustments (if needed) */
button {
  margin-right: 0.5rem;
}
</style>
<script setup lang="ts">
  import Tag from 'primevue/tag'

  const props = defineProps<{
    game: any;
  }>()
</script>