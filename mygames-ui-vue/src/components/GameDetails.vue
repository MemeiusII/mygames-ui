<template>
    <Dialog v-if="props.gameDetails" class="m-5"
        v-model:visible="props.showModal"
        @hide="emits('hideModal')"
    >
        <template #header>
            {{ props.gameDetails?.name }} {{ props.gameDetails?.yearpublished }}
        </template>
        <div class="grid">
            <div class="col" style="overflow: hidden;">
                <img
                :src="props.gameDetails?.image"
                :alt="`${props.gameDetails?.name} thumbnail`"
                style="height: 500px;"
                />
            </div>
            <div class="col">
                <p><strong>Players: </strong> {{ props.gameDetails?.minplayers }} - {{ props.gameDetails?.maxplayers }}</p>
                <p><strong>Play time: </strong> {{ props.gameDetails?.minplaytime }} - {{ props.gameDetails?.maxplaytime }}</p>
                <p><strong>For ages: </strong>{{ props.gameDetails?.minage }}+</p>
                <p><strong>Designers: </strong>{{ props.gameDetails?.designers?.join(', ') }}+</p>
                <p><strong>Artists: </strong>{{ props.gameDetails?.artists?.join(', ') }}+</p>
                <p><strong>Publishers: </strong>{{ props.gameDetails?.publishers?.join(', ') }}+</p>
                <hr>
                <p><strong>Description: </strong>{{ props.gameDetails?.description }}</p>
            </div>
        </div>
        <template #footer></template>
    </Dialog>
</template>
<script setup lang="ts">
    const props = defineProps<{
        gameDetails: any,
        showModal: boolean
    }>()

    const emits = defineEmits([
        'hideModal'
    ])
</script>