const DEFAULT_COLUMNS = 3;
const DEFAULT_ROWS = 3;
let arrayDrinks = [];
let arrayBills = [];
for (let i = 0; i < DEFAULT_COLUMNS; i++) {
    arrayDrinks[i] = [];
}

let Drink = function (image, nameDrink, amount, price) {
    this.image = image;
    this.nameDrink = nameDrink;
    this.amount = amount;
    this.price = price;
};
let Bill = function (nameDrink, amount, sumMoney) {
    this.nameDrink = nameDrink;
    this.amount = amount;
    this.sumMoney = sumMoney;
};

let drink = new Drink("../images/drink10.jpg", "cafe latte", 10, 10000)
let drink2 = new Drink("../images/drink2.jpg", "tra sua chân trâu đường đen", 20, 11000)
let drink3 = new Drink("../images/drink3.jpg", "tra phô mai kem sữa", 50, 41000)
let drink4 = new Drink("../images/drink4.jpg", "tra hoa quả", 35, 21000)
let drink5 = new Drink("../images/drink5.jpg", "matcha đá say", 30, 12000)
let drink6 = new Drink("../images/drink6.jpg", "tra đào chanh sả", 20, 16000)
let drink7 = new Drink("../images/drink7.jpg", "tra hoa quả nhiệt đới", 10, 14000)
let drink8 = new Drink("../images/drink8.jpg", "tra sua gaok rang hàn quốc", 20, 12000)
let drink9 = new Drink("../images/drink9.jpg", "tra sua hokkaido", 30, 10000)

arrayDrinks[0][0] = drink;
arrayDrinks[0][1] = drink2;
arrayDrinks[0][2] = drink3;
arrayDrinks[1][0] = drink4;
arrayDrinks[1][1] = drink5;
arrayDrinks[1][2] = drink6;
arrayDrinks[2][0] = drink7;
arrayDrinks[2][1] = drink8;
arrayDrinks[2][2] = drink9;

function showDrinks() {
    let content = "<table>";
    for (let i = 0; i < DEFAULT_ROWS; i++) {
        content += "<tr>";
        for (let j = 0; j < DEFAULT_COLUMNS; j++) {
            content += "<td><img src=" + arrayDrinks[i][j].image + "><h2>" + arrayDrinks[i][j].nameDrink + "</h2><p>" + arrayDrinks[i][j].amount + "</p><p>" + arrayDrinks[i][j].price + "</p>" +
                "<input id='id" + i + j + "'><button onclick='plusAmount(" + i + "," + j + ")'>+</button><button onclick='minusAmount(" + i + "," + j + ")'>-</button></td>"
        }
        content += "</tr>"
    }
    content += "</table>";
    document.getElementById("drinks-table").innerHTML = content;
}
function showBill() {
    let totalMoney = 0;
    let content = "<table><tr><th colspan='3'>Số điện thoại</th></tr><tr><th colspan='3'>Địa chỉ</th></tr><tr><th>Tên sp</th><th>số lượng</th><th>Giá</th></tr>";
    for (let i = 0; i < arrayBills.length; i++) {
        totalMoney += arrayBills[i].sumMoney;
        content += "<tr>";
        content += "<td>" + arrayBills[i].nameDrink + "</td><td>" + arrayBills[i].amount + "</td><td>" + arrayBills[i].sumMoney + "</td>";
        content += "</tr>"
    }
    content += "<td>total:</td><td colspan='2'>"+ totalMoney +"</td></table>";
    document.getElementById("bill").innerHTML = content;
}

function plusAmount(i, j) {
    let amount = document.getElementById("id" + i + j).value;
    if (amount < arrayDrinks[i][j].amount) {
        amount++;
        document.getElementById("id" + i + j).value = amount;
        let nameBill = arrayDrinks[i][j].nameDrink;
        let amountBill = amount;
        let sumMoneyBill = amount * arrayDrinks[i][j].price;
        let bill = new Bill(nameBill, amountBill, sumMoneyBill);
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

function minusAmount(i, j) {
    let amount = document.getElementById("id" + i + j).value;
    if (amount > 0) {
        amount--;
        document.getElementById("id" + i + j).value = amount;
        let nameBill = arrayDrinks[i][j].nameDrink;
        let amountBill = amount;
        let sumMoneyBill = amount * arrayDrinks[i][j].price;
        let bill = new Bill(nameBill, amountBill, sumMoneyBill);
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






