//-----Khi promise chạy có 3 trạng thái
//1.Pending: khi chưa resolve hay reject => đang gây ra memory leak
//2.Fulfilled: khi gọi resolve
//3.Rejected: khi gọi reject
var promise = new Promise(
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


//-----------------------------------------------------------------------
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


//4-Khi gọi then() nhiều lần thì return của then() trước sẽ là param của then() sau. Đây gọi là Promise chain
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
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    })
}

// sleep(1000).then(() =>{
//     console.log(1);
//     return sleep(1000);
// }).then(() => {
//     console.log(2);
//     return sleep(1000);
// }).then(() => {
//     console.log(3);
//     return sleep(1000);
// }).then(() => {
//     console.log(4);
//     return sleep(1000);
// })


//-----------------------------------------------------------------------
//-----Reject
//Khi đang chạy lần lượt các then() nếu trong 1 then khởi tạo Promise và gọi reject() thì sẽ chạy vào catch đang được hứng
//Có thể gọi trực tiếp resolve/reject mà ko cần gán Executor(một số trường hợp return bắt buộc là promise mà ko có logic bên trong promise đó). Promise.resolve(param), Promise.reject(param)
//Vd: 
// sleep(1000).then(() =>{
//     console.log(1);
//     return sleep(1000);
// }).then(() => {
//     console.log(2);
//     //return Promise.reject('Error in then 2');
//     //return Promise.resolve('Go to log 3');
//     return sleep(1000);
// }).then((param) => {
//     console.log(param || 3);
//     return sleep(1000);
// }).then(() => {
//     console.log(4);
//     return sleep(1000);
// }).catch(function(error){
//     console.log(error);
// })


//-----------------------------------------------------------------------
//-----Promise all
//Dùng để gọi nhiều promise chạy cùng lúc và chờ kết quả trả ra của tất cả promise được gọi mới xử lý logic tiếp trong then() sau đó. Nếu 1 trong các promise được gọi ở all() return reject thì Promise.all() sẽ chạy vô catch() chứ ko vô then(). Return của Promise.all() là 1 Promise
//Vd:
var promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Promise 1 xong.');
        //reject('Promise 1 error');
    }, 1000);
});

var promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Promise 2 xong.');
        //reject('Promise 2 error');
    }, 3000);
});

// Promise.all([promise1, promise2]).then(result => {
//     var rs1 = result[0];
//     var rs2 = result[1];
//     console.log('result 1: ', rs1);
//     console.log('result 2: ', rs2);
// }).catch(error => {
//     console.log(error);
// });

//Vd: Get data và show lên giao diện
var users = [
    { id: 1, name: 'Người bí ẩn' },
    { id: 2, name: 'Bing' },
    { id: 3, name: 'Chat GPT' },
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Hôm nay là ngày mấy?'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Hôm nay là ngày 13'
    },
    {
        id: 3,
        user_id: 1,
        content: 'Tháng mấy?'
    },
    {
        id: 4,
        user_id: 3,
        content: 'Tháng 6'
    },
    {
        id: 5,
        user_id: 1,
        content: '13/6 năm 2023'
    },
    {
        id: 6,
        user_id: 2,
        content: 'Đúng vậy.'
    },
];

var getComments = () => new Promise(resolve => {
    setTimeout(function () {
        return resolve(comments);
    }, 1000);
});

var getUsersByIds = (user_ids) => new Promise(resolve => {
    setTimeout(function () {
        var result = users.filter(function (user) {
            return user_ids.includes(user.id);
        });
        resolve(result);
    }, 1000);
});

getComments().then((comments) => {
    console.log(comments);
    var user_ids = comments.reduce((list_ids, comment) => {
        if (!list_ids.includes(comment.user_id)) {
            list_ids.push(comment.user_id);
        }
        return list_ids;
    }, []);
    console.log(user_ids);
    return {
        comments: comments,
        user_ids: user_ids
    };
}).then(data => {
    console.log('data: ', data);
    getUsersByIds(data.user_ids)
        .then(users => {
            var ul = document.getElementById("comment_list");
            var list_li = data.comments.map(comment => {
                var user = users.find(user => user.id === comment.user_id);
                return `<li>${user.name}: "${comment.content}"</li>`
            });
            var html = list_li.join('');
            ul.innerHTML = html;
        });
});