/* [Bài tập] Luyện tập sử dụng hàm
1. Mục tiêu
Luyện tập sử dụng hàm.
2. Mô tả
Viết chương trình khai báo mảng số nguyên, yêu cầu người dùng nhập vào 1 số nguyên bất kỳ. Xây dựng hàm có 2 tham số là 1 mảng và 1 số,  kết quả trả về là một cặp số trong mảng đã khai báo sao cho tổng của cặp số tìm được bằng với số đã nhập vào. 
Lưu ý: chỉ dùng một vòng lặp.
 */
// khai báo mảng số nguyên
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// yêu cầu người dùng nhập vào 1 số nguyên bất kỳ
let number = Number(prompt("Nhập vào 1 số nguyên: "));
// hàm có 2 tham số là 1 mảng và 1 số,  kết quả trả về là một cặp số trong mảng đã khai báo sao cho tổng của cặp số tìm được bằng với số đã nhập vào
function findPair(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    let firstNumber = arr[i];
    let secondNumber = num - firstNumber;
    if (arr.includes(secondNumber)) {
      return [firstNumber, secondNumber];
    }
  }
  return "Không tìm thấy cặp số nào";
}
// gọi hàm với mảng và số đã nhập và in kết quả ra màn hình
console.log(findPair(array, number));
