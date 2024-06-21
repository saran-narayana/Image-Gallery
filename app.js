const btns = document.querySelectorAll('.btn');
const imgs = document.querySelectorAll('.work_imgs img');

for(let i = 1; i < btns.lenght; i++){
    btns[i].addEventListener('click',imgFiltering)
}
function active_btn(e){
    btns.forEach(btn => {
        btn.classList.remove('btn_click')
    });
    e.target.classList.add('btn_click');
}
function imgFiltering(e){
    active_btn(e);
    imgs.forEach(img =>{
        img.classList.remove('img_shrink');
        img.classList.add('img_expand');
        const img_type = parseInt(img.dataset.img);
        const btn_type = parseInt(e.target.dataset.btn);
        if(img_type !== btn_type){
            img.classList.remove('img_expand');
            img.classList.add('img_shrink');
        }

    });
}

btns[0].addEventListener('click', (e) =>{
    active_btn(e);
    imgs.forEach(img =>{
        img.classList.remove('img_expand');
        img.classList.add('img_shrink');
    })
})