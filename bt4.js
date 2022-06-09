let a=+prompt('Nhập a');
let b=+prompt('Nhập b');
let c=+prompt('Nhập c');
if(a>b){
    if(a>c){
        alert('a max');
    }else {
        alert('c max');
    }
}else{
    if(b>c){
        alert('b max');
    }else{
        alert('c max')
    }
}