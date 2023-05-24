//OPTIONAL CHAINING
//Cú pháp: ?.
//Dùng để kiểm tra property/object/array/function có bị null hay undefined trước khi lấy giá trị của nó
const object = {
    age: 27,
    name: 'jerry',
    // cat:{
    //     name:'Tom'
    // }
    // getName(value){
    //     console.log(value);
    // }
    // array: ["a","b","c"]
}
//Cách thông thường
if(object != null && object.cat !=null) {
    console.log(object.cat.name);
}

//Optional chaning
if(object?.cat){
    console.log(object.cat.name);
}

//Ta có thể dùng ?. để check null object trước khi lấy property. Khi này nếu object null/undefined thì get proerty sẽ là undefined chứ không bị báo lỗi
console.log(object.cat?.name);

//Check function
object.getName?.(123);

//Check array
console.log(object.array?.[4]);