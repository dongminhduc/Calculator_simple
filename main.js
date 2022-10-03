var input = document.querySelector('.input');
var items = Array.from(document.querySelectorAll('.item'));
items.forEach(function (btn) { //callback
    btn.addEventListener('click', function () { //lang nghe su kien click
        if (btn.innerHTML == '0') input.innerHTML = '';
        if (btn.innerHTML == 'AC') input.innerHTML = '';
        else if (btn.innerHTML == 'DEL') {
            var arrtext = Array.from(input.innerHTML);
            arrtext.splice(arrtext.length - 1, 1);// xoa di phan tu cuoi cua mang
            if (arrtext.length != 0)
                input.innerHTML = arrtext.join('');
            else input.innerHTML = '0';
        }
        else if (btn.innerHTML == '=') {
            input.innerHTML = eval(input.innerHTML);
        }
else input.innerHTML += btn.innerHTML;
    })
})