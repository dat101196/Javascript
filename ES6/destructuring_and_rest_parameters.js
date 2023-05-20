//DESTRUCTURING - phân giải
//1-Phân giải array
//Vd:
var array = [1, 2, 3, 4];

//var [a, b, c, d] = array;
//console.log('Sau phân giải array. Result:', a, b, c, d);
//Với phần tử nào của mảng không muốn lấy thì ta chỉ để trống sau dấu ,
//Vd:
var [a, , , d] = array;
console.log('Sau phân giải array. Result:', a, d);

//Kết hợp với REST PARAMETERS
//Rest parameter dùng để lấy lại phần còn lại của mảng chưa được phân giải
//Vd:
var [a, ...rest] = array;
console.log('Sau phân giải array kết hợp rest parameter. Result:', a);
console.log('Rest sau phân giải: ', rest);//rest sẽ là mảng với các phần tử còn lại

//2-Phân giải object
//Đối với object khi phân giải cần khai báo đúng với tên thuộc tính.
//Vd:
var person = {
    name: 'Atom',
    age: 27,
    job: 'Developer',
    phone: 12345678
};
var { name, age, address } = person;
console.log('Sau phân giải object. Result:', name, age);
console.log('Phân giải thuộc tính address không tồn tại trong object. Result:', address);//address = undefined do không tồn tại trong person
//Kết hợp REST PARAMETERS
//Rest parameter dùng để lấy lại phần còn lại của object chưa được phân giải
var { name, job, ...rest } = person;

console.log('Sau phân giải object kết hợp rest parameter. Result: ', name, job);
console.log('Rest sau phân giải: ', rest);//rest sẽ là object với các thuộc tính còn lại


//*Áp dụng để giải thử thách xóa thuộc tính object mà ko cần dùng delete
//Vd:
//Xóa thuộc tính job ra khỏi person
var { job, ...newPersonWithoutJob } = person;
console.log('Dùng rest parameter kết hợp destructuring để xóa bỏ thuộc tính ko muốn lấy của object. Result: ', newPersonWithoutJob);
//Cách delete
delete (person.job);
console.log('Dùng delete() để xóa bỏ thuộc tính ko muốn lấy của object. Result: ', person);


//Ta có thể phân giải object con bên trong 1 object.
//Vd:
var person2 =
{
    name: 'Atom 2',
    age: 27,
    adddress: {
        name: 'main address',
        line1: '59/10 Đường số 6',
        ward: '15',
        district: 'Gò Vấp',
        city: {
            id: 1,
            name: 'Hồ Chí Minh'
        }
    },
    job: {
        name: 'developer',
        salary: 123
    }
}

// var { name, age, job: { name }, adddress: { name, line1, city: { name } } } = person2;
// console.log('Thuộc tính line1 của object con (address) sau phân giải: ', line1);
//Trường hợp thuộc tính phân giải của object cha và object con trùng nhau thì khi đó sẽ lấy thuộc tính của cấp con được khai báo sau cùng khi phân giải. Trong ví dụ ở đây sẽ là name = Hồ Chí Minh
// console.log('Lấy ra thuộc tính name tồn tại trong object cha và object con bên trong. Result: ', name);

//Để xử lý vấn đề này ta chỉ cần đặt tên cho những thuộc tính trùng nhau khi khai báo phân giải.
//Vd:
var { name: personName, age, job: { name: jobName }, adddress: { name: addrName, line1, city: { name: ctName } } } = person2;

console.log('name của person (object cha) sau khi đổi tên thành personName: ', personName);
console.log('name của job (object con) sau khi đổi tên thành jobName: ', jobName);
console.log('name của address (object con) sau khi đổi tên thành addrName: ', addrName);
console.log('name của city (object cháu) sau khi đổi tên thành ctName: ', ctName);


//REST PARAMETERS
//Cách viết: bao gồm dấu ... và tên param. Vd: ...param, ...rest,...
//Được sử dụng:
//1-Trong destructuring như ví dụ trên
//2-Trong function sử dụng làm parameters để có thể truyền danh sách parameters cách nhau = dấu ,.Khi này danh sách paremeter nhận vô là 1 array. Rest parameters phải là param cuối cùng của hàm.
//Vd:
function writeLog(normalParam, ...contents) {
    console.log('normalParam: ', normalParam);
    console.log('Rest parameters - contents: ', contents);
}

writeLog('a', 1, 2, 'abc', true);

//Kết hợp destructuring và rest parameters trong function
//Vd:
//params is array
function test([a, b, ...rest]) {
    console.log('Param a: ', a);
    console.log('Param b: ', b);
    console.log('Param rest(rest parameters): ', rest);
}

test([1, 2, 3, 4, 5, 6]);

//params is object
function test({name, age, ...rest}) {
    console.log('Param name: ', name);
    console.log('Param age: ', age);
    console.log('Param rest(rest parameters): ', rest);
}

test({name: 'Atom', age: 27, phone: '12345678', job: 'developer'});