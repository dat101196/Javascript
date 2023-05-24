//Named exports
//Named exports hữu dụng trong việc xuất một số giá trị. Trong quá trình import, chúng ta sẽ có thể sử dụng tên tương tự để chỉ giá trị tương ứng.
//Exporting declarations là 1 dạng của named exports
//Có thể export const,let,var, function, class
//Vd:
// export let name1, name2/*, … */; // also var
// export function functionName() { /* … */ }
// export class ClassName { /* … */ }

//export object
// export const { name1, name2: bar } = o;

//export array
export const [ name1, name2 ] = array;

//1-Export từng biến
// export const WARN = 'warn';
// export const ERROR = 'error';
// export const DEFAULT = 'log';

//2-Export nhiều biến cùng lúc
export const WARN = 'warn', ERROR = 'error', DEFAULT = 'log';