let booksId = [];
let booksName = [];
let bookStatus = [];
let n = parseInt(
  prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"),
);
for (let i = 0; i < n; i++) {
  let id = prompt("Nhập mã sách:");
  let name = prompt("Nhập tên sách:");
  let s = parseInt(
    prompt("Chọn tình trạng (1:Hỏng nhẹ 2:Hỏng nặng 3:Cần sửa gấp)"),
  );

  let status = "Hỏng nhẹ";
  if (s === 2) status = "Hỏng nặng";
  if (s === 3) status = "Cần sửa gấp";

  booksId.push(id);
  booksName.push(name);
  bookStatus.push(status);
}
console.log("Danh sách hiện tại (" + booksId.length + " cuốn):");
for (let i = 0; i < booksId.length; i++) {
  console.log(
    i + 1 + ". " + booksId[i] + " - " + booksName[i] + " - " + bookStatus[i],
  );
}
let choose = -1;
while (choose !== 0) {
  choose = parseInt(prompt("1: Sửa tình trạng | 2: Xóa sách | 0: Kết thúc"));
  if (choose === 1) {
    let id = prompt("Nhập mã sách cần sửa:");
    for (let i = 0; i < booksId.length; i++) {
      if (booksId[i] === id) {
        let s = parseInt(
          prompt(
            "1:Hỏng nhẹ 2:Hỏng nặng 3:Cần sửa gấp 4:Đã sửa xong 5:Loại bỏ",
          ),
        );
        if (s === 1) bookStatus[i] = "Hỏng nhẹ";
        if (s === 2) bookStatus[i] = "Hỏng nặng";
        if (s === 3) bookStatus[i] = "Cần sửa gấp";
        if (s === 4) bookStatus[i] = "Đã sửa xong";
        if (s === 5) bookStatus[i] = "Loại bỏ";
      }
    }
  }
  if (choose === 2) {
    let id = prompt("Nhập mã sách cần xóa:");
    for (let i = 0; i < booksId.length; i++) {
      if (booksId[i] === id) {
        booksId.splice(i, 1);
        booksName.splice(i, 1);
        bookStatus.splice(i, 1);
        break;
      }
    }
  }
  console.log("Danh sách hiện tại:");
  for (let i = 0; i < booksId.length; i++) {
    console.log(
      i + 1 + ". " + booksId[i] + " - " + booksName[i] + " - " + bookStatus[i],
    );
  }
}
let done = 0;
let remove = 0;
for (let i = 0; i < bookStatus.length; i++) {
  if (bookStatus[i] === "Đã sửa xong") done++;
  if (bookStatus[i] === "Loại bỏ") remove++;
}
console.log("Tổng số sách còn lại:", booksId.length);
console.log("Số sách đã sửa xong:", done);
console.log("Số sách loại bỏ:", remove);
