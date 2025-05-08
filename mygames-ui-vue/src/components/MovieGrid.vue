<template>
    <Dialog v-model:visible="showModal" v-if="currentGameDetails">
        <template #header>
            {{ currentGameDetails?.name }} {{ currentGameDetails?.yearpublished }}
        </template>
        <div class="grid">
            <div class="col" style="overflow: hidden;">
                <img
                :src="currentGameDetails?.image"
                :alt="`${currentGameDetails?.name} thumbnail`"
                style="height: 500px;"
                />
            </div>
            <div class="col">
                <strong>Description: </strong>{{ currentGameDetails?.description }}
            </div>
        </div>
        <template #footer></template>
    </Dialog>
    {{ clickedGameId }}
    {{ currentGameDetails }}
    <DataView
        :value="props?.games"
        dataKey="id" 
        layout="grid"
        class="ml-8"
    >
        <template #grid="slotProps">
            <div class="grid grid-col-12 gap-4">
                <div v-for="(game, index) in slotProps.items" :key="index">
                     <GameCard
                     v-if="game"
                     :game="game" 
                     @click="toggleModal(game.id)"
                     />
                </div>
            </div>
        </template>
    </DataView>
</template>
<script setup lang="ts">
    import { ref, watchEffect } from 'vue';
    import GameCard from './GameCard.vue'
    import { getGameDetails } from '../../apis/dataHelper';

    const props = defineProps<{
        games: []
    }>()

    const showModal = ref(false)
    const clickedGameId = ref()
    const currentGameDetails = ref()

    watchEffect(async() => {
        currentGameDetails.value = await getGameDetails(clickedGameId.value)
    })

    function toggleModal(gameId: number) {
        clickedGameId.value = gameId
        showModal.value = !showModal.value
    }
</script>