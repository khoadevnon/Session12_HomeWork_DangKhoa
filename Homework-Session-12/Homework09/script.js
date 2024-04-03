/* [Bài tập] Tìm hiểu về callback function
1. Mục tiêu
Luyện tập sử dụng hàm.
2. Mô tả
Tìm hiểu về callback function, chức năng của callback function và cách nó hoạt động 
 */
// callback function là hàm được truyền qua đối số và được gọi lại trong hàm khác
// ví dụ
function greeting(name) {
  alert("Hello " + name);
}
function processUserInput(callback) {
  let name = prompt("Please enter your name:");
  callback(name);
}
processUserInput(greeting);
