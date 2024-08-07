import './style.css';

const images = document.querySelectorAll(".image_slide > img");

document.addEventListener("DOMContentLoaded", () => {
    images[0].classList.add("active_image");
    let button = document.querySelector(".dropdownButton");
    let content = document.querySelectorAll(".content");
    let test = document.querySelector(".test");
    console.log(test.classList);
    
    button.addEventListener("click", () => {
        content.forEach((item) => {
            console.log('Before:', item.classList);
            if (!item.classList.contains("active")) {
                item.classList.add("active");
                console.log('Added active:', item.classList);
            } else {
                item.classList.remove("active");
                console.log('Removed active:', item.classList);
            }
        });
    });

    let right_button = document.querySelector(".right_button");
    let left_button = document.querySelector(".left_button");

    right_button.addEventListener("click", () => {
        let imageArray = Array.from(images);
        let index = get_index();
        let length = imageArray.length;
        let next_index;
        if (index === length-1){
            next_index = 0;
        }
        else{
            next_index = index + 1;
        }

        images[index].classList.remove("active_image");
        images[next_index].classList.add("active_image");
    }

    )

    left_button.addEventListener("click", () => {
        let imageArray = Array.from(images);
        let index = get_index();
        let length = imageArray.length;
        let next_index;
        if (index === 0){
            next_index = length-1;
        }
        else{
            next_index = index - 1;
        }

        images[index].classList.remove("active_image");
        images[next_index].classList.add("active_image");
    }

    )
    
    
});


//function to get index of the current image on carousell
function get_index(){
    let active = document.querySelector(".active_image");

    let imageArray = Array.from(images);
    return imageArray.findIndex(image => image === active);
}
