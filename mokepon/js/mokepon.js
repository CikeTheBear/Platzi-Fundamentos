function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    alert("Seleccionaste a tu mascota")
}




window.addEventListener("load", iniciarJuego)




let botonReiniciar = document.getElementById("boton-reiniciar")