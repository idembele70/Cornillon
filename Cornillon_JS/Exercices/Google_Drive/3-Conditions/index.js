let menu = ['entrée', 'plat', 'dessert'];

let saisie = 'plat';

switch (saisie) {
    case menu[0]:
    case menu[1]:
        console.log('frittes');
        console.log('salade');
        break;
    case menu[2]:
        console.log('tartes');
        break;
        default:
            console.log('Vous n\'avez choisi aucun menu');
            break;
}