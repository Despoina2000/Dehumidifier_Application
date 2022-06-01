if(document.getElementById("EcoMode").checked) {
    chosen_hum = "hum1";
    chosen_fan = "fan1";
}else if(document.getElementById("DryClothes").checked) {
    chosen_hum = "hum2";
    chosen_fan = "fan2";
}else if(document.getElementById("Auto").checked) {
    chosen_hum = "hum3";
    chosen_fan = "fan3";
}

var h = document.getElementById(chosen_hum);
var f = document.getElementById(chosen_fan);
var humidity = h.value;
var fanspeed = f.value;
window.alert(humidity)

document.getElementById("humidityout").innerHTML = humidity;
document.getElementById("fanspeedout").innerHTML = fanspeed;