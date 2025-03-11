import { Cell } from "./Cell.js"

export function Board() {
  const cells = Array(9).fill(null)
  let currentPlayer = "X"

  function checkWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let line of lines) {
      const [a, b, c] = line
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a]
      }
    }
    return null
  }

  function handleClick(index) {
    if (!cells[index] && !checkWinner()) {
      cells[index] = currentPlayer
      currentPlayer = currentPlayer === "X" ? "O" : "X"
      updateDisplay()
    }
  }

  function updateDisplay() {
    document.querySelectorAll(".cell").forEach((cell, index) => {
      cell.textContent = cells[index]
    })
    document.getElementById("currentPlayer").textContent =
      `Current Player: ${currentPlayer}`
    const winner = checkWinner()
    if (winner) {
      document.getElementById("winner").textContent = `Winner: ${winner}`
    } else {
      document.getElementById("winner").textContent = ""
    }
  }

  return {
    cells,
    currentPlayer,
    checkWinner,
    handleClick,
    updateDisplay,
    $template: `
            <div class="grid grid-cols-3 gap-2">
                <div class="w-24 h-24 bg-gray-200 flex items-center justify-center text-2xl cursor-pointer cell" @click="handleClick(index)" v-for="(cell, index) in cells"></div>
            </div>
            <div class="mt-4 text-center">
                <h1 class="text-lg" id="currentPlayer">Current Player: ${currentPlayer}</h1>
                <h2 class="text-lg text-green-500" id="winner"></h2>
            </div>
        `,
  }
}
