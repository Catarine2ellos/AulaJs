function touch() {

var userName = prompt("Olá! Qual o seu nome?")
if(userName){
  document.getElementById("rockimg").src="img/rock_happy2.png"
  alert("Prazer, " +userName);
}
}
