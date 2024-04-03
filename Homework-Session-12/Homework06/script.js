/* [Bài tập] Viết hoa chữ cái đầu
1. Mục tiêu
Luyện tập sử dụng hàm.
2. Mô tả
Viết chương trình khai báo chuỗi bất kỳ, xây dựng hàm có tham số là 1 chuỗi và kết quả trả về là chuỗi được truyền vào nhưng viết hoa tất cả các chữ cái đầu. Gọi hàm với chuỗi đã được khai báo và in kết quả ra màn hình.
 */
// khai báo chuỗi bất kỳ
let string = "hello world";
// hàm có tham số là 1 chuỗi và kết quả trả về là chuỗi được truyền vào nhưng viết hoa tất cả các chữ cái đầu
function capitalizeFirstLetter(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
// gọi hàm với chuỗi đã được khai báo và in kết quả ra màn hình
console.log(capitalizeFirstLetter(string)); //output: Hello World
