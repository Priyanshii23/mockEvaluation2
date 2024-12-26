const navbar = () => {
    let card = `<div id = "nav">
      <a id = "home" href = "index.html"> Home</a>
      <a id = quiz" href = "quiz.html"> Quiz </a>
      <a id = "questions" href = "questions.html"> Questions </a>
      </div>
      

    `

    document.getElementById("nav").innerHTML = card
}



navbar()