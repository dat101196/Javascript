import * as LogEnum from './enum.js';

function logger(content, type = LogEnum.DEFAULT) {
    console[type](content);
}

//Export default
//Default Export trong Javascript ES6 chỉ cho phép xuất một mặc định cho mỗi file. Default Export có thể cho một function, class hoặc một object
export default logger;