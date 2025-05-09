<template>
    <Dialog class="m-5"
        :visible="props.showModal" 
        @update:visible="emits('hideModal')"
    >
        <template #header>
            <h2>{{ props.game ? 'Edit game' : 'Add game' }}</h2>
        </template>
        <form @submit.prevent="onSubmit">
            <!-- Id -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <InputText
                    type="text"
                    placeholder="Id"
                    v-model="form.id.$value"
                ></InputText>
                <span v-if="form.id.$error" class="text-red-500">{{ form.id.$errorMessages }}</span>
            </InputGroup>
            <!-- Name -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <InputText
                    type="text"
                    placeholder="Name"
                    v-model="form.name.$value"
                ></InputText>
                <span v-if="form.name.$error" class="text-red-500">{{ form.name.$errorMessages }}</span>
            </InputGroup>
            <!-- Description -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <InputText
                    type="text"
                    placeholder="Description"
                    v-model="form.description.$value"
                ></InputText>
                <span v-if="form.description.$error" class="text-red-500">{{ form.description.$errorMessages }}</span>
            </InputGroup>
            <!-- Image -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <InputText
                    type="text"
                    placeholder="Image link"
                    v-model="form.image.$value"
                ></InputText>
                <span v-if="form.image.$error" class="text-red-500">{{ form.image.$errorMessages }}</span>
            </InputGroup>
            <!-- Yearpublished -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <InputNumber
                    :min="0"
                    placeholder="Image link"
                    v-model="form.yearpublished.$value"
                ></InputNumber>
                <span v-if="form.yearpublished.$error" class="text-red-500">{{ form.yearpublished.$errorMessages }}</span>
            </InputGroup>
            <!-- Rating -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <InputNumber
                    :min="0"
                    :max="10"
                    placeholder="Rating"
                    v-model="form.rating.$value"
                ></InputNumber>
                <span v-if="form.rating.$error" class="text-red-500">{{ form.rating.$errorMessages }}</span>
            </InputGroup>
            <!-- Weight -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <InputNumber
                    :min="0"
                    :max="5"
                    placeholder="Weight"
                    v-model="form.weight.$value"
                ></InputNumber>
                <span v-if="form.weight.$error" class="text-red-500">{{ form.weight.$errorMessages }}</span>
            </InputGroup>
            <!-- Minplayers -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <InputNumber
                    :min="0"
                    placeholder="Min Players"
                    v-model="form.minplayers.$value"
                ></InputNumber>
                <span v-if="form.minplayers.$error" class="text-red-500">{{ form.minplayers.$errorMessages }}</span>
            </InputGroup>
            <!-- Maxplayers -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <InputNumber
                    :min="0"
                    placeholder="Max Players"
                    v-model="form.maxplayers.$value"
                ></InputNumber>
                <span v-if="form.maxplayers.$error" class="text-red-500">{{ form.maxplayers.$errorMessages }}</span>
            </InputGroup>
            <!-- Minplaytime -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <InputNumber
                    :min="0"
                    placeholder="Min Playtime"
                    v-model="form.minplaytime.$value"
                ></InputNumber>
                <span v-if="form.minplaytime.$error" class="text-red-500">{{ form.minplaytime.$errorMessages }}</span>
            </InputGroup>
            <!-- Maxplaytime -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <InputNumber
                    :min="0"
                    placeholder="Max Playtime"
                    v-model="form.maxplaytime.$value"
                ></InputNumber>
                <span v-if="form.maxplaytime.$error" class="text-red-500">{{ form.maxplaytime.$errorMessages }}</span>
            </InputGroup>
            <!-- Minage -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <InputNumber
                    :min="0"
                    placeholder="Min Age"
                    v-model="form.minage.$value"
                ></InputNumber>
                <span v-if="form.minage.$error" class="text-red-500">{{ form.minage.$errorMessages }}</span>
            </InputGroup>
            <!-- Designers -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <InputText
                    type="text"
                    placeholder="Designers"
                    v-model="form.designers.$value"
                ></InputText>
                <span v-if="form.designers.$error" class="text-red-500">{{ form.designers.$errorMessages }}</span>
            </InputGroup>
            <!-- Artists -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <InputText
                    type="text"
                    placeholder="Artists"
                    v-model="form.artists.$value"
                ></InputText>
                <span v-if="form.artists.$error" class="text-red-500">{{ form.artists.$errorMessages }}</span>
            </InputGroup>
            <!-- Publishers -->
            <InputGroup class="field col">
                <InputGroupAddon>
                    <i class="pi pi-pencil"></i>
                </InputGroupAddon>
                <InputText
                    type="text"
                    placeholder="Publishers"
                    v-model="form.publishers.$value"
                ></InputText>
                <span v-if="form.publishers.$error" class="text-red-500">{{ form.publishers.$errorMessages }}</span>
            </InputGroup>
            <Button type="submit" >Submit</Button>
            <Button @click.prevent="onReset()" type="button" severity="danger">Reset</Button>
        </form>
    </Dialog>
</template>
<script setup lang="ts">
    import { InputGroup, InputText, InputNumber, InputGroupAddon } from 'primevue'
    import { reactive, shallowRef, watchEffect } from 'vue'
    import { defineForm, field, isValidForm, toObject } from 'vue-yup-form'
    import * as yup from 'yup'

    const props = defineProps<{
        game?: {
            id: string,
            name: string,
            description: string,
            image: string,
            yearpublished: number,
            rating: number,
            weight: number,
            minplayers: number,
            maxplayers: number,
            minplaytime: number,
            maxplaytime: number,
            minage: number,
            designers: [],
            artists: [],
            publishers: []
        },
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
        yearpublished: 0,
        rating: 0.0,
        weight: 0.0,
        minplayers: 0,
        maxplayers: 0,
        minplaytime: 0,
        maxplaytime: 0,
        minage: 0,
        designers: [""],
        artists: [""],
        publishers: [""]
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
            designers: field(gameProp.designers?.join(','), yup.string().required()),
            artists: field(gameProp.artists?.join(','), yup.string().required()),
            publishers: field(gameProp.publishers?.join(','), yup.string().required()),
        })
    }

    watchEffect(() => {
        gameProp.id = props.game?.id ?? ""
        gameProp.name = props.game?.name ?? ""
        gameProp.description = props.game?.description ?? ""
        gameProp.image = props.game?.image ?? ""
        gameProp.yearpublished = props.game?.yearpublished ?? 0
        gameProp.rating = props.game?.rating ?? 0.0
        gameProp.weight = props.game?.weight ?? 0.0
        gameProp.minplayers = props.game?.minplayers ?? 0
        gameProp.maxplayers = props.game?.maxplayers ?? 0
        gameProp.minplaytime = props.game?.minplaytime ?? 0
        gameProp.maxplaytime = props.game?.maxplaytime ?? 0
        gameProp.minage = props.game?.minage ?? 0
        gameProp.designers = props.game?.designers ?? [""]
        gameProp.artists = props.game?.artists ?? [""]
        gameProp.publishers = props.game?.publishers ?? [""]

        form.value = generateForm()
    })

    function onSubmit() {
        if(!isValidForm(form.value)) {
            alert("Please check your entries.")
            return
        }
        const game = toObject(form.value)
        console.log(game)
        
    }
    
    function onReset() {
        // Reset form
        form.value = generateForm()
        // Reset gameProp
        gameProp.id= ""
        gameProp.name= ""
        gameProp.description= ""
        gameProp.image= ""
        gameProp.yearpublished= 0
        gameProp.rating= 0.0
        gameProp.weight= 0.0
        gameProp.minplayers= 0
        gameProp.maxplayers= 0
        gameProp.minplaytime= 0
        gameProp.maxplaytime= 0
        gameProp.minage= 0
        gameProp.designers= [""]
        gameProp.artists= [""]
        gameProp.publishers= [""]
    }
</script>