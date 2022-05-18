$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


const btn1 = document.querySelector('.botao')
const vid = document.querySelector('.trailer')
const btn = document.querySelector('.botao2')
const infor = document.querySelector('.bio')


btn1.addEventListener('click', function(){

    if(vid.style.display === 'block'){
        vid.style.display = 'none'
    }
    else{
        vid.style.display = 'block'
    }

} )

btn.addEventListener('click', function(){

    if(infor.style.display==='block'){
        infor.style.display = 'none'
    }
    else{
        infor.style.display = 'block'
    }

})

