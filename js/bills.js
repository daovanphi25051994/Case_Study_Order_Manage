let storageKeyOfBill = "arrayBills";
let dataStringOfBill = localStorage.getItem(storageKeyOfBill);
let arrayBills = [];
if (dataStringOfBill) {
    arrayBills = JSON.parse(dataStringOfBill);
} else {
    arrayBills = [];
}

let Bill = function (user, address, nameDrink, amount, sumMoney) {
    this.user = user;
    this.address = address;
    this.nameDrink = nameDrink;
    this.amount = amount;
    this.sumMoney = sumMoney;
};

function showBill() {
    if (arrayBills.length > 0){
        let totalMoney = 0;
        let content = "<table><tr><th colspan='3'>Số điện thoại: " + arrayBills[0].user + " </th></tr>" +
            "<tr><th colspan='3'>Địa chỉ: " + arrayBills[0].address + "</th></tr><tr><th>Tên sản phẩm</th><th>số lượng</th><th>Giá</th></tr>";
        for (let i = 0; i < arrayBills.length; i++) {
            totalMoney += arrayBills[i].sumMoney;
            content += "<tr>";
            content += "<td>" + arrayBills[i].nameDrink + "</td><td>" + arrayBills[i].amount + "</td><td>" + arrayBills[i].sumMoney + " VND</td>";
            content += "</tr>"
        }
        content += "<tr></tr><td>total:</td><td colspan='2'>" + totalMoney + " VND</td></tr>" +
            "<tr><td colspan='3'><button onclick='buyDrinks()'>Mua</button></td></tr>" +
            "<tr><td colspan='3'><p id='confirm-message'></p></td></tr></table>";
        document.getElementById("bill").innerHTML = content;
    }else {
        document.getElementById("bill").innerHTML = "";
    }
}

function buyDrinks() {
    let isConfirm = confirm("Bạn có đồng ý mua?");
    if (isConfirm && (arrayBills.length > 0)) {
        let message = "Cảm ơn quý khách đã đặt đồ uống tại Lucy." + "<br>" + "Đồ uống của quý khách sẽ được gửi tới trong vài phút";
        document.getElementById("confirm-message").innerHTML = message;
        document.getElementById("confirm-message").style.color = "blue";
        arrayOrders.push(arrayBills);
        localStorage.setItem(storageKeyOfBill, JSON.stringify(arrayBills));
        localStorage.setItem(storageKeyOfOrder, JSON.stringify(arrayOrders));
    }
}