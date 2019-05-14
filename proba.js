function jelszoEllenorzes() {
var jelszo = document.getElementById("jelszodoboz");
    if(jelszo.value == "asdfasz") {
        alert("Sikeres Belépés!")
        return true;
    }
    else {
        alert("Sikertelen Belépés!")
        return false;
    }
}