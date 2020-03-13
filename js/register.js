let storageKey = "arrayUsers";
let dataString = localStorage.getItem(storageKey);
let arrayUsers = [];
if (dataString) {
    arrayUsers = JSON.parse(dataString);
} else {
    arrayUsers = [];
}

let User = function (phone, password, address) {
    this.phoneNumber = phone;
    this.password = password;
    this.address = address;
};

let registerBtn = document.getElementById("btn-register");
registerBtn.addEventListener("click", register);
function register() {
    let phoneNumber = document.getElementById("user-name").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let address = document.getElementById("address").value;
    let isNotPhoneNumber = true;
    for (let i = 0; i < arrayUsers.length; i++) {
        if (phoneNumber == arrayUsers[i].phoneNumber) {
            isNotPhoneNumber = false;
            break;
        }
    }
    if (phoneNumber != "" && password1 != "" && password2 != "" && address != "" && password1 === password2
        && isNotPhoneNumber && phoneNumber.length === 10 && password1.length >= 6 && password1.length <= 20
        && password2.length >= 6 && password2.length <= 20 && phoneNumber !== ADMIN_ACCOUNT) {
        let random = Math.floor(Math.random() * 9000) + 1000;
        let OTP = prompt("Nhập mã OTP: " + random);
        if (random == OTP) {
            let user = new User(phoneNumber, password1, address);
            arrayUsers.push(user);
            alert("Đăng ký thành công!!")
            localStorage.setItem(storageKey, JSON.stringify(arrayUsers));
        } else {
            alert("Mã OTP sai!!")
        }
    } else {
        alert("Nhập thiếu thông tin hoặc mật khẩu không giống nhau hoặc trùng số điện thoại !!");
    }
}

let userInput = document.getElementById("user-name");
userInput.addEventListener("keydown", checkUserName);
function checkUserName() {
    setTimeout(function () {
        let userName = document.getElementById("user-name").value;
        if (userName.length === 10 && Number(userName) !==NaN ) {
            document.getElementById("check-user").innerHTML = "ok";
            document.getElementById("check-user").style.color = "blue";
        } else {
            document.getElementById("check-user").innerHTML = "&times;";
            document.getElementById("check-user").style.color = "red";
        }
    }, 0)
}

let userPassword1 = document.getElementById("password1");
userPassword1.addEventListener("keydown", checkPassword1);
function checkPassword1() {
    setTimeout(function () {
        let password1 = document.getElementById("password1").value;
        if (password1.length >= 6 && password1.length <= 20 ) {
            document.getElementById("check-password1").innerHTML = "ok";
            document.getElementById("check-password1").style.color = "blue";
        } else {
            document.getElementById("check-password1").innerHTML = "&times;";
            document.getElementById("check-password1").style.color = "red";
        }
    }, 0)
}

let userPassword2 = document.getElementById("password2");
userPassword2.addEventListener("keydown", checkPassword2);
function checkPassword2() {
    setTimeout(function () {
        let password2 = document.getElementById("password2").value;
        if (password2.length >= 6 && password2.length <= 20 ) {
            document.getElementById("check-password2").innerHTML = "ok";
            document.getElementById("check-password2").style.color = "blue";
        } else {
            document.getElementById("check-password2").innerHTML = "&times;";
            document.getElementById("check-password2").style.color = "red";
        }
    }, 0)
}