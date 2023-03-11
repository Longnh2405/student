const students = [
  {
    id: 1,
    name: "Dinh",
    toan: 5,
    ly: 6,
    hoa: 7,
  },
  {
    id: 2,
    name: "Nam",
    toan: 10,
    ly: 8,
    hoa: 5,
  },
  {
    id: 3,
    name: "Tan",
    toan: 3,
    ly: 5,
    hoa: 5,
  },
  {
    id: 4,
    name: "Hung",
    toan: 9,
    ly: 7,
    hoa: 7,
  },
  {
    id: 5,
    name: "Tri",
    toan: 9,
    ly: 8,
    hoa: 9,
  },
  {
    id: 6,
    name: "Anh",
    toan: 9,
    ly: 10,
    hoa: 9,
  },
  {
    id: 7,
    name: "Binh",
    toan: 3,
    ly: 6,
    hoa: 9,
  },
];

function kiemTraTrenTB() {
  let count = students.length;
  let i = 0;
  for (i; i < count; i++) {
    let value = students[i];
    if (value.toan < 5 || value.ly < 5 || value.hoa < 5) {
      return console.log("Có sinh viên điểm dưới trung bình!");
    }
  }
  return console.log("Tất cả sinh viên có điểm các môn trên trung bình!");
}
function kiemTraLoaiGioi() {
  let count = students.length;
  let i = 0;
  for (i; i < count; i++) {
    let value = students[i];
    if (value.toan >= 8 && value.ly >= 8 && value.hoa >= 8) {
      return console.log("Có sinh viên giỏi!");
    }
  }
  return console.log("Không có sinh viên giỏi!");
}
function locLoaiGioi() {
  let count = students.length;
  let i = 0;
  let sv_gioi = [];
  for (i; i < count; i++) {
    let value = students[i];
    if (value.toan >= 8 && value.ly >= 8 && value.hoa >= 8) {
      sv_gioi.push(value);
    }
  }
  return console.log(sv_gioi);
}
function motSVgioi() {
  let count = students.length;
  let i = 0;
  for (i; i < count; i++) {
    let value = students[i];
    if (value.toan >= 8 && value.ly >= 8 && value.hoa >= 8) {
      return console.log(value);
    }
  }
}
function cong1diemToan() {
  let count = students.length;
  let i = 0;
  for (i; i < count; i++) {
    let value = students[i];
    if (value.toan < 10) {
      value.toan = value.toan + 1;
    }
  }
  return console.log(students);
}
function themThuocTinh() {
  let count = students.length;
  let i = 0;
  for (i; i < count; i++) {
    let value = students[i];
    value.sum = value.toan + value.ly + value.hoa;
  }
  return console.log(students);
}
function tongDiem() {
  let count = students.length;
  let i = 0;
  let tongdiem = 0;
  for (i; i < count; i++) {
    let value = students[i];
    tongdiem = value.toan + value.hoa + value.ly;
  }
  return console.log(tongdiem);
}
function menu() {
  let todo = true;
  do {
    let luachon = prompt(`
      ===Menu student ====
      1. Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?
      2. Kiểm tra xem có sinh viên nào xếp loại giỏi không? 
      3. Lọc ra các sinh viên xếp loại giỏi và in ra
      4. Tìm 1 sinh viên xếp loại giỏi
      5. Cộng cho mỗi sinh viên 1 điểm toán
      6. Thêm thuộc tính tổng điểm 3 môn
      7. Tính tổng điểm của các sinh viên
      8. Tính điểm trung bình của các sinh viên (làm tròn 2 chữ số thập phân)
      9. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
      10.Thoát
      `);
    luachon = Number(luachon);
    switch (luachon) {
      case 1:
        kiemTraTrenTB();
        break;
      case 2:
        kiemTraLoaiGioi();
        break;
      case 3:
        locLoaiGioi();
        break;
      case 4:
        motSVgioi();
        break;
      case 5:
        cong1diemToan();
        break;
      case 6:
        themThuocTinh();
        break;
      case 7:
        tongDiem();
        break;
      case 8:
        break;
      case 9:
        break;
      case 10:
        console.log("Goodbye!");
        todo = false;
        break;
    }
  } while (todo);
}
menu();
