/* [Bài tập] Đếm số ký tự trong chuỗi
1. Mục tiêu
Luyện tập sử dụng hàm.
2. Mô tả
Viết chương trình khai báo chuỗi bất kỳ, xây dựng hàm có tham số là 1 chuỗi và kết quả trả về là số ký tự trong chuỗi đó ( không tính ký tự trống). Gọi hàm với chuỗi đã khai báo và in kết quả ra màn hình.
 */
// khai báo chuỗi bất kỳ
let string = "Hello World"; // 11 ký tự
// hàm có tham số là 1 chuỗi và kết quả trả về là số ký tự trong chuỗi đó ( không tính ký tự trống)
function countCharacters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      count++;
    }
  }
  return count;
}
// gọi hàm với chuỗi đã khai báo và in kết quả ra màn hình
console.log(countCharacters(string)); //output: 10
