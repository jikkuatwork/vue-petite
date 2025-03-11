export function Square({ value, play }) {
  return {
    value: value,
    play: play,
    $template: /* HTML */ `
      <button
        @click="play"
        class="w-24 h-24 flex items-center justify-center border-2 border-gray-500 font-bold text-xl rounded-lg transition duration-200 ease-in-out transform hover:scale-110"
      >
        {{ value }}
      </button>
    `,
  }
}
