/* [Bài tập] Số lần xuất hiện của ký tự
1. Mục tiêu
Luyện tập sử dụng hàm.
2. Mô tả
Viết chương trình yêu cầu người dùng nhập vào 1 chuỗi và 1 ký tự bất kỳ, xây dựng hàm có 2 tham số là 1 chuỗi và 1 ký tự, đếm số lần xuất hiện của ký tự trong chuỗi. Gọi hàm với chuỗi và ký tự đã nhập và in kết quả ra màn hình.
 */
// yêu cầu người dùng nhập vào 1 chuỗi và 1 ký tự bất kỳ
let string = prompt("Nhập vào 1 chuỗi: ");
let character = prompt("Nhập vào 1 ký tự: ");
// hàm có 2 tham số là 1 chuỗi và 1 ký tự, đếm số lần xuất hiện của ký tự trong chuỗi
function countCharacterInString(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
// gọi hàm với chuỗi và ký tự đã nhập và in kết quả ra màn hình
console.log(
  `Ký tự ${character} xuất hiện ${countCharacterInString(
    string,
    character
  )} lần trong chuỗi ${string}`
);
