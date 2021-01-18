
const a = buildUser('Michael', 44, true);

console.log(a);
function buildUser(firstname,age,man) {
    return {firstname, age, man };
}