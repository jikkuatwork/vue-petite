import { createApp } from "https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js"
import { Board } from "./components/Board.js"

createApp({
  board: Board(),
}).mount()
