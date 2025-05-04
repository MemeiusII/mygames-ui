<template>
    <DataView :value="movies" dataKey="id">
        <template #list="slotProps">
            <div class="flex flex-col">
                <div v-for="(item, index) in slotProps.items" :key="index">
                    <!-- Card Here -->
                </div>
            </div>
        </template>
    </DataView>
</template>
<script setup lang="ts">
    import { ref } from 'vue';

    const movies = ref()
</script>