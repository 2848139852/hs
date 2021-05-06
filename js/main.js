window.addEventListener('load', function() {
    //1.获取元素
    var l = document.querySelector('.l');
    var r = document.querySelector('.r');
    var focus = document.querySelector('.focus');


    //鼠标经过显示左右盒子
    focus.addEventListener('mouseenter', function() {
            l.style.diaplay = 'block';
            r.style.diaplay = 'block';
        })
        //鼠标离开隐藏盒子
    focus.addEventListener('mouseenter', function() {
        l.style.diaplay = 'none';
        r.style.diaplay = 'none';
    })

    var ul = focus.querySelector('.ul');
    var ol = focus.querySelector('.circle');

    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');

        li.setAttribute('index', i);
        ol.appendChild(li);

        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
        })

    }.

})