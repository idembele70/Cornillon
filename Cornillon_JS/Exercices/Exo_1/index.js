
/*
const show_contact = function(contact){
    return "salut ${contact} !";
};

const contact = [
    {
    name : "Coco",
    email : 'Coco@mail.fr',
    age : 56,
},
{
    name : "Toto",
    email: 'Toto@mail.com',
    age : 56,
},

];

console.log("La liste : " , show_contact(3));*/
var i = 0;
const contact= [
    name= 'keltoum','danya','lisa',
     age = '22','18','20',
 ];
 contact.forEach(
     function(){
         console.log("${contact.name[i]}");
         i++;
     }
     
 );
