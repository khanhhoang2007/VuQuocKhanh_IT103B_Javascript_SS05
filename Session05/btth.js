let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];

let choice = -1;

while (choice !== 0) {
  console.log("--- THƯ VIỆN KHOA HỌC ---");
  console.log("1. Xem danh sách");
  console.log("2. Nhập sách mới");
  console.log("3. Mượn sách (Xóa)");
  console.log("4. Sửa tên sách");
  console.log("5. Sắp xếp kệ");
  console.log("0. Thoát");

  choice = parseInt(prompt("Bạn chọn:"));

  if (choice === 1) {
    console.log("=> Danh sách hiện tại (" + books.length + " cuốn):");
    for (let i = 0; i < books.length; i++) {
      console.log(i + 1 + ". " + books[i]);
    }
  }

  if (choice === 2) {
    let name = prompt("Nhập tên sách mới:");
    books.push(name);
    console.log("Đã thêm thành công!");
  }

  if (choice === 3) {
    let name = prompt("Nhập tên sách muốn mượn:");
    let index = books.indexOf(name);

    if (index === -1) {
      console.log("Lỗi: Không tìm thấy sách " + name + "!");
    } else {
      books.splice(index, 1);
      console.log("Đã cho mượn cuốn '" + name + "'.");
    }
  }

  if (choice === 4) {
    let oldName = prompt("Nhập tên sách cũ:");
    let index = books.indexOf(oldName);

    if (index === -1) {
      console.log("Không tìm thấy sách cần sửa!");
    } else {
      let newName = prompt("Nhập tên sách mới:");
      books[index] = newName;
      console.log("Đã cập nhật tên sách!");
    }
  }

  if (choice === 5) {
    books.sort();
    console.log("Danh sách sau khi sắp xếp:");
    for (let i = 0; i < books.length; i++) {
      console.log(i + 1 + ". " + books[i]);
    }
  }
}
