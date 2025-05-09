<template>
  <Header 
    title="MyGames Game Browser" 
    subtitle="Click a game below for more details"
  />
  <GameDetails
    :gameDetails="currentGameDetails"
    :showModal="showModal"
    @update:visible="toggleModal"
  />
  <GameGrid v-if="games" 
    :games="games"
    @game-clicked="toggleModal"
  />
</template>
<script setup lang="ts">
  import { onMounted, ref, watchEffect } from 'vue';
  import GameDetails from './components/GameDetails.vue';
  import GameGrid from './components/GameGrid.vue'
  import { getGameDetails, getSummarizedGames } from '../apis/dataHelper.ts'

  const games = ref()
  const showModal = ref(false)
  const clickedGameId = ref()
  const currentGameDetails = ref()

  onMounted(async () => {
    games.value = await getSummarizedGames()
  })

  watchEffect(async() => {
      currentGameDetails.value = await getGameDetails(clickedGameId.value)
  })

  function toggleModal(gameId: number) {
      clickedGameId.value = gameId
      showModal.value = !showModal.value
  }
</script>