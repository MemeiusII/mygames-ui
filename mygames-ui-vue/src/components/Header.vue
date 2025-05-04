<template>
    <header class="pl-5 pr-5 flex align-items-center">
        <h1 class="pb-2 font-bold">{{ props.title }}</h1>
        <div class="pl-5">
            <SelectButton 
                v-model="modeValue"
                :options="options"
                :defaultValue="modeValue"
                @change="toggleDarkMode()"
            ></SelectButton>
         </div>
    </header>
    <hr class="my-4 border-1 border-green-400" />
</template>
<script setup lang="ts">
    import { ref } from 'vue';


    const props = defineProps<{
        title : string
    }>()
    const modeValue = ref('Light mode')
    const options = ['Light mode', 'Dark mode']

    function toggleDarkMode() {
        document.documentElement.classList.toggle('my-app-dark')
    }
</script>