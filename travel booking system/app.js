Array.from(document.getElementsByTagName('input')).forEach((a, b)=> {
    a.addEventListener('keyup', (a1)=>{
        if (a.value.length > 0) {
            document.getElementsByClassName('bi-caret-down-fill')[b].style.transform = "rotate(180dag)";
        } else {
            document.getElementsByClassName('bi-caret-down-fill')[b].style.transform = "rotate(0dag)";
        }
    })
})

let menu_btn = document.getElementsByClassName('bi-three-dots')[0];
let menu_box = doccument.getElementsById('menu_box');


menu_btn.addEventListener('click', ()=>{
    menu_box.classList.toggle('ul_active');
})