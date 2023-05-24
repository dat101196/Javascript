//MUỐN IMPORT THÌ FILE JS KHI KHAI BÁO Ở HTML TYPPE PHẢI LÀ MODULE
//Vd: <script src="./Iimport.js" type="module"></script> 
//Import default từ 1 file
//*Chú ý: Việc đặt tên import hoàn toàn độc lập trong export default và chúng ta có thể sử dụng bất kỳ tên nào mà mình muốn.
//import logger from './import_export/export.js';

//Named exports hữu dụng trong việc xuất một số giá trị. Trong quá trình import, chúng ta chỉ có thể sử dụng tên tương tự để chỉ giá trị tương ứng.
//Import những constant bằng cách destructuring đúng tên constant đó từ 1 file
// import {WARN, ERROR, DEFAULT} from './import_export/enum.js';
// logger('import destructuring each constant from enum.js', DEFAULT);


//Import tất cả constant từ 1 file dưới dạng 1 object Module
//Sử dụng as để đặt tên cho export
import * as LogEnum from './import_export/enum.js';
// logger(LogEnum);
// logger('import * as LogEnum from enum.js', LogEnum.WARN);


//Import một export được export từ 1 file trung gian và có thể đổi tên bên trong file trung gian thay vì chỉ export default. Có 2 trường hợp
//1-Import default từ file trung gian mà export trong file trung gian ko có đổi tên default
//Vd:
// import logger from './import_export/handle_before_export.js';

// logger(LogEnum);
// logger('import from default rename to logger_renamed', LogEnum.WARN);


//2-Default đã được đổi tên thành logger_renamed trong file trung gian handle_before_export.js => logger_renamed phải để trong ngoặc {} và tên phải đúng với tên được đổi trong file trung gian(logger_renamed)
//Vd:
import {logger_renamed} from './import_export/re_exporting.js';

logger_renamed(LogEnum);
logger_renamed('import from default rename to logger_renamed', LogEnum.WARN);