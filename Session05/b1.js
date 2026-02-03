// Mảng lưu tên sách
let books = [];
// Hỏi số lượng sách
let n = parseInt(prompt("Bạn muốn trả bao nhiêu cuốn sách ?"));
// Nhập tên từng cuốn sách
for (let i = 0; i < n; i++) {
  let name = prompt("Nhập tên cuốn sách thứ " + (i + 1) + ":");
  books.push(name);
}
// in tổng số sách
console.log("Tổng số sách đã được trả:", books.length);
// in danh sách sách
console.log("Danh sách sách đã trả:");
for (let i = 0; i < books.length; i++) {
  console.log(i + 1 + ". " + books[i]);
}
