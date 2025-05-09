<template>
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
                     @game-clicked="handleEmit"
                     />
                </div>
            </div>
        </template>
    </DataView>
</template>
<script setup lang="ts">
    import GameCard from './GameCard.vue'

    const props = defineProps<{
        games: []
    }>()

    const emits = defineEmits([
        'gameClicked'
    ])

    function handleEmit(emittedId: any) {
        emits('gameClicked', emittedId)
    }

</script>