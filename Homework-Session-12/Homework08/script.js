/* [Bài tập] Luyện tập sử dụng hàm
1. Mục tiêu
Luyện tập sử dụng hàm.
2. Mô tả
Viết chương trình khai báo chuỗi và yêu cầu người dùng nhập vào chuỗi bất kỳ. Xây dựng hàm có tham số là 2 chuỗi, kiểm tra xem có thể tạo ra chuỗi đã được nhập vào từ các ký tự trong chuỗi được khai báo không, kết quả trả về là true hoặc false.
 */

// khai báo chuỗi
let string = "Hello World";
// yêu cầu người dùng nhập vào chuỗi bất kỳ
let inputString = prompt("Nhập vào 1 chuỗi: ");
// hàm có tham số là 2 chuỗi, kiểm tra xem có thể tạo ra chuỗi đã được nhập vào từ các ký tự trong chuỗi được khai báo không, kết quả trả về là true hoặc false
function checkString(str1, str2) {
  let count = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str1.includes(str2[i])) {
      count++;
    }
  }
  return count === str2.length;
}
// gọi hàm với 2 chuỗi và in kết quả ra màn hình
console.log(checkString(string, inputString)); //output: true
