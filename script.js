const next = document.getElementById('Next');
const prev = document.getElementById('Prev');
const slider = document.getElementById('slider');
const slideImage = document.createElement('img')

slider.appendChild(slideImage);
slideImage.setAttribute("style", "width: 300px;");

function show(num) {
    if (num == 1) {
        prev.style.display = "none";
    } else if (num > 1 && num < 5){
        prev.style.display = "";
        next.style.display = "";
    } else {
        next.style.display = "none";
    }
    slideImage.src = 'images/' + num + '.jpg';
}

let position = 1;
show(position);

next.addEventListener('click', () => {
    show(++position);
});

prev.addEventListener('click', () => {
    show(--position);
});