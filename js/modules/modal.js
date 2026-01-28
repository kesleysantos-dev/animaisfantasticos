export default function initModal(){

};

const abrirModal = document.querySelector('[data-modal="abrir"]');
const fecharModal = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');


function toggleModal(event){
event.preventDefault();
containerModal.classList.toggle('ativo');
};

function clickForaModal(event){
if(event.target === this){
    toggleModal(event);
}
};


abrirModal.addEventListener('click',  toggleModal);
fecharModal.addEventListener('click', toggleModal);
containerModal.addEventListener('click', clickForaModal);