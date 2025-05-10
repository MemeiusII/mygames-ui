<template>
    <Dialog class="m-5"
        :visible="props.showModal" 
        @update:visible="emits('hideModal')"
    >
        <template #header>
            <h2>{{ props.game?.id !== '' ? 'Edit game' : 'Add game' }}</h2>
        </template>
        <form @submit.prevent="onSubmit" class="p-5">
            <div class="grid">
                <!-- Id -->
                <InputGroup class="field col"
                    v-tooltip.left="{ value: props.game?.id ? 'Cannot change id when editing' : '' }"
                >
                    <InputGroupAddon>
                        <i class="pi pi-pencil"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                        <InputText
                            id="id"
                            type="text"
                            v-model="form.id.$value"
                            :disabled="!!props.game?.id"
                            :invalid="form.id.$error"
                        ></InputText>
                        <label for="id">Id</label>
                    </FloatLabel>
                </InputGroup>
                <small v-if="form.id.$error" class="text-red-500">{{ form.id.$errorMessages[0] }}</small>
                <!-- Name -->
                <InputGroup class="field col">
                    <InputGroupAddon>
                        <i class="pi pi-pencil"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                        <InputText
                            id="name"
                            type="text"
                            v-model="form.name.$value"
                            :invalid="form.name.$error"
                        ></InputText>
                        <label for="name">Name</label>
                    </FloatLabel>
                </InputGroup>
                <small v-if="form.name.$error" class="text-red-500">{{ form.name.$errorMessages[0] }}</small>
                <!-- Yearpublished -->
                <InputGroup class="field col">
                    <InputGroupAddon>
                        <i class="pi pi-pencil"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                        <InputText
                            id="year"
                            type="number"
                            v-model="form.yearpublished.$value"
                            :invalid="form.yearpublished.$error"
                        ></InputText>
                        <label for="year">Year Published</label>
                    </FloatLabel>
                </InputGroup>
                <small v-if="form.yearpublished.$error" class="text-red-500">{{ form.yearpublished.$errorMessages[0] }}</small>
            </div>
            <div class="grid">
                <!-- Description -->
                <InputGroup class="field col">
                    <InputGroupAddon>
                        <i class="pi pi-pencil"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                        <InputText
                            id="description"
                            type="text"
                            v-model="form.description.$value"
                            :invalid="form.description.$error"
                        ></InputText>
                        <label for="description">Description</label>
                    </FloatLabel>
                </InputGroup>
                <small v-if="form.description.$error" class="text-red-500">{{ form.description.$errorMessages[0] }}</small>
            </div>
            <div class="grid">
                <!-- Image -->
                <InputGroup class="field col">
                    <InputGroupAddon>
                        <i class="pi pi-pencil"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                        <InputText
                            id="image"
                            type="text"
                            v-model="form.image.$value"
                            :invalid="form.image.$error"
                        ></InputText>
                        <label for="image">Image Link</label>
                    </FloatLabel>
                </InputGroup>
                <small v-if="form.image.$error" class="text-red-500">{{ form.image.$errorMessages[0] }}</small>
            </div>
            <div class="grid">
                <!-- Rating -->
                <InputGroup class="field col">
                    <InputGroupAddon>
                        <i class="pi pi-pencil"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                        <InputNumber
                            id="rating"
                            :min="0"
                            :max="10"
                            v-model="form.rating.$value"
                            :invalid="form.rating.$error"
                        ></InputNumber>
                        <label for="rating">Rating</label>
                    </FloatLabel>
                </InputGroup>
                <small v-if="form.rating.$error" class="text-red-500">{{ form.rating.$errorMessages[0] }}</small>
                <!-- Weight -->
                <InputGroup class="field col">
                    <InputGroupAddon>
                        <i class="pi pi-pencil"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                        <InputNumber
                            id="weight"
                            :min="0"
                            :max="5"
                            v-model="form.weight.$value"
                            :invalid="form.weight.$error"
                        ></InputNumber>
                        <label for="weight">Weight</label>
                    </FloatLabel>
                </InputGroup>
                <small v-if="form.weight.$error" class="text-red-500">{{ form.weight.$errorMessages[0] }}</small>
                <!-- Minage -->
                <InputGroup class="field col">
                    <InputGroupAddon>
                        <i class="pi pi-pencil"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                        <InputNumber
                            id="minage"
                            :min="0"
                            v-model="form.minage.$value"
                            :invalid="form.minage.$error"
                        ></InputNumber>
                        <label for="minage">Min Age</label>
                    </FloatLabel>
                </InputGroup>
                <small v-if="form.minage.$error" class="text-red-500">{{ form.minage.$errorMessages[0] }}</small>
            </div>
            <div class="grid">
                <!-- Minplayers -->
                <InputGroup class="field col">
                    <InputGroupAddon>
                        <i class="pi pi-pencil"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                        <InputNumber
                            id="minplayers"
                            :min="0"
                            v-model="form.minplayers.$value"
                            :invalid="form.minplayers.$error"
                        ></InputNumber>
                        <label for="minplayers">Min Players</label>
                    </FloatLabel>
                </InputGroup>
                <small v-if="form.minplayers.$error" class="text-red-500">{{ form.minplayers.$errorMessages[0] }}</small>
                <!-- Maxplayers -->
                <InputGroup class="field col">
                    <InputGroupAddon>
                        <i class="pi pi-pencil"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                        <InputNumber
                            id="maxplayers"
                            :min="0"
                            v-model="form.maxplayers.$value"
                            :invalid="form.maxplayers.$error"
                        ></InputNumber>
                        <label for="maxplayers">Max Players</label>
                    </FloatLabel>
                </InputGroup>
                <small v-if="form.maxplayers.$error" class="text-red-500">{{ form.maxplayers.$errorMessages[0] }}</small>
                <!-- Minplaytime -->
                <InputGroup class="field col">
                    <InputGroupAddon>
                        <i class="pi pi-pencil"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                        <InputNumber
                            id="minplaytime"
                            :min="0"
                            v-model="form.minplaytime.$value"
                            :invalid="form.minplaytime.$error"
                        ></InputNumber>
                        <label for="minplaytime">Min Playtime</label>
                    </FloatLabel>
                </InputGroup>
                <small v-if="form.minplaytime.$error" class="text-red-500">{{ form.minplaytime.$errorMessages[0] }}</small>
                <!-- Maxplaytime -->
                <InputGroup class="field col">
                    <InputGroupAddon>
                        <i class="pi pi-pencil"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                        <InputNumber
                            id="maxplaytime"
                            :min="0"
                            v-model="form.maxplaytime.$value"
                            :invalid="form.maxplaytime.$error"
                        ></InputNumber>
                        <label for="maxplaytime">Max Playtime</label>
                    </FloatLabel>
                </InputGroup>
                <small v-if="form.maxplaytime.$error" class="text-red-500">{{ form.maxplaytime.$errorMessages[0] }}</small>
            </div>
            <!-- Designers -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <FloatLabel variant="on">
                    <InputText
                        id="designers"
                        type="text"
                        v-model="form.designers.$value"
                        :invalid="form.designers.$error"
                    ></InputText>
                    <label for="designers">Designers</label>
                </FloatLabel>
            </InputGroup>
            <small v-if="form.designers.$error" class="text-red-500">{{ form.designers.$errorMessages[0] }}</small>
            <!-- Artists -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <FloatLabel variant="on">
                    <InputText
                        id="artists"
                        type="text"
                        v-model="form.artists.$value"
                        :invalid="form.artists.$error"
                    ></InputText>
                    <label for="artists">Artists</label>
                </FloatLabel>
            </InputGroup>
            <small v-if="form.artists.$error" class="text-red-500">{{ form.artists.$errorMessages[0] }}</small>
            <!-- Publishers -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <FloatLabel variant="on">
                    <InputText
                        id="publishers"
                        type="text"
                        v-model="form.publishers.$value"
                        :invalid="form.publishers.$error"
                    ></InputText>
                    <label for="publishers">Publishers</label>
                </FloatLabel>
            </InputGroup>
            <small v-if="form.publishers.$error" class="text-red-500">{{ form.publishers.$errorMessages[0] }}</small>
            <Button type="submit">Submit</Button>
        </form>
    </Dialog>
</template>
<script setup lang="ts">
    import { InputGroup, InputText, InputNumber, InputGroupAddon, FloatLabel } from 'primevue'
    import { reactive, shallowRef, watchEffect } from 'vue'
    import { defineForm, field, isValidForm, toObject } from 'vue-yup-form'
    import * as yup from 'yup'

    const props = defineProps<{
        game?: any,
        showModal: boolean
    }>()

    const emits = defineEmits([
        'hideModal'
    ])

    const form = shallowRef()
    const gameProp = reactive({
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
    })

    function generateForm() {
        return defineForm({
            id: field(gameProp.id, yup.string().required()),
            name: field(gameProp.name, yup.string().required()),
            description: field(gameProp.description, yup.string().required()),
            image: field(gameProp.image, yup.string().required()),
            yearpublished: field(gameProp.yearpublished, yup.number().required()),
            rating: field(gameProp.rating, yup.number().required()),
            minplayers: field(gameProp.minplayers, yup.number().required()),
            maxplayers: field(gameProp.maxplayers, yup.number().required()),
            minplaytime: field(gameProp.minplaytime, yup.number().required()),
            maxplaytime: field(gameProp.maxplaytime, yup.number().required()),
            minage: field(gameProp.minage, yup.number().required()),
            weight: field(gameProp.weight, yup.number().required()),
            designers: field<string[]>(gameProp.designers, yup.array()),
            artists: field<string[]>(gameProp.artists, yup.array()),
            publishers: field<string[]>(gameProp.publishers, yup.array()),
        })
    }

    watchEffect(() => {
        gameProp.id = props.game?.id ?? ""
        gameProp.name = props.game?.name ?? ""
        gameProp.description = props.game?.description ?? ""
        gameProp.image = props.game?.image ?? ""
        gameProp.yearpublished = props.game?.yearpublished ?? null
        gameProp.rating = props.game?.rating ?? null 
        gameProp.weight = props.game?.weight ?? null
        gameProp.minplayers = props.game?.minplayers ?? null
        gameProp.maxplayers = props.game?.maxplayers ?? null
        gameProp.minplaytime = props.game?.minplaytime ?? null
        gameProp.maxplaytime = props.game?.maxplaytime ?? null
        gameProp.minage = props.game?.minage ?? null
        gameProp.designers = props.game?.designers ?? []
        gameProp.artists = props.game?.artists ?? []
        gameProp.publishers = props.game?.publishers ?? []

        form.value = generateForm()
    })

    function onSubmit() {
        if(!isValidForm(form.value)) {
            alert("Please check your entries.")
            return
        }
        if(props.game?.id) {
            console.log('Edit')
        } else {
            console.log('Add')
        }
        const game = toObject(form.value)
        console.log(game)
        emits('hideModal')
    }
</script>