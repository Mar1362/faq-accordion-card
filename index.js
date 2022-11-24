var lists = document.getElementsByTagName('h2');
function handleClick(event){
    // we unselect every selected title by removing his selected-subtitle class
    // by the way we hide the associated paragraph
    // and we do not forget the arrow
    var lastSelected = document.querySelector('.selected-subtitle'); 
    
    if (lastSelected){
        lastSelected.className = lastSelected.classList.toString().replace('selected-subtitle', '').replace('arrow-up', 'arrow-down');
        lastSelected.nextElementSibling.className = lastSelected.nextElementSibling.classList.toString().replace('show', 'hidden');
    }
    // we select the clicked subtitle by add the selected-subtitle class to it
    // by the way we show the associated paragraph
    // and we do not forget the arrow 
    event.target.className = (event.target.classList.toString() + ' selected-subtitle').replace('arrow-down', 'arrow-up');
    event.target.nextElementSibling.className = event.target.nextElementSibling.classList.toString().replace('hidden', 'show');
}
for(var i = 0; i < lists.length; i++){
    lists[i].addEventListener('click', handleClick, false);
}