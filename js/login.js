let loginBtn = document.getElementById("btn-login");
loginBtn.addEventListener("click", login);
function login() {
    let phoneNumber = document.getElementById("user-name").value;
    let password = document.getElementById("password").value;
    for (let i = 0; i < arrayUsers.length; i++) {
        if (arrayUsers[i].phoneNumber == phoneNumber && arrayUsers[i].password == password) {
            alert("đăng nhập thành công");
            document.getElementById("form").action = "./index.html";
            return;
        }
    }
    if (phoneNumber == ADMIN_ACCOUNT && password == ADMIN_PASSWORD){
        alert("đăng nhập thành công");
        document.getElementById("form").action = "./admin.html";
        return;
    }
    alert("Sai tên đăng nhập hoặc mật khẩu");
}
