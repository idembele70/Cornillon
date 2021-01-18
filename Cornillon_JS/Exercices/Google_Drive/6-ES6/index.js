const contact = {
    names: 'Emilie',
    age: 53,
    email: 'emilie@mail.fr',
};

function presentation( { names, email}) {
    console.log(`L'email d'${names} est ${email}.`);
}


presentation(contact);
