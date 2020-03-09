let User = function (phone, password, address) {
    this.phoneNumber = phone;
    this.password = password;
    this.address = address;
};
let arrayUsers = [];

let user1 = new User("0123456789", "123456", "ha noi");
let user2 = new User("9876543210", "123456", "hai duong");
arrayUsers.push(user1);
arrayUsers.push(user2);

function login() {
    let phoneNumber = document.getElementById("user-name").value;
    let password = document.getElementById("password").value;
    for (let i = 0; i < arrayUsers.length; i++) {
        if (arrayUsers[i].phoneNumber == phoneNumber && arrayUsers[i].password == password) {
            alert("Đăng nhập thành công");
            return;
        }
    }
    alert("Sai tên đăng nhập hoặc mật khẩu")
}
