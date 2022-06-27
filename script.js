const rate = 15;
let res = 1;
let x = 0;
let h = 1;
let l = 1;

function calc()
{
    h = +document.getElementById('h').value==0? 1 : +document.getElementById('h').value;
    l = +document.getElementById('l').value==0? 1 : +document.getElementById('l').value;
    x = document.getElementById('base').value;

    let withoutVat = ((x)*(h)*(l)).toFixed(2);
    let withVat = (withoutVat*115/100).toFixed(2);

    ele = document.getElementById('woVat');
    ele.textContent = withoutVat;

    addEle = document.getElementById('wVat');
    addEle.textContent = withVat;
}

