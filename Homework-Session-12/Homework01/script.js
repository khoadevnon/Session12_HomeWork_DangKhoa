/* [Bài tập] Kiểm tra chẵn lẻ
1. Mục tiêu
Luyện tập sử dụng hàm.
2. Mô tả
Viết chương trình khai báo 3 số ngẫu nhiên, xây dựng hàm kiểm tra chẵn lẻ và gọi hàm với mỗi số đã khai báo, in kết quả ra màn hình console.
 */

// khai báo 3 số ngẫu nhiên
let number1 = Math.floor(Math.random() * 100);
let number2 = Math.floor(Math.random() * 100);
let number3 = Math.floor(Math.random() * 100);

// hàm kiểm tra chẵn lẻ
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Số chẵn";
  } else {
    return "Số lẻ";
  }
}

// gọi hàm với mỗi số đã khai báo
console.log(number1 + " là " + checkEvenOdd(number1));
console.log(number2 + " là " + checkEvenOdd(number2));
console.log(number3 + " là " + checkEvenOdd(number3));
