//Fetch
//Gọi API lấy kết quả trả ra
//Backend -> API -> Fetch -> Json/XML -> Parse Json ra Javascript types ->Render giao diện

//Vd:
var url = 'https://vn2.valuecomusa.com/ShipDepot-api/Shipping/TestPrintLabel';
//Cách viết đầy đủ
fetch(url)
.then(function (response) {
    //response.json() là hàm parse json ra js type. Return promise nên ta sẽ .then bên dưới để hứng object trả về
    return response.json();
})
.then(function (data) {
    console.log(data);
})
.catch(function (err) {
    console.error('Call API error: ', err);
});

//Cách dùng arrow function cho ngắn gọn
// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.error('Call API error: ', err));