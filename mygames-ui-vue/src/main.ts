import { createApp } from 'vue'
import './style.css'

// Primevue package
import PrimeVue from 'primevue/config'

// Themes
import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css'
import Aura from '@primeuix/themes/aura'

// Component imports
import App from './App.vue'
import Header from './components/Header.vue'
import GameGrid from './components/GameGrid.vue'
import { SelectButton, Button, DataView, Card, Dialog, Tooltip, Toast, ToastService, ConfirmDialog, ConfirmationService } from 'primevue'

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.use(ToastService)
app.use(ConfirmationService)

// Tooltip setup
app.directive('tooltip', Tooltip)

// PrimeVue Components
app.component('Button', Button)
app.component('SelectButton', SelectButton)
app.component('DataView', DataView)
app.component('Card', Card)
app.component('Dialog', Dialog)
app.component('Toast', Toast)
app.component('ConfirmDialog', ConfirmDialog)

// Custom Components
app.component('Header', Header)
app.component('GameGrid', GameGrid)

app.mount('#app')