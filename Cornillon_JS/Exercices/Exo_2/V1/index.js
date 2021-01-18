const contact = [
    {
        prenom : "toto",
        nom : "totonom",
        age : "20",
        tel : "0673927473",
        city : "Toulouse",
        mail : "toto@mail.fr",
    },
    {
        prenom : "coco",
        nom : "coconom",
        age : "22",
        tel : "0637283819",
        city : "toulouse",
        mail : "coco@mail.fr",
    },
    {
        prenom : "titi",
        nom : "titinom",
        age : "21",
        tel : "0637261838",
        city : "nice",
        mail : "titi@mail.fr",
    },
]

function afficheContact({prenom, nom, age, tel, city, mail}) {
  const str =  `
    Nom : ${nom} - Prénom : ${prenom}
    age : ${age}
    tel : ${tel}
    city: ${city}
    mail: ${mail}
    `;
    console.log(str);
}

contact.forEach(c => afficheContact(c));

