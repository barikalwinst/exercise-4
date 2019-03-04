function ProsesADD(e) {
    event.preventDefault();
    var x1 = parseInt(document.getElementById("nilai1").value);
    var x2 = parseInt(document.getElementById("nilai2").value);
    var x3;
        x3 = x1+x2;
        alert("hasil penjumlahan " + x1 + " + " +x2 + " = " +x3);
}
function ProsesDEC(e) {
    event.preventDefault();
    var x1 = parseInt(document.getElementById("nilai1").value);
    var x2 = parseInt(document.getElementById("nilai2").value);
    var x3;    
        x3 = x1-x2;
        alert("hasil Pengurangan " + x1 + " - " +x2 + " = " +x3);
}
function ProsesMUL(e) {
    event.preventDefault();
    var x1 = parseInt(document.getElementById("nilai1").value);
    var x2 = parseInt(document.getElementById("nilai2").value);
    var x3;    
        x3 = x1*x2;
        alert("hasil Perkalian " + x1 + " x " +x2 + " = " +x3);
}
function ProsesDIV(e) {
    event.preventDefault();
    var x1 = parseInt(document.getElementById("nilai1").value);
    var x2 = parseInt(document.getElementById("nilai2").value);
    var x3;    
        x3 = x1/x2;
        alert("hasil Permbagian " + x1 + " / " +x2 + " = " +x3);
}


