import { createApp } from 'vue'
import './style.css'

// Primevue package
import PrimeVue from 'primevue/config'

// Themes
import 'primeflex/primeflex.css'
import Aura from '@primeuix/themes/aura'

// Component imports
import App from './App.vue'
import Header from './components/Header.vue'
import MovieGrid from './components/MovieGrid.vue'
import { SelectButton, Button, DataView } from 'primevue'

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
})

// PrimeVue Components
app.component('Button', Button)
app.component('SelectButton', SelectButton)
app.component('DataView', DataView)

// Custom Components
app.component('Header', Header)
app.component('MovieGrid', MovieGrid)

app.mount('#app')