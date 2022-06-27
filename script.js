const rate = 15;
let res = 1;
let x = 0;
let h = 1;
let l = 1;

function calc()
{
    h = (+document.getElementById('h').value | 1);
    l = (+document.getElementById('l').value | 1);
    x = document.getElementById('base').value;

    let withoutVat = ((+x)*(+h)*(+l)).toFixed(2);
    let withVat = (withoutVat*115/100).toFixed(2);

    ele = document.getElementById('woVat');
    ele.textContent = withoutVat;

    addEle = document.getElementById('wVat');
    addEle.textContent = withVat;
}

