/* [Bài tập] Tìm phần tử dài nhất
1. Mục tiêu
Luyện tập sử dụng hàm.
2. Mô tả
Viết chương trình khai báo mảng gồm các thành phần ngẫu nhiên, xây dựng hàm nhận có tham số là 1 mảng và kết quả trả về là phần tử có độ dài lớn nhất trong mảng đó. Gọi hàm với mảng đã khai báo và in kết quả ra màn hình.
 */
// khai báo mảng gồm các thành phần ngẫu nhiên
let array = ["apple", "banana", "orange", "strawberry", "kiwi", "grape"];
// hàm nhận có tham số là 1 mảng và kết quả trả về là phần tử có độ dài lớn nhất trong mảng đó
function findLongestElement(arr) {
  let longestElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestElement.length) {
      longestElement = arr[i];
    }
  }
  return longestElement;
}
// gọi hàm với mảng đã khai báo và in kết quả ra màn hình
console.log(findLongestElement(array));
