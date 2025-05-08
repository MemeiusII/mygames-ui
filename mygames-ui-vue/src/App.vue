<template>
  <Header 
    title="MyGames Game Browser" 
    subtitle="Click a game below for more details"
  />
  <MovieGrid v-if="games" :games="games" />
</template>
<script setup lang="ts">
  import { onMounted, ref } from 'vue';
import { getSummarizedGames } from '../apis/dataHelper.ts'

  const games = ref()

  onMounted(async () => {
    games.value = await getSummarizedGames()
  })
</script>