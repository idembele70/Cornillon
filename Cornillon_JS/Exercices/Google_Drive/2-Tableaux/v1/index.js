const housesTag = document.querySelectorAll('house');

fetch('./map.json')
    .then(res => res.json())
    .then(map => {
        createStyle();
        createHTMLHouse(map);
    });

    function createStyle() {
        document.head.innerHTML += `
        <style>
            .row {
                display: flex;
            }
            .row div {
                width: 10px;
                height: 10px;
            }
            .sky { background: lightblue; }
            .wall { background: coral; }
            .door { background: brown; }
            .roof { background:chocolate; }
        </style>
        `;

    }

function createHTMLHouse(map) {

    housesTag.forEach(housesTag => {
        let houseHTMLStructure = ``;
        for (let row of map) {
            houseHTMLStructure += '<div class="row">';
            for (let col of row) {
                houseHTMLStructure += '<div ';
                switch (col) {
                    case 0:
                        houseHTMLStructure += 'class = "sky"';
                        break;
                    case 1:
                        houseHTMLStructure += 'class = "wall"';
                        break;
                    case 2:
                        houseHTMLStructure += 'class = "roof"';
                        break;
                    case 3:
                        houseHTMLStructure += 'class = "door"';
                        break;
                }
                houseHTMLStructure += '></div>';
            }
            houseHTMLStructure += '</div>'
        }

        housesTag.innerHTML = houseHTMLStructure;
    });
}
