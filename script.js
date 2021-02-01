const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress');
const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');

let currentStep = 1;

btnPrev.addEventListener('click', () => {
  if (currentStep > 1) {
    updateProgress(false);
    updateButtonStates();
  }
});

btnNext.addEventListener('click', () => {
  if (currentStep <= circles.length) {
    currentStep++;
    updateProgress(true);
    updateButtonStates();
  }
});

const updateProgress = (forward) => {
  if (forward) {
    currentStep++;
  }
  else {
    circles[currentStep - 1].classList.remove('active');
    currentStep--;
  }

  progress.style.width = getWidthPercentage();
  circles[currentStep - 1].classList.add('active');
}

const getWidthPercentage = () => 
  ((currentStep - 1) / (circles.length - 1) * 100) + '%';

const updateButtonStates = () => {
  btnPrev.disabled = currentStep <= 1;
  btnNext.disabled = currentStep >= circles.length;
}

