window.onload = function() {
    var board = document.querySelector('.board-js');

board.addEventListener('click', addX);
};
var centinel = true;
function addX(event){
    if(event.target.matches('td') && event.target.textContent === ''){
        if(centinel) {
            event.target.textContent= 'X';
        centinel = false;
        } else {
            event.target.textContent='0';
        centinel = !centinel;
        }
    }
  }
