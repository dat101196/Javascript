//Enhanced object literals
//Giúp code gọn hơn
//1-Định nghĩa key:value cho object
//2-Định nghĩa method cho object
//Vd:
var name = 'Atom';
var age = 27;

//Khai báo object thông thường
var person = {
    name: name,
    age: age,
    getName: function () { 
        return name; 
    }
};

//Khai báo object literals
var personLiteral = {
    name,
    age,
    getName(){
        return name;
    }
}

console.log(personLiteral);
console.log(personLiteral.getName());

//3-Định nghĩa key cho object bằng biến kiểu string
//Vd:
var keyName = 'name_from_key';
var keyAge = 'age_from_key';
const personObject = {
    [keyName]: 'ABC',
    [keyAge]: 21
}

console.log(personObject);