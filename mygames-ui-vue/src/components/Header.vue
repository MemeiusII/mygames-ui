<template>
    <header class="pl-5 pr-5 ">
        <h1 class="pb-2 font-bold">{{ props.title }}</h1>
        <h3 class="pb-2 font-bold">{{ props.subtitle }}</h3>
    </header>
    <hr class="my-4 border-1 border-green-400" />
</template>
<script setup lang="ts">
    const props = defineProps<{
        title : string
        subtitle : string
    }>()
</script>