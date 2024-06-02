const form = document.getElementById("form")
const hero = document.getElementById("hero")

function submitForm(e) {
    const checkbox = document.getElementById('agreement');
    if (!checkbox.checked) {
        alert('You must agree to the terms and conditions.');
    }
    const formData = new FormData(e.target);
    fetch("https://getform.io/f/zaxdeqra", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
        },
    })
    .then(response => alert(response))
    .catch(error => alert("Error occured  "+error))

}

function openForm(){
    form.style.scale = 1;
    form.style.opacity = "100%";
    hero.style.opacity = 0.6;
}

function closeForm(){
    form.style.scale = 0.3;
    form.style.opacity = "0%";
    hero.style.opacity = "100%";
}

function changeImage(img, element){
    const mainimg = document.getElementById("p3mainimg");
    const selectedBox = document.querySelector(".selected");

    mainimg.style.backgroundImage = `url(./assets/${img})`;

    if (selectedBox) {
        selectedBox.classList.remove('selected');
    }
    
    element.classList.add('selected');
}

function changeScrollerImage(img, element, num){
    const selEle = document.querySelector(".siselected");
    const sliderBox = document.getElementById('sliderBox');
    const sliderWidth = sliderBox.querySelector('.slider').offsetWidth + parseInt(window.getComputedStyle(sliderBox).gap);

    selEle.classList.remove('siselected');
    selEle.src = "./assets/p2d.svg"
    element.src = `./assets/${img}`;
    element.classList.add('siselected');

    console.log(num,sliderWidth)

    if (num === 2) {
        if(sliderBox.scrollLeft+sliderWidth*4 > sliderWidth*12)
            sliderBox.scrollLeft -= sliderWidth*4;
        else
            sliderBox.scrollLeft += sliderWidth*4;
    } else if (num === 3) {
        sliderBox.scrollLeft += sliderWidth*8;
    } else if (num === 1) {
        sliderBox.scrollLeft = 0;
    }

}