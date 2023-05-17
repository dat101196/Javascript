//Khi promise chạy có 3 trạng thái
//1.Pending: khi chưa resolve hay reject => đang gây ra memory leak
//2.Fulfilled: khi gọi resolve
//3.Rejected: khi gọi reject

let promise = new Promise(
    //Executor
    function (resolve, reject) {
        //Cần phải gọi resolve hoặc reject để ko bị memory leak.

        //Xử lý logic
        //if(điều kiện đúng){
        resolve({ ID: 1, Name: 'AAA' });
        // }else{
        //reject({ Code: 404, Message: 'Not Found' });
        // }


    }
)


function CallbackSuccess(result) {
    console.log('call then. Result: ', result);
}

function CallbackError(error) {
    console.log('call catch. Error: ', error);
}
//-----Cách hoạt động của Promise: 
//1-promise sẽ gọi hàm then() và truyền vào 1 callback (callback thành công). Hàm callback sẽ được gọi khi executor gọi resolve(), tham số dưa vô resolve cũng chính là tham số callback nhận được
//2-promise sẽ gọi hàm catch() và truyền vào 1 callback (callback thất bại). Hàm callback sẽ được gọi khi executor gọi reject(), tham số dưa vô reject cũng chính là tham số callback nhận được
//3-promise sẽ gọi hàm finally() và truyền vào 1 callback. Hàm callback sẽ được gọi khi callback thành công hoặc calback thất bại chạy xong, thường dùng để đóng giao diện loading.

//Cách truyền callback
//Cách 1: Gọi callback error trong hàm then
//promise.then(CallbackSuccess,CallbackError);

//Cách 2: Gọi callback error trong hàm catch
// promise.then(CallbackSuccess).catch(CallbackError);

//Finally ko cần thiết phải có
// promise.then(CallbackSuccess).catch(CallbackError).finally(function () {
//     console.log('final');
// });

//* Lưu ý: Hàm then, catch, finally có thể gán nhiều lần và tất cả callback đó đều được gọi tuần tự từ trên xuống. Vd: resolve => gọi tuần tự từ trên xuống tất cả callback đc gán trong hàm then nhiều lần, reject thì gọi tới tất cả callback error
// promise.then(function(){
//     console.log('then 1');
// }).catch(function(){
//     console.log('catch 1');
// }).finally(function(){
//     console.log('finally 1');
// })

// promise.then(function(){
//     console.log('then 2');
// }).catch(function(){
//     console.log('catch 2');
// }).finally(function(){
//     console.log('finally 2');
// })

// promise.then(function(){
//     console.log('then 3');
// }).catch(function(){
//     console.log('catch 3');
// }).finally(function(){
//     console.log('finally 3');
// })

//-----Cách hoạt động của Promise: 
//4-Khi gọi then() nhiều lần thì return của then() trước sẽ là param của then() sau.
//Vd:
// promise.then(function () {
//     console.log('then 1');
//     return 'xong then 1 toi then 2'
// }).then(function (data) {
//     console.log(data);
//     console.log('then 2');
//     return 'xong then 2 toi then 3'
// }).then(function (data) {
//     console.log(data);
//     console.log('then 3');
// }).catch(function () {
//     console.log('catch 1');
// }).finally(function () {
//     console.log('finally 1');
// })
//* Lưu ý: trường hợp then() return ra 1 promise thì then() & reject() tiếp theo sẽ là then() & reject() của promise được return và phải chờ executor của promise đó chạy và gọi resolve()/reject() thì then()/reject() mới chạy.
//Vd:
// promise.then(function () {
//     console.log('then 1');
//     return new Promise(function (resolve, reject) {
//          resolve('Resolve của promise trong then 1');
//         //reject('reject của then 1');
//     });
// }).then(function (data) {
//     console.log(data);
//     return 'xong then 2 toi then 3';
// }).then(function (data) {
//     console.log(data);
//     console.log('then 3');
// }).catch(function (error) {
//     console.log(error);
// }).finally(function () {
//     console.log('finally 1');
// })
//Vd: sleep 1s rồi mới thực hiện task lồng nhau
function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms);
    })
}

sleep(1000).then(() =>{
    console.log(1);
    return sleep(1000);
}).then(() => {
    console.log(2);
    return sleep(1000);
}).then(() => {
    console.log(3);
    return sleep(1000);
}).then(() => {
    console.log(4);
    return sleep(1000);
})