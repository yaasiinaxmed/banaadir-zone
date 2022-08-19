//  counter 
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200 

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})

// contact main js 
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// images pop 
document.querySelectorAll('.container-box img').forEach(image => {
  image.onclick = () =>{
   document.querySelector('.popup-images').style.display = 'block';
   document.querySelector('.popup-images img').src = image.getAttribute('src');
  }
});
  
document.querySelector('.popup-images span').onclick = () =>{
  document.querySelector('.popup-images').style.display = 'none';
}