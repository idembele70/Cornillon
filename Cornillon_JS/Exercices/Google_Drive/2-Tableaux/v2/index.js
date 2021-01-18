let housesTag = document.querySelectorAll('house');

fetch('./map.json')
    .then(res => res.json())
    .then(map => {
        createHTMLHouse(map);
        createStyle();
    });

    function createStyle() {
        document.head.innerHTML = `
        <style>
       .row {
        display: flex;
       }
       .row > div {
        height: 10px;
        width: 10px;
       }
       .ciel {
        background-color: lightblue;
       }
       .mur {
        background-color: coral;
       }
       .porte {
        background-color: brown;
       }
       .toit {
           background-color: chocolate;
       }
   </style>
        `;

    }

function createHTMLHouse(map) {
    housesTag.forEach(housesTag => {

        let houseHTMLStrucuture = ``;
        for (const row of map) {
            houseHTMLStrucuture += `<div class="row">`;
            for (const col of row) {
                houseHTMLStrucuture += '<div ';
                switch (col) {
                    case 0:
                        houseHTMLStrucuture += 'class="ciel">' ;
                        break;

                    case 1:
                        houseHTMLStrucuture += ' class="mur">';
                        break;

                    case 2:
                        houseHTMLStrucuture += ' class="toit">';
                        break;

                    case 3:
                        houseHTMLStrucuture += ' class="porte">';
                        break;

                    default:
                        break;
                }
                houseHTMLStrucuture +='</div>';
            }
            houseHTMLStrucuture += '</div>';
            housesTag.innerHTML = houseHTMLStrucuture;
        }
    });
}