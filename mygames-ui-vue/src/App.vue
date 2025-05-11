<template>
  <Header 
    title="MyGames Game Browser" 
    subtitle="Click a game below for more details"
  />
  <Toast />
  <ConfirmDialog />
  <div class="grid col pb-4">
    <label class="pr-3 ml-7 text-lg" for="form-button">Expand our collection of games here!</label>
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
    v-model:showModal="showFormModal"
    @hide-modal="toggleFormModal"
    @edit="onGameEdit"
    @add="onGameAdd"
  />
  <GameDetails
    :gameDetails="currentGameDetails"
    v-model:showModal="showDetailsModal"
    @update:visible="toggleDetailsModal"
    @edit="toggleFormModal_Edit"
    @delete="onGameDelete"
  />
  <GameGrid v-if="games" 
    :games="games"
    @game-clicked="toggleDetailsModal"
  />
</template>
<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';
  import GameDetails from './components/GameDetails.vue';
  import GameGrid from './components/GameGrid.vue'
  import { useToast, useConfirm } from 'primevue';
  import { apiDeleteGame, apiGetGameDetails, apiGetSummarizedGames, apiPatchGameDetails, apiPutGameDetails } from '../apis/dataHelper.ts'
  import GameForm from './components/GameForm.vue';

  const games = ref()
  const showDetailsModal = ref(false)
  const showFormModal = ref(false)
  const clickedGameId = ref()
  const currentGameDetails = ref()
  const gameFormModel = ref()
  const toast = useToast()
  const confirm = useConfirm()

  onMounted(async () => {
    fetchSummarizedGames()
  })

  watch(() => clickedGameId.value, async() => {
    currentGameDetails.value = await apiGetGameDetails(clickedGameId.value)
  })

  async function fetchSummarizedGames() {
    try {
      games.value = await apiGetSummarizedGames()
    } catch(error) {
      console.log(error)
    }
  }

  function confirmDialog(msg: string, accept: () => void | Promise<void>, reject: () => void) {
    confirm.require({
      message: msg,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      rejectProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true
      },
      acceptProps: {
        label: 'Continue'
      },
      accept: accept,
      reject: reject
    })
  }


  function toggleDetailsModal(gameId: number) {
    if(gameId) {
      clickedGameId.value = gameId
    }
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
        designers: [""],
        artists: [""],
        publishers: [""]
      }
    }

    if(showDetailsModal.value) {
      toggleDetailsModal(currentGameDetails.value.id)
    }
    toggleFormModal()
  }

  // Game event handlers
  function onGameAdd(game: any) {
    confirmDialog(`Are you sure you want to add ${game.name}?`, () => addGame(game), () => {
      toast.add({ severity: 'error', summary: 'Game add rejected by user', detail: "Game add cancelled", life: 3000 })
    })
  }

  function onGameEdit(game: any) {
    confirmDialog(`Are you sure you want to edit ${game.name}?`, () => editGame(game), () => {
      toast.add({ severity: 'error', summary: 'Game edit rejected by user', detail: "Game edit cancelled", life: 3000 })
    })
  }

  function onGameDelete(gameId: number) {
    toggleDetailsModal(currentGameDetails.value.id)
    confirmDialog('Are you sure you want to delete this game?', () => deleteGame(gameId), () => {
      toast.add({ severity: 'error', summary: 'Game delete rejected by user', detail: "Game delete cancelled", life: 3000 })
    })
  }

  async function addGame(game: any) {
    const response = await apiPutGameDetails(game)
    
    if(!response?.error) {
      toast.add({ severity: 'success', summary: response?.msg, detail: response?.msg, life: 3000 })
    } else {
      toast.add({ severity: 'error', summary: response?.msg, detail: response?.msg, life: 3000 })
    }
    // refetch games
    fetchSummarizedGames()
  }

  async function editGame(game: any) {
    const response = await apiPatchGameDetails(game)
    
    if(!response?.error) {
      toast.add({ severity: 'success', summary: response?.msg, detail: response?.msg, life: 3000 })
    } else {
      toast.add({ severity: 'error', summary: response?.msg, detail: response?.msg, life: 3000 })
    }
    // refetch games
    fetchSummarizedGames()
  }

  async function deleteGame(gameId: number) {
    const response = await apiDeleteGame(gameId)

    if(!response?.error) {
      toast.add({ severity: 'success', summary: response?.msg, detail: response?.msg, life: 3000 })
    } else {
      toast.add({ severity: 'error', summary: response?.msg, detail: response?.msg, life: 3000 })
    }

    // refetch games
    fetchSummarizedGames()
  }

</script>