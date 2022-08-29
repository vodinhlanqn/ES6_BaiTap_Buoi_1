//Tạo danh sách Màu
const colorList = [
    "pallet",
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar"
];

//Tạo Button Màu
const choiceBtnColor = () => {
    var btnColor = '';
    btnColor += `
    <button class="color-button active ${colorList[0]}" onclick="changeColorHouse('${colorList[0]}')" > </button>
    `;
    for (let i = 1; i < colorList.length; i++) {
        btnColor += `
    <button class="color-button ${colorList[i]}" onclick="changeColorHouse('${colorList[i]}')"> </button>
    `;
    }
    document.getElementById('colorContainer').innerHTML = btnColor;
}

//load trang web, thêm các button Color
window.onload = choiceBtnColor;

// gọi Hàm
let changeColorHouse = (color) => {
    document.getElementById('house').className = 'house' + " " + color;
    activeButton();
    console.log(color);
}

// Tạo hàm thêm Class Active cho button
const activeButton = () => {
    let btnContainer = document.querySelector('#colorContainer');
    let listBtn = btnContainer.getElementsByClassName('color-button');

    for (var i = 0; i < listBtn.length; i++) {
        listBtn[i].addEventListener('click', function () {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

