function verificarRespuestas() {
  const total = 5; // total de las preguntas
  let puntos = 0; //los puntos para obtener al contestar las preguntas

  const myForm = document.forms["quizForm"]; //referencia del formulario
  const respuestas = ["a", "b", "c", "a", "b"]; //almacenar las respuesta del formulario // 5 elementos

  console.log(myForm);

  for (var i = 1; i <= total; i++) {
    if (myForm["p" + i].value === null || myForm["p" + 1].value === "") {
      alert("Por favor, responde a la pregunta " + i);
      return false;
    } else {
      if (myForm["p" + i].value === respuestas[i - 1]) {
        puntos++;
      }
    }
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML =
    "<h3>obtuviste <span>" +
    puntos +
    "</span>de <span>" +
    total +
    " puntos</span></h3>";

  return false;
}
