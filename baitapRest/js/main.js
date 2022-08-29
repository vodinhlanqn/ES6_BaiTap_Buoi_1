function getEle(id) {
    return document.getElementById(id);
}

getEle("btnKhoi1").addEventListener('click', () => {
    let diemToan = getEle("inpToan").value * 1;
    let diemLy = getEle("inpLy").value * 1;
    let diemHoa = getEle("inpHoa").value * 1;
    let diemTBKhoi1 = tinhDiemTB(diemToan, diemHoa, diemLy);
    getEle("tbKhoi1").innerHTML = `Điểm Trung Bình: ${diemTBKhoi1}`;
});

getEle("btnKhoi2").addEventListener('click', () => {
    let diemVan = getEle("inpVan").value * 1;
    let diemSu = getEle("inpSu").value * 1;
    let diemDia = getEle("inpDia").value * 1;
    let diemAnh = getEle("inpEnglish").value * 1;
    let diemTBKhoi2 = tinhDiemTB(diemVan, diemSu, diemDia, diemAnh);
    getEle("tbKhoi2").innerHTML = `Điểm Trung Bình: ${diemTBKhoi2}`;
});

tinhDiemTB = (...diemTB) => {
    let tongDiem = 0;
    diemTB.forEach(function (diem) {
        return tongDiem += diem;
    });
    return tongDiem / diemTB.length;
}

