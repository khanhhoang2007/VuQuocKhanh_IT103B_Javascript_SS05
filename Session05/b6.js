let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let n = parseInt(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?"));

for (let i = 0; i < n; i++) {
  let id = "";
  while (id === "") {
    id = prompt("Nhập mã thẻ bạn đọc:");
    for (let j = 0; j < readerCardIds.length; j++) {
      if (readerCardIds[j] === id) {
        id = "";
      }
    }
  }

  let name = "";
  while (name === "") {
    name = prompt("Nhập tên bạn đọc:");
  }

  let books = prompt("Nhập các mã sách đang mượn (cách nhau bởi dấu phẩy):");

  let days = -1;
  while (days < 0) {
    days = parseInt(prompt("Nhập số ngày quá hạn:"));
  }

  readerCardIds.push(id);
  readerNames.push(name);
  borrowedBookCodes.push(books);
  overdueDays.push(days);
}

let count10 = 0;
for (let i = 0; i < overdueDays.length; i++) {
  if (overdueDays[i] >= 10) {
    count10++;
  }
}
console.log("Tổng số bạn đọc quá hạn ≥ 10 ngày:", count10);

console.log("Mã thẻ bạn đọc mượn cả sách JS và PYT:");
for (let i = 0; i < borrowedBookCodes.length; i++) {
  if (
    borrowedBookCodes[i].indexOf("JS") !== -1 &&
    borrowedBookCodes[i].indexOf("PYT") !== -1
  ) {
    console.log(readerCardIds[i]);
  }
}
let maxIndex = 0;
for (let i = 1; i < overdueDays.length; i++) {
  if (overdueDays[i] > overdueDays[maxIndex]) {
    maxIndex = i;
  }
}
console.log("Bạn đọc quá hạn nhiều nhất:", readerNames[maxIndex]);
let count7 = 0;
for (let i = 0; i < overdueDays.length; i++) {
  if (overdueDays[i] >= 7) {
    count7++;
  }
}
if (count7 === 0) {
  console.log("Tình hình trả sách hôm nay khá tốt!");
} else if (count7 <= 4) {
  console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
  console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}
