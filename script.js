const rate = 15;
let x;

function addVat()
{
    const res = Number(x) + (x * rate / 100);
    ele = document.getElementById('add');
    ele.textContent = res;
}

function remVat()
{
    const res = (x * 100 / (100+rate)).toFixed(2);
    ele = document.getElementById('rem');
    ele.textContent = res;
}

function calc(){
    x = document.getElementById('base').value;
    addVat();
    remVat();
}

