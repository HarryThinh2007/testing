console.log("Hello World");
var a = 3;
var a1 = 4;
// a-=a1;
// console.log(a++);
console.log(a);
console.log(typeof a);
var bool = true;
console.log(typeof bool);
var chuoi = "ngoi nha";
var chuoi4 = "tren cay";
console.log(typeof chuoi);
console.log(chuoi + " " + chuoi4);
var b = null;
console.log(typeof b);
var d = [1,2,3,4];
var c = ["chuoi1","chuoi2",3,"chuoi3",5];
console.log(c);
var cat ={
    maulong: "vang",
    tuoi: 2,
};
console.log(cat)
function funca(){
    let abc = 1;
    console.log(abc);
};
funca();
const diemso = 7;
if (diemso>=9){
    console.log("học sinh giỏi");
    if (diemso == 10) {
        console.log("chiều nay dắt đi ăn");
    }
}
else if (diemso>=7) {
    console.log("học sinh khá");
}
else {
    console.log("ra khỏi nhà");
}
// Number.isInteger (cho biết đây có phải số nguyên hay không)
// parseFloat (giữ nguyên số thập phân)
// parseInt (chuyển về số nguyên)