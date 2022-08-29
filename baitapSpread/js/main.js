let contentText = document.querySelector('.heading').innerHTML;
let spreadText = [...contentText];

let spanHTML = '';
// Cách 1: sử dụng For of
for (var item of spreadText) {
    spanHTML += `
        <span>${item}</span>
    `;
    console.log(item);
}
document.querySelector('.heading').innerHTML = spanHTML;

// Cách 2: sử dụng For in
// for (var item in spreadText) {
//     spanHTML += `
//         <span>${spreadText[item]}</span>
//     `;
// }
// document.querySelector('.heading').innerHTML = spanHTML;

// Cách 3 sử dụng forEach
// spreadText.forEach(function (item) {
//     spanHTML += `
//         <span>${item}</span>
//     `;
// });
// document.querySelector('.heading').innerHTML = spanHTML;

