import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import {Centrifuge} from "centrifuge";

const app = createApp(App)

app.use(createPinia())

app.use({
    install(app, options) {
        app.config.globalProperties.authToken = document.getElementsByName('x-bearer')[0].getAttribute('content')

        const centrifuge = new Centrifuge('ws://127.0.0.1:8081/connection/websocket', {
            data: {
                authToken: app.config.globalProperties.authToken
            }
        });

        centrifuge.on('connected', (ctx) => {
            app.config.globalProperties.user = ctx.data.user
        })

        centrifuge.connect();

        app.config.globalProperties.centrifuge = centrifuge
    }
})

app.mount('#app')
