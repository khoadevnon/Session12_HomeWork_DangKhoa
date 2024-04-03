/* [Bài tập] Mảng con có tổng giá trị lớn nhất
1. Mục tiêu
Luyện tập sử dụng vòng lặp.
2. Mô tả
Viết chương trình khai báo mảng số nguyên bất kỳ, xây dựng hàm có tham số là 1 mảng, kết quả trả về là mảng con của mảng truyền vào có tổng các phần tử lớn nhất. Gọi hàm với mảng đã khai báo và in kết quả ra màn hình. Lưu ý: chỉ dùng một vòng lặp.
 */
// khai báo mảng số nguyên bất kỳ
let array = [1, 2, 3, 4, 5];
// hàm có tham số là 1 mảng, kết quả trả về là mảng con của mảng truyền vào có tổng các phần tử lớn nhất
function findSubArrayWithMaxSum(arr) {
  let maxSum = arr[0];
  let subArray = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    let tempArray = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      tempArray.push(arr[j]);
      if (sum > maxSum) {
        maxSum = sum;
        subArray = [...tempArray];
      }
    }
  }
  return subArray;
}
// gọi hàm với mảng đã khai báo và in kết quả ra màn hình
console.log(findSubArrayWithMaxSum(array)); //output: [2, 3, 4, 5]
