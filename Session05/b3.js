let booksId = [];
let booksName = [];
let inventoryQuantity = [];
let n = parseInt(
  prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"),
);
for (let i = 0; i < n; i++) {
  let id = "";
  while (id === "") {
    id = prompt("Nhập mã sách:");
  }

  let name = "";
  while (name === "") {
    name = prompt("Nhập tên sách:");
  }

  let qty = -1;
  while (qty < 0) {
    qty = parseInt(prompt("Nhập số lượng tồn kho hiện tại:"));
  }

  booksId.push(id);
  booksName.push(name);
  inventoryQuantity.push(qty);
}
console.log(
  "Danh sách sách cần xem xét bổ sung (" + booksId.length + " loại):",
);
for (let i = 0; i < booksId.length; i++) {
  console.log(
    i +
      1 +
      ". Mã: " +
      booksId[i] +
      " - Tên: " +
      booksName[i] +
      " - Còn: " +
      inventoryQuantity[i] +
      " bản",
  );
}
let lowStock = 0;
let outOfStock = [];
for (let i = 0; i < inventoryQuantity.length; i++) {
  if (inventoryQuantity[i] <= 5) {
    lowStock++;
  }
  if (inventoryQuantity[i] === 0) {
    outOfStock.push(booksId[i]);
  }
}
console.log("Số sách có tồn kho ≤ 5 bản:", lowStock);
console.log(
  "Các mã sách đã hết hàng (0 bản):",
  outOfStock.length > 0 ? outOfStock.join(", ") : "Không có",
);
