exit = document.querySelector('.bi-x-lg')
menu = document.querySelector('.bi-list1')
sidebar1 = document.querySelector('.sidebarcont')
sidebarpos = document.querySelector('.sidebarcont1')
sidebar2 = document.querySelector('.minisidebar')
ad = document.querySelector('.topcont')

exit.addEventListener('click',function(){
    ad.innerHTML = '<style>' + '.topcont{display:none;}' + '</style>';
})
menu.addEventListener('click', function(){
    if(sidebar1.style.display === 'flex'){
        sidebar1.style.display = 'none'
        sidebar2.style.position ='static'
    }
    else{
        sidebar1.style.display = 'flex'
        sidebar2.style.position = 'absolute'
    }
})
function sidebar(){
    if(sidebarpos.style.width != '240px'){
        sidebarpos.style.width = '240px'
        document.querySelector('.dim').style.display = 'block'
        document.querySelector('.section').style.overflowY = 'hidden'
    }
    else{
        sidebarpos.style.width = '0'
        document.querySelector('.dim').style.display = 'none'
    }
    
}