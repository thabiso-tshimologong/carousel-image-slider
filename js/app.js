const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImg = document.querySelectorAll('.gallery-images')
let currSelect = 0;

prevBtn.addEventListener('click', () => {
    galleryImg[currSelect].classList.remove("active");
    currSelect--; //decrementing  by 1 for all the pictures 

    galleryImg[currSelect].classList.add("active");
    nextBtn.disabled = false;

    if(currSelect.length === 0){
        prevBtn.disabled = true;
     }

  
});

nextBtn.addEventListener('click', () => {
    //console.log("this ha")
galleryImg[currSelect].classList.remove("active");
currSelect++; //incrementing by 1 for all the pictures 

galleryImg[currSelect].classList.add("active");
prevBtn.disabled = false;

if(currSelect.length === currSelect + 1){
   nextBtn.disabled = true;
}

});
