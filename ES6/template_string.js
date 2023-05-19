//Template string
//Dùng `` thay vì ''/"" => thay thế cách nối chuỗi truyền thống bằng cách dùng ${} giúp code dễ nhìn hơn.
//Vd:
const myName = 'Atom';
const normalStr = 'Hello ' + myName + '!';
const templateStr = `Hello ${myName}!`;

console.log('normalStr = ', normalStr);
console.log('templateStr =', templateStr);

//Muốn viết chuỗi template string có ${} thì cú pháp là \${}
//Vd:
console.log(`Template string nội suy với \${}`);

//Multi-lines string
//Giúp giữ format xuống dòng của string => sử dụng assgin vô trong textarea, thẻ pre
//Vd: 
//Cách bình thường
const normalLines = 'Line 1\n'
    + 'Line 2\n'
    + 'Line 3\n';

console.log('normalLines = ', normalLines);

const templateStrLines = `Line 1
Line 2
Line 3`

console.log('templateStrLines = ', templateStrLines);
