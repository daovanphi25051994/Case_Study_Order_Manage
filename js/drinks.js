let Drink = function (image, nameDrink, amount, price) {
    this.image = image;
    this.nameDrink = nameDrink;
    this.amount = amount;
    this.price = price;
};

let arrayDrinks = [];
for (let i = 0; i < DEFAULT_COLUMNS; i++) {
    arrayDrinks[i] = [];
}

let drink = new Drink("./images/drink10.jpg", "Cafe latte", 10, 15000);
let drink2 = new Drink("./images/drink2.jpg", "Trà sữa chân trâu đường đen", 20, 25000);
let drink3 = new Drink("./images/drink3.jpg", "Trà phô mai kem sữa", 50, 35000);
let drink4 = new Drink("./images/drink4.jpg", "Trà hoa quả", 35, 20000);
let drink5 = new Drink("./images/drink5.jpg", "Matcha đá say", 30, 20000);
let drink6 = new Drink("./images/drink6.jpg", "Trà đào chanh sả", 20, 25000);
let drink7 = new Drink("./images/drink7.jpg", "Trà hoa quả nhiệt đới", 10, 15000);
let drink8 = new Drink("./images/drink8.jpg", "Trà sữa gạo rang hàn quốc", 20, 15000);
let drink9 = new Drink("./images/drink9.jpg", "Trà sữa hokkaido", 30, 10000);

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
            content += "<td><img src=" + arrayDrinks[i][j].image + "><h2>" + arrayDrinks[i][j].nameDrink + "</h2><p>Amount: " + arrayDrinks[i][j].amount + "</p><p>Price: " + arrayDrinks[i][j].price + " VND</p>" +
                "<input value='0' id='id" + i + j + "'><button onclick='plusAmount(" + i + "," + j + ")'>+</button><button onclick='minusAmount(" + i + "," + j + ")'>-</button></td>"
        }
        content += "</tr>"
    }
    content += "</table>";
    document.getElementById("drinks-table").innerHTML = content;
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