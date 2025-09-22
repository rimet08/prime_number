function main() {
    var x, y, cislo;
    var prvocislo;

    prvocislo = true;
    window.alert("Zadej číslo: ");
    cislo = Number(window.prompt('Enter a value for cislo'));
    if (cislo < 2) {
        prvocislo = false;
    } else {
        for (x = 2; x <= Math.sqrt(cislo); x++) {
            if (cislo % x == 0) {
                prvocislo = false;
                x = cislo;
            }
        }
    }
    if (prvocislo) {
        window.alert(cislo.ToString() + " Je prvočíslo ");
    } else {
        window.alert(cislo.ToString() + " Není prvočíslo ");
    }
}
