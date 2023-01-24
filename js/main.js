(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')

    

    var menu = Menu({
        container:'.header__nav',
        toggleBtn:'.header__btnMenu',
        widthEnabled:1024
    })
})()