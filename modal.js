var btnmodal = document.querySelector('.open-modal-btn');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal__header i');
var buttonClose = document.querySelector('.modal__footer button');


function toggleModal() {
    modal.classList.toggle('hide');
}

btnmodal.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
buttonClose.addEventListener('click', toggleModal);
modal.addEventListener('click', function(e) {
    if (e.target == e.currentTarget) {
        toggleModal();
    }
});