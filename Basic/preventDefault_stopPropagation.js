var listLi = document.querySelectorAll('li');
console.log(listLi);
// for (var i = 0; i <listLi.length; i++) {
//     var li = listLi[i];
//     console.log(li);
// }

for (var li of listLi) {
    // li.onmousedown = function(e){
    //     e.preventDefault();
    // }
    li.onclick = function(e){
        e.stopPropagation();//Ngăn sự kiện click affect to element cha
        console.log('click li: ', this.innerText);
    }
}

var ul = document.querySelector('ul');
// ul.onmousedown = function(e){
//     e.preventDefault();
// };

ul.onclick = function(e){
    console.log('click ul');
}


