//SPREAD
//Cú pháp ...tên biến cần phân giải. Vd: ...array, ...object
//Dùng để phân giải đều phần tử con(trong array), thuộc tính (trong object)
//Array
//1-Dùng để phân giải array sau đó nối lại thành 1 array lớn thay vì dùng hàm concat().
var array1 = ['A', 2, false];

var array2 = [3, 'D', 'F', true, 5];

var arrayCombine = [...array1, ...array2];

console.log('array1: ', array1);
console.log('array2: ', array2);
console.log('Array kết hợp sau khi phân giải array1 và array2. arrayCombine: ', arrayCombine);

//2-Dùng để phân giải array truyền vô param là rest parameters của hàm.
//Vd:
function writeLog(...contents) {///...contents là rest parameters
    for (const content of contents) {
        console.log('Param rest parameter sau khi được phân giải: ', content);
    }
}
writeLog('truyền', 'đơn', 'lẻ');//truyền data đơn lẻ theo cách bình thường
writeLog(...arrayCombine);//spread arrayCombine

//Object
//Dùng để hợp nhất 2 object với nhau. Thuộc tính nào trùng thì sẽ lấy giá trị sau cùng được gán.
//Vd:
var person = {name: 'Atom', age: 27};
var student ={
    ...person,
    age: 18,
    class: '12A10',
    grade: 10
};
console.log('person: ', person);
console.log('object student sau khi được hợp nhất với person: ', student);