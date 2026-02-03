let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];

let n = parseInt(prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?"));

for (let i = 0; i < n; i++) {
  let id = "";
  while (id === "") {
    id = prompt("Nhập mã sách thứ " + (i + 1) + ":");
    for (let j = 0; j < booksId.length; j++) {
      if (booksId[j] === id) {
        id = "";
      }
    }
  }

  let name = "";
  while (name === "") {
    name = prompt("Nhập tên sách thứ " + (i + 1) + ":");
  }

  let category = prompt("Nhập các thể loại (cách nhau bởi dấu phẩy):");

  let qty = -1;
  while (qty < 0) {
    qty = parseInt(prompt("Nhập số lượng tồn kho:"));
  }

  booksId.push(id);
  booksName.push(name);
  booksCategory.push(category);
  inventoryQuantity.push(qty);
}

let countLapTrinh = 0;
for (let i = 0; i < booksCategory.length; i++) {
  if (booksCategory[i].toLowerCase().indexOf("lập trình") !== -1) {
    countLapTrinh++;
  }
}

console.log("Tổng số sách thuộc thể loại 'Lập trình':", countLapTrinh);

console.log("Danh sách mã sách thuộc cả hai thể loại 'JavaScript' và 'Web':");
for (let i = 0; i < booksCategory.length; i++) {
  if (
    booksCategory[i].indexOf("JavaScript") !== -1 &&
    booksCategory[i].indexOf("Web") !== -1
  ) {
    console.log(booksId[i]);
  }
}

let minIndex = 0;
for (let i = 1; i < inventoryQuantity.length; i++) {
  if (inventoryQuantity[i] < inventoryQuantity[minIndex]) {
    minIndex = i;
  }
}

console.log("Loại sách có số lượng tồn kho thấp nhất:");
console.log(
  "Mã sách:",
  booksId[minIndex],
  ", Tên sách:",
  booksName[minIndex],
  ", Tồn kho:",
  inventoryQuantity[minIndex],
);
