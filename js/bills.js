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
    let totalMoney = 0;
    let content = "<table><tr><th colspan='3'>Số điện thoại: " + arrayBills[0].user + " </th></tr><tr><th colspan='3'>Địa chỉ: " + arrayBills[0].address + "</th></tr><tr><th>Tên sản phẩm</th><th>số lượng</th><th>Giá</th></tr>";
    for (let i = 0; i < arrayBills.length; i++) {
        totalMoney += arrayBills[i].sumMoney;
        content += "<tr>";
        content += "<td>" + arrayBills[i].nameDrink + "</td><td>" + arrayBills[i].amount + "</td><td>" + arrayBills[i].sumMoney + "</td>";
        content += "</tr>"
    }
    content += "<tr></tr><td>total:</td><td colspan='2'>" + totalMoney + "</td></tr><tr><td colspan='3'><button onclick='buyDrinks()'>Mua</button></td></tr>" +
        "<tr><td colspan='3'><p id='confirm-message'></p></td></tr></table>";
    document.getElementById("bill").innerHTML = content;
}

function plusAmount(i, j) {
    let amount = parseInt(document.getElementById("id" + i + j).value);
    if (amount < arrayDrinks[i][j].amount) {
        amount++;
        document.getElementById("id" + i + j).value = amount;
        let nameBill = arrayDrinks[i][j].nameDrink;
        let amountBill = amount;
        let sumMoneyBill = amount * arrayDrinks[i][j].price;
        let bill = new Bill(arrayUsers[0].phoneNumber, arrayUsers[0].address, nameBill, amountBill, sumMoneyBill);
        for (let i = 0; i < arrayBills.length; i++) {
            if (arrayBills[i].nameDrink == nameBill) {
                arrayBills[i].amount = amountBill;
                arrayBills[i].sumMoney = sumMoneyBill;
                showBill();
                return;
            }
        }
        arrayBills.push(bill);
        console.log(arrayBills);
        showBill();
    }
}

function minusAmount(indexCols, indexRows) {
    let amount = parseInt(document.getElementById("id" + indexCols + indexRows).value);
    if (amount > 1) {
        amount--;
        document.getElementById("id" + indexCols + indexRows).value = amount;
        let nameBill = arrayDrinks[indexCols][indexRows].nameDrink;
        let amountBill = amount;
        let sumMoneyBill = amount * arrayDrinks[indexCols][indexRows].price;
        let bill = new Bill(arrayUsers[0].phoneNumber, arrayUsers[0].address, nameBill, amountBill, sumMoneyBill);
        for (let i = 0; i < arrayBills.length; i++) {
            if (arrayBills[i].nameDrink == nameBill) {
                arrayBills[i].amount = amountBill;
                arrayBills[i].sumMoney = sumMoneyBill;
                showBill();
                return;
            }
        }
        arrayBills.push(bill);
        console.log(arrayBills);
        showBill();
    } else if (amount === 1) {
        amount--;
        document.getElementById("id" + indexCols + indexRows).value = amount;
        for (let x = 0; x < arrayBills.length; x++) {
            if (arrayBills[x].nameDrink === arrayDrinks[indexCols][indexRows].nameDrink) {
                arrayBills.splice(x, 1);
                showBill();
                break;
            }
        }
    }
}

function buyDrinks() {
    let isConfirm = confirm("Bạn có đồng ý mua?");
    if (isConfirm && (arrayBills.length > 0)) {
        let message = "Cảm ơn quý khách đã đặt đồ uống tại Lucy." + "<br>" + "Đồ uống của quý khách sẽ được gửi tới trong vài phút";
        document.getElementById("confirm-message").innerHTML = message;
        arrayOrders.push(arrayBills);
        localStorage.setItem(storageKeyOfBill, JSON.stringify(arrayBills));
        localStorage.setItem(storageKeyOfOrder, JSON.stringify(arrayOrders));
    }
}