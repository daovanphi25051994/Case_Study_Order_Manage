let loginBtn = document.getElementById("btn-login");
loginBtn.addEventListener("click", login);
function login() {
    let phoneNumber = document.getElementById("user-name").value;
    let password = document.getElementById("password").value;
    for (let i = 0; i < arrayUsers.length; i++) {
        if (arrayUsers[i].phoneNumber == phoneNumber && arrayUsers[i].password == password) {
            alert("đăng nhập thành công");
            return;
        }
    }
    alert("Sai tên đăng nhập hoặc mật khẩu");
}
