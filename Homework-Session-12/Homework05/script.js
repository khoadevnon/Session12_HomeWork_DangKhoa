/* [Bài tập] Xây dựng hàm tìm kiếm
1. Mục tiêu
Luyện tập sử dụng hàm.
2. Mô tả
Viết chương trình khai báo mảng gồm nhiều chuỗi bất kỳ, yêu cầu người dùng nhập vào 1 chuỗi bất kỳ. Xây dựng hàm có 2 tham số là 1 mảng và 1 chuỗi, kết quả trả về là tất cả các phần tử trong mảng có chứa  chuỗi vừa nhập. In kết quả trả về ra màn hình.
 */

// khai báo mảng gồm nhiều chuỗi bất kỳ
let array = [
  "apple",
  "banana",
  "orange",
  "strawberry",
  "kiwi",
  "grape",
  "apple pie",
  "banana bread",
  "orange juice",
  "strawberry jam",
  "kiwi fruit",
  "grape wine",
];
// yêu cầu người dùng nhập vào 1 chuỗi bất kỳ
let searchString = prompt("Nhập vào 1 chuỗi: ");
// hàm có 2 tham số là 1 mảng và 1 chuỗi, kết quả trả về là tất cả các phần tử trong mảng có chứa chuỗi vừa nhập
function searchElementInArray(arr, str) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(str)) {
      result.push(arr[i]);
    }
  }
  return result;
}
// in kết quả trả về ra màn hình
console.log(searchElementInArray(array, searchString));
