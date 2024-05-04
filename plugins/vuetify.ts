// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import { md3 } from 'vuetify/blueprints'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration
        components,
        directives,
        blueprint: md3,
    })
    app.vueApp.use(vuetify)
})