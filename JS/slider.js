const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image')
const slider_nav = document.querySelector('.slider-nav');
const MainSlider = document.querySelector('.MainSlider');
let slideNumber = 1;

/*------------------------------------------------*/


for(i=0;i<images.length;i++)
    {
        const div = document.createElement('div');
        div.className = 'button';
        slider_nav.appendChild(div);
    }


const resetBg = ()=>{
    buttons.forEach((button) => {
        button.style.backgroundColor = 'transparent'
    })
};

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white'; 

buttons.forEach((button , i) => {
    button.addEventListener('click',()=>{
        resetBg();
        slider.style.transform = `translateX(-${i*100}%)`;
        slideNumber = i+1;
        button.style.backgroundColor = 'white'; 

    })
});



/*----------------------------------------------------*/

right.addEventListener('click',()=>{
    if(slideNumber<images.length){
        slider.style.transform = `translateX(-${slideNumber*100}%)`;
        slideNumber++;
    }
    else{
        slider.style.transform = `translateX(0%)`;
        slideNumber = 1;
    }
    resetBg();
    buttons[slideNumber-1].style.backgroundColor = 'white';
});

left.addEventListener('click',()=>{
    if(slideNumber > 1){
    slider.style.transform = `translateX(-${(slideNumber-2)*100}%)`;
    slideNumber--;
    }
    else{
        slider.style.transform = `translateX(-${(images.length-1)*100}%)`;
        slideNumber = images.length;
    }
    resetBg();
    buttons[slideNumber-1].style.backgroundColor = 'white';
});


/*-----------  autoslide    --------------------*/

let slideInterval;

const startSlideShow = () => {
    slideInterval = setInterval(()=>{
        if(slideNumber<images.length){
            slider.style.transform = `translateX(-${slideNumber*100}%)`;
            slideNumber++;
        }
        else{
            slider.style.transform = `translateX(0%)`;
            slideNumber = 1;
        }
        resetBg();
        buttons[slideNumber-1].style.backgroundColor = 'white';
    },3000)
}

const stopSlideshow = ()=>{
    clearInterval(slideInterval);
};


startSlideShow();

MainSlider.addEventListener('mouseover',stopSlideshow);
MainSlider.addEventListener('mouseout',startSlideShow);