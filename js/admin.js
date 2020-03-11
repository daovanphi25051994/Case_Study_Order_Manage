let storageKeyOfOrder = "arrayOrders";
let dataStringOfOrder = localStorage.getItem(storageKeyOfOrder);
let arrayOrders = [];
if (dataStringOfOrder) {
    arrayOrders = JSON.parse(dataStringOfOrder);
} else {
    arrayOrders = [];
}

function showOrder() {
    let totalMoney = 0;
    let content = "<table>";
    for (let i = 0; i < arrayOrders.length; i++) {
        content += " <tr><th colspan='3'>Số điện thoại: " + arrayOrders[0][0].user + "</th></tr><tr><th colspan='3'>Địa chỉ: " + arrayOrders[0][0].address + "</th></tr>" +
            "<tr><th>Tên sản phẩm</th><th>số lượng</th><th>Giá</th></tr>";
        for (let j = 0; j < arrayOrders[i].length; j++) {
            totalMoney += arrayOrders[i][j].sumMoney;
            content += "<tr>";
            content += "<td>" + arrayOrders[i][j].nameDrink + "</td><td>" + arrayOrders[i][j].amount + "</td><td>" + arrayOrders[i][j].sumMoney + "</td>";
            content += "</tr>"
        }

    }
    content += "<tr></tr><td>total:</td><td colspan='2'>" + totalMoney + "</td></tr>" +
        "<tr><td colspan='3'><button onclick='confirmBillOrder()'>Xong</button></td></tr>" +
        "<tr><td colspan='3'><p id='confirm-message'></p></td></tr>"
    content += " </table>";
    document.getElementById("order").innerHTML = content;
}

function confirmBillOrder() {
    document.getElementById("confirm-message").innerHTML = "Đã làm xong!!";
    document.getElementById("confirm-message").style.color = "red";
}


function updateData() {
    console.log(arrayDrinks);
    let content = "<table>";
    for (let i = 0; i < DEFAULT_ROWS; i++) {
        content += "<tr>";
        for (let j = 0; j < DEFAULT_COLUMNS; j++) {
            content += "<td><img src=" + arrayDrinks[i][j].image + "><h2>" + arrayDrinks[i][j].nameDrink + "</h2>" +
                "<p>" + arrayDrinks[i][j].amount + "</p><p>" + arrayDrinks[i][j].price + "</p>" +
                "<button onclick='changeImageDrink(" + i + "," + j + ")'>changeImageDrink</button>" +
                "<br><button onclick='changeNameDrink(" + i + "," + j + ")'>changeNameDrink</button>" +
                "<br><button onclick='changeAmount(" + i + "," + j + ")'>changeAmount</button>" +
                "<br><button onclick='changePrice(" + i + "," + j + ")'>changePrice</button></td>"
        }
        content += "</tr>"
    }
    content += "</table>";
    document.getElementById("admin-list-drinks").innerHTML = content;
}

function changeImageDrink(i, j) {
    let newSrcImage = prompt("Nhập src ảnh mới : ", arrayDrinks[i][j].image);
    if (newSrcImage != null) {
        arrayDrinks[i][j].image = newSrcImage;
    }
    updateData();
    localStorage.setItem(storageKeyOfDrinks, JSON.stringify(arrayDrinks));
}

function changeNameDrink(i, j) {
    let newName = prompt("Nhập src ảnh mới : ", arrayDrinks[i][j].nameDrink);
    if (newName != null) {
        arrayDrinks[i][j].nameDrink = newName;
    }
    updateData();
    localStorage.setItem(storageKeyOfDrinks, JSON.stringify(arrayDrinks));
}

function changeAmount(i, j) {
    let newAmount = prompt("Nhập src ảnh mới : ", arrayDrinks[i][j].amount);
    if (newAmount != null) {
        arrayDrinks[i][j].amount = newAmount;
    }
    updateData();
    localStorage.setItem(storageKeyOfDrinks, JSON.stringify(arrayDrinks));
}

function changePrice(i, j) {
    let newPrice = prompt("Nhập src ảnh mới : ", arrayDrinks[i][j].price);
    if (newPrice != null) {
        arrayDrinks[i][j].price = newPrice;
    }
    updateData();
    localStorage.setItem(storageKeyOfDrinks, JSON.stringify(arrayDrinks));
}