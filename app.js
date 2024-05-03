import { createApp } from "https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js"
import { Counter } from "./components/Counter.js"
import { Decrementer } from "./components/Decrementer.js"

createApp({
  Counter,
  Decrementer,
}).mount()
