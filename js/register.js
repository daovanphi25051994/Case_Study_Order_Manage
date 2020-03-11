let storageKey = "arrayUsers";
let dataString = localStorage.getItem(storageKey);
let arrayUsers = [];
if (dataString){
    arrayUsers = JSON.parse(dataString);
}else {
    arrayUsers = [];
}

let User = function (phone, password, address) {
    this.phoneNumber = phone;
    this.password = password;
    this.address = address;
};

//let user1 = new User("0968589480", "123456", "Ha noi");
//let user2 = new User("0123456789", "123456", "Haiduong");
//arrayUsers.push(user1);
//arrayUsers.push(user2);
let registerBtn = document.getElementById("btn-register");
registerBtn.addEventListener("click", register);

function register() {
    let phoneNumber = document.getElementById("user-name").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let address = document.getElementById("address").value;
    let isNotPhoneNumber = true;
    for (let i = 0; i < arrayUsers.length; i++){
        if (phoneNumber == arrayUsers[i].phoneNumber){
            isNotPhoneNumber = false;
            break;
        }
    }
    if (phoneNumber != "" && password1 != "" && password2 != "" && address != "" && password1 === password2 && isNotPhoneNumber){
        let random = 123456;
        //let random = Math.floor(Math.random() * 9000) + 1000;
        let OTP = prompt("Nhập mã OTP");
        if (random == OTP){
            let user = new User(phoneNumber, password1, address);
            arrayUsers.push(user);
            alert("Đăng ký thành công!!")
            localStorage.setItem(storageKey,JSON.stringify(arrayUsers));
        }else {
            alert("Mã OTP sai!!")
        }
    }else {
        alert("Nhập thiếu thông tin hoặc mật khẩu không giống nhau hoặc trùng số điện thoại !!");
    }
}

