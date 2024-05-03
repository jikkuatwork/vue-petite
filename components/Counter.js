export function Counter({ initialValue }) {
  return {
    $template: /* HTML */ ` <div
      class="p-2 font-mono bg-yellow-300 hover:bg-yellow-400 text-center rounded-md t"
    >
      {{ count }}
      <div
        class="p-2 mt-2 bg-black bg-opacity-80 hover:bg-opacity-100 text-white rounded select-none cursor-pointer t"
        @click="increment"
      >
        +
      </div>
    </div>`,
    count: initialValue,
    increment() {
      this.count++
    },
    mounted() {
      console.log(`I'm mounted!`)
    },
  }
}
