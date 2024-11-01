// register.test.js

// Import module đăng ký
const registerUser = require('../src/register');

describe("User Registration Module", () => {
    // Kiểm tra trường hợp thành công
    test("Successful registration with valid fullname, email, and password", () => {
        const result = registerUser("John Doe", "johndoe@example.com", "password123");
        expect(result.success).toBe(true);
        expect(result.message).toBe("Registration successful!");
    });

    // Kiểm tra khi không nhập vào fullname
    test("Failure when fullname is empty", () => {
        const result = registerUser("", "johndoe@example.com", "password123");
        expect(result.success).toBe(false);
        expect(result.message).toBe("All fields are required.");
    });

    // Kiểm tra khi không nhập vào email
    test("Failure when email is empty", () => {
        const result = registerUser("John Doe", "", "password123");
        expect(result.success).toBe(false);
        expect(result.message).toBe("All fields are required.");
    });

    // Kiểm tra khi không nhập vào password
    test("Failure when password is empty", () => {
        const result = registerUser("John Doe", "johndoe@example.com", "");
        expect(result.success).toBe(false);
        expect(result.message).toBe("All fields are required.");
    });

    // Kiểm tra định dạng email không hợp lệ
    test("Failure when email format is invalid", () => {
        const result = registerUser("John Doe", "invalid-email", "password123");
        expect(result.success).toBe(false);
        expect(result.message).toBe("Invalid email format.");
    });

    // Kiểm tra mật khẩu ngắn hơn 6 ký tự
    test("Failure when password is less than 6 characters", () => {
        const result = registerUser("John Doe", "johndoe@example.com", "pass");
        expect(result.success).toBe(false);
        expect(result.message).toBe("Password must be at least 6 characters long.");
    });

    // Kiểm tra họ và tên không hợp lệ (chỉ có 1 từ)
    test("Failure when fullname does not contain at least two words", () => {
        const result = registerUser("John", "johndoe@example.com", "password123");
        expect(result.success).toBe(false);
        expect(result.message).toBe("Fullname must contain at least two words.");
    });
});
