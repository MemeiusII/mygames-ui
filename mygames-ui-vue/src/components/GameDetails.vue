<template>
    <Dialog v-if="props.gameDetails" class="m-5"
        v-model:visible="localShowModal"
        @hide="emits('hideModal')"
    >
        <template #header>
            <h2>{{ props.gameDetails?.name }} ({{ props.gameDetails?.yearpublished }})</h2>
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
                <p><strong>Designers: </strong>{{ props.gameDetails?.designers?.join(', ') }}</p>
                <p><strong>Artists: </strong>{{ props.gameDetails?.artists?.join(', ') }}</p>
                <p><strong>Publishers: </strong>{{ props.gameDetails?.publishers?.join(', ') }}</p>
                <hr>
                <p><strong>Description: </strong>{{ props.gameDetails?.description }}</p>
            </div>
        </div>
        <template #footer>
            <div class="pt-3">
                <Button
                    severity="info"
                    @click="emits('edit', props?.gameDetails)"
                >Edit</Button>
                <Button
                    severity="danger"
                    @click="emits('delete', props?.gameDetails.id)"
                >Delete</Button>
            </div>
        </template>
    </Dialog>
</template>
<script setup lang="ts">
    import { ref, watch } from 'vue';

    const props = defineProps<{
        gameDetails: any,
        showModal: boolean
    }>()

    const emits = defineEmits([
        'hideModal',
        'edit',
        'delete'
    ])

    const localShowModal = ref(props.showModal)

    watch(() => props.showModal, (newVal) => {
        localShowModal.value = newVal
    })
</script>