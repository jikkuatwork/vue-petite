export function Cell({ index, handleClick }) {
  return {
    click: () => handleClick(index),
    $template: `
            <div class="w-24 h-24 bg-gray-200 flex items-center justify-center text-2xl cursor-pointer" @click="click">
                {{ window.store.board.cells[index] }}
            </div>
        `,
  }
}
