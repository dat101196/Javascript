//Đều dùng để khai báo biến
//-Phạm vi (Scope)
//Let, const phạm vi truy cập chỉ bên trong block code (trong if else, loop, {})
//var phạm vi truy cập global (toàn file)


//Vd:
// if(true){
//     let letVariable = 'let';
//     var varVariable = 'var';
//     const constVariable = 'const';
// }

// //Chỉ log được khi khai báo = var
// //Error với let,const
// console.log(varVariable);
// console.log(letVariable);//error
// console.log(constVariable);//error

//-Hoisting
//Nghĩa là các biến khi biên dịch sẽ được khai báo đầu tiên => khai báo sau khi gán vẫn được
//var có hoisting / let,const không có
//Vd:

//OK
// a = 'Atom';
// var a;
// console.log('Hello ', a);

// //Error 
// a2 = 'Atom 2'
// let a2;
// console.log('Hello ', a2);

//-Gán (Assignment)
//Let, var có thể gán nhiều lần
//Const chỉ gán 1 lần duy nhất lúc khai báo và khi khai báo const bắt buộc phải gán data.
//Vd:

// let a = 1;
// var b = 2;

// a = 4;//OK
// b = 3;//OK

// const c = 1;
// c = 5//Error

//*Lưu ý: const chỉ cho phép gán 1 lần với cái biến được khai báo const và thuộc tính bên trong biến const vẫn có thể gán như bình thường
//Vd:

const obj = {ID: 1};
obj.ID = 2;//OK
//a = {ID:2};//Error
console.log(obj);
