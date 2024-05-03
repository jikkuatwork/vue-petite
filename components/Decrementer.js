export function Decrementer({ initialValue }) {
  return {
    $template: /* HTML */ ` <div
      class="p-2 font-mono bg-red-200 hover:bg-red-300 text-center rounded-md t"
    >
      {{ count }}
      <div
        class="p-2 mt-2 bg-black bg-opacity-80 hover:bg-opacity-100 text-white rounded select-none cursor-pointer t"
        @click="decrement"
      >
        -
      </div>
    </div>`,
    count: initialValue,
    decrement() {
      this.count--
    },
    mounted() {
      console.log(`I'm mounted!`)
    },
  }
}
