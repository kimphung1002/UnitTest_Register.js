// register.js

// Hàm kiểm tra định dạng email hợp lệ
function isValidEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

// Hàm kiểm tra độ dài mật khẩu (ít nhất 6 ký tự)
function isValidPassword(password) {
  return password.length >= 6;
}

// Hàm kiểm tra họ và tên không rỗng và có ít nhất 2 từ
function isValidFullname(fullname) {
  return fullname && fullname.trim().split(" ").length >= 2;
}

// Hàm đăng ký người dùng
function registerUser(fullname, email, password) {
  // Kiểm tra các trường nhập vào không rỗng
  if (!fullname || !email || !password) {
      return { success: false, message: "All fields are required." };
  }

  // Kiểm tra định dạng email
  if (!isValidEmail(email)) {
      return { success: false, message: "Invalid email format." };
  }

  // Kiểm tra độ dài mật khẩu
  if (!isValidPassword(password)) {
      return { success: false, message: "Password must be at least 6 characters long." };
  }

  // Kiểm tra tính hợp lệ của họ và tên
  if (!isValidFullname(fullname)) {
      return { success: false, message: "Fullname must contain at least two words." };
  }

  // Giả sử là lưu người dùng thành công
  return { success: true, message: "Registration successful!" };
}

// Export hàm đăng ký người dùng để dùng trong test hoặc các module khác
module.exports = registerUser;
