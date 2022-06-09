let a=+prompt('Nhập điểm kiểm tra');
let b=+prompt('Nhập điểm giữa kỳ');
let c=+prompt('Nhập điểm cuối kỳ');
d=(a+b+c)/3;
if(d>=8.5 && d<10){
    alert('loại giỏi');
}else if(d>=7 && d<8.5){
    alert('loại khá');
}else  if(d>=5.5 && d<7){
    alert('loại trung bình');
}else  if(d>=4 && d<5.5){
    alert('trung bình yếu');
}else if(d>=0 && d<4){
    alert('Học lại');
}else{
    alert('Nhập lại điểm')
}
