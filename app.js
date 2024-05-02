$(document).ready(function () {
  $("#hello").click(function () {
    const greetings = [
      "Hola",
      "Namaskaram",
      "Howdy",
      "Namovagam",
      "Aadab",
      "Salaam",
      "Habbibbi",
      "yo",
    ]

    this.innerText = _.sample(greetings) // Using Lodash to pick a random greeting
  })
})
