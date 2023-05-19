/*
Có 3 loại function
1-Declaration function
2-Exression function
3-Arrow function (ES6)
*/

// //-------------Declaration function
// //Có hoisting - có thể gọi trước khi định nghĩa
// //Vd:
// declFunc();
// function declFunc() {
//     console.log('Declaration function tạo sau khi được gọi đến (hoisting).');
// }


// //-------------Exression function
// //Ko có hoisting
// //Vd:
// // expFunc()//Error
// //C1: khai báo như 1 biến
// const expFunc = function () {
//     console.log('Exression function tạo bằng cách khai báo biến.');
// }
// expFunc();//Success
// //C2: sử dụng trong object hoặc làm callback
// var obj = {
//     expFunc: function (a, b) {
//         console.log('Exression function trong object.');
//     }
// }
// obj.expFunc();
// //Làm callback
// setTimeout(function(){
//     console.log('Expression function làm callback trong setTimeout');
// }, 100);


//-------------Arrow function
//Ra mắt ở phiên bản ES6. Giúp làm gọn code hơn. Cú pháp như sau
//Vd:
// const writeLog = (content) =>{
//     return console.log(content);
// }

//-Đối với code chỉ return 1 dòng thì có thể rút gọn bằng cách loại bỏ {} và return như sau:
// const writeLog = (content) => console.log(content);
// writeLog('aaaa');


//Ví dụ so sánh 3 loại function để thấy độ gọn gàng của arrow function
//Declaration function
// function decSum(a, b) {
//     return a + b;
// }
// console.log('Declaration function sum. Result = ', decSum(1, 2));
// //Exression function
// const expSum = function (a, b) {
//     return a + b;
// }
// console.log('Exression function sum. Result = ', expSum(1, 2));
// //Arrow function
// const arrowSum = (a, b) => a + b;
// console.log('Arrow function sum. Result = ', arrowSum(1, 2));


//*Khi arrow function loại bỏ {} muốn return ra object thì ta sẽ bỏ object trong (). 
//Vd:
// const person = (name, age) => ({name: name, age: age});

// console.log(person('Atom', 27));

//-Arrow function chỉ có 1 tham số thì ta có thể loại bỏ () bao bọc tham số
//Vd:
const writeLog = content => console.log(content);
writeLog('aaaa');

//-Arrow function ko có context. Vd: khi định nghĩa trong object gọi this ko trả ra đối tượng gọi tới function mà trả ra window (object lớn nhất trong html, có thể gọi tới các DOM khác trong trang html)
const person = {
    name: 'Atom',
    getThisObject: () => { return this; },
    getThisObjectNormal: function(){
        return this;
    }
};

console.log('person.getName() => Result = ', person.getThisObject());
console.log('person.getNameNormal() => Result = ', person.getThisObjectNormal());