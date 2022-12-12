exit = document.querySelector('.bi-x-lg')
menu = document.querySelector('.bi-list')
sidebar1 = document.querySelector('.sidebarcont')
sidebar2 = document.querySelector('.minisidebar')
ad = document.querySelector('.topcont')
exit.addEventListener('click',function(){
    ad.innerHTML = '<style>' + '.topcont{display:none;}' + '</style>';
})
menu.addEventListener('click',function(){
    sidebar2.innerHTML = '<style>' + '.minisidebar{display:flex;}' + '</style>'
    sidebar1.innerHTML = '<style>' + '.sidebarcont{display:none;}' + '</style>'
})