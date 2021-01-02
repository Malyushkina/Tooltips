let tooltip = document.querySelector('.tooltip');
let closeButton = document.querySelector('.close-button');
let tooltipButtons = document.querySelectorAll('.tooltip-button');
let tooltipText = document.querySelector('.tooltip-text');

for (elem of tooltipButtons){
    elem.onclick = function(){
        tooltip.classList.add('opened');
        tooltipText.textContent = this.dataset.tooltipText;
    };
}

closeButton.onclick = function () {
  tooltip.classList.remove('opened');
};