prvocislo = True
print("Zadej číslo: ")
cislo = int(input())
if cislo < 2:
    prvocislo = False
else:
    for x in range(2, sqrt(cislo) + 1, 1):
        if cislo % x == 0:
            prvocislo = False
            x = cislo
if prvocislo:
    print(str(cislo) + " Je prvočíslo ")
else:
    print(str(cislo) + " Není prvočíslo ")
