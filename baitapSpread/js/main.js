let contentText = document.querySelector('.heading').innerHTML;
let spreadText = [...contentText];

let spanHTML = '';
spreadText.forEach(function (item) {
    spanHTML += `
        <span>${item}</span>
    `;
});
document.querySelector('.heading').innerHTML = spanHTML;
