document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

  if (document.getElementById("nome-do-usuario").value != "" && document.getElementById("email-do-usuario").value != "" && document.getElementById("telefone").value != "") {
  alert("Prontinho! Você receberá as novidades por email.")

  }else {
  alert("Por favor, preencha os campos nome e email!")
}


}


