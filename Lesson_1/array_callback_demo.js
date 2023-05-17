var ships = [
    {
        courierID: 1,
        courierName: "Giao hàng nhanh",
        listServices: [
            {
                id: "ghn-1",
                name: "Giao hàng truyền thống",
                ins: 5,
                cod: 5,
                ship: 10,
                total: 20
            },
            {
                id: "ghn-2",
                name: "Giao hàng TMĐT",
                ins: 5,
                cod: 5,
                ship: 5,
                total: 15
            }
        ]
    },
    {
        courierID: 2,
        courierName: "Giao hàng tiết kiệm",
        listServices: [
            {
                id: "ghtk-1",
                name: "Giao hàng thường",
                ins: 5,
                cod: 5,
                ship: 10,
                total: 20
            },
            {
                id: "ghtk-2",
                name: "Giao hàng rẻ",
                ins: 0,
                cod: 5,
                ship: 5,
                total: 10
            },
            {
                id: "ghtk-3",
                name: "Giao hỏa tốc",
                ins: 5,
                cod: 5,
                ship: 30,
                total: 40
            },
            {
                id: "ghtk-4",
                name: "Giao Xfast",
                ins: 5,
                cod: 5,
                ship: 20,
                total: 30
            }
        ]
    }

];
// var listAllServices = ships.reduce(function (sevicesOutput, courier) {
//     return sevicesOutput.concat(courier.listServices);
// }, []);
// console.log(listAllServices);
// // var parseHTML = listAllServices.map(function (s, index, originArray) {
// //     var div =
// //         `<div>
// //         <p>${s.name}</p>
// //         <b>${s.total}</b>
// //         <p>Phí giao hàng: ${s.ship} + Phí bảo hiểm: ${s.ins} + Phí thu hộ: ${s.cod}</p>
// //     </div>`;

// //     return div;
// // });

// var parseHTML = ships.map(function(courier, index){
//     var servicesHTMLArray = courier.listServices.map(function(service, index){
//         var div =
//                 `<div>
//                 <p>${index + 1}.${service.name} (${service.id})</p>
//                 <b>Tổng phí: ${service.total}</b>
//                 <p>Phí giao hàng: ${service.ship} + Phí bảo hiểm: ${service.ins} + Phí thu hộ: ${service.cod}</p>
//             </div>`;

//             return div;
//     });
//     var div = 
//     `<div>
//     <h2>${courier.courierName}</h2>
//     ${servicesHTMLArray.join("<p>------------------------------------------------</p>")}
//     </div>`
//     return div;
// });
// var fullHTML = parseHTML.join("<hr/>");
// //console.log(fullHTML);
// var div = document.getElementById("divcontent");
// div.innerHTML = fullHTML;
// //
// var totalShipAll = listAllServices.reduce(function (accumulator, curVal, curIdx, originArray) {
//     var newTotal = accumulator + curVal.total;
//     // console.table({
//     //     "curIdx": curIdx,
//     //     "ship name": curVal.name,
//     //     "ship total": curVal.total,
//     //     "current all ship total": accumulator,
//     //     "new all ship total": newTotal

//     // });
//     return newTotal;
// }, 0);

// console.log(totalShipAll);

// //Practice: Flat array
// var array = [1, 2, [3, 4, 5, 6], [7, 8], [9, 10]];
// var flatArray = array.reduce(function (flatOutput, deptItem) {
//     return flatOutput.concat(deptItem);
// }, []);

// console.log(flatArray);


// function myFunction(param) {
//     if (typeof param === 'function') {
//         param('test');
//     }

// }

// function myCallback(value) {
//     console.log('Value: ', value);
// }

// myFunction(myCallback);

Array.prototype.forEach2 = function(callback){
    let arrLength = this.length;
    for (var i = 0; i < arrLength; i++){
        callback(this[i],i);
    }
}

ships.forEach2(function(cour, i){
    console.log('Test create forEach2 - Courier: ', cour);
})

Array.prototype.find2 = function (callback) {
    let arrLength = this.length;
    for (var i = 0; i < arrLength; i++){
       if(callback(this[i],i)){
        return this[i];
       }
    }
    return undefined;
}

var courier = ships.find2(function (cour, index) {
    return cour.courierName.startsWith("Giao hàng");
});

console.log("Test create find2 - Courier: ", courier);


Array.prototype.filter2 = function (callback) {
    let arrayOutput = [];
    let arrLength = this.length;
    for (var i = 0; i < arrLength; i++){
       if(callback(this[i],i)){
        arrayOutput.push(this[i]);
       }
    }
    return arrayOutput;
}

var couriers = ships.filter2(function (cour, index) {
    return cour.courierName.startsWith("Giao hàng");
});

console.log("Test create filter2 - couriers: ", couriers);

Array.prototype.reduce2 = function (callback, initVal = null) {
    let arrLength = this.length;
    let outputVal = initVal;
    if(outputVal == null){
        outputVal = this[0];
    }
    for (var i = 0; i < arrLength; i++){
        outputVal = callback(outputVal,this[i], i)
    }
    return outputVal;
}

var output = ships.reduce2(function (outputVal, cour, index) {
    // return outputVal.concat(cour.listServices);
    return outputVal += cour.courierID;
},0);

console.log("Test create filter2 - output: ", output);