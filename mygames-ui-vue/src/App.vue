<template>
  <Header 
    title="MyGames Game Browser" 
    subtitle="Click a game below for more details"
  />
  <div class="grid col pb-4">
    <label class="pr-3 text-lg" for="form-button">Expand our collection of games here!</label>
    <Button
      id="form-button"
      type="button"
      style="height: 40px;"
      @click="toggleFormModal_Edit(null)"
    >
      <i class="pi pi-plus"></i>
    </Button>
    </div>
  <GameForm v-if="gameFormModel"
    :game="gameFormModel"
    :showModal="showFormModal"
    @hide-modal="toggleFormModal"
  />
  <GameDetails
    :gameDetails="currentGameDetails"
    :showModal="showDetailsModal"
    @update:visible="toggleDetailsModal"
    @edit="toggleFormModal_Edit"
  />
  <GameGrid v-if="games" 
    :games="games"
    @game-clicked="toggleDetailsModal"
  />
</template>
<script setup lang="ts">
  import { onMounted, ref, watchEffect } from 'vue';
  import GameDetails from './components/GameDetails.vue';
  import GameGrid from './components/GameGrid.vue'
  import { getGameDetails, getSummarizedGames } from '../apis/dataHelper.ts'
import GameForm from './components/GameForm.vue';

  const games = ref()
  const showDetailsModal = ref(false)
  const showFormModal = ref(false)
  const clickedGameId = ref()
  const currentGameDetails = ref()
  const gameFormModel = ref()

  onMounted(async () => {
    games.value = await getSummarizedGames()
  })

  watchEffect(async() => {
    currentGameDetails.value = await getGameDetails(clickedGameId.value)
  })

  function toggleDetailsModal(gameId: number) {
    clickedGameId.value = gameId
    showDetailsModal.value = !showDetailsModal.value
  }
  function toggleFormModal() {
    showFormModal.value = !showFormModal.value
  }
  function toggleFormModal_Edit(game: any) {
    if(game) {
      gameFormModel.value = game
    } else {
      gameFormModel.value = {
        id: "",
        name: "",
        description: "",
        image: "",
        yearpublished: null,
        rating: null,
        weight: null,
        minplayers: null,
        maxplayers: null,
        minplaytime: null,
        maxplaytime: null,
        minage: null,
        designers: [],
        artists: [],
        publishers: []
      }
    }

    if(showDetailsModal.value) {
      toggleDetailsModal(currentGameDetails.value.id)
    }
    toggleFormModal()
  }
</script>