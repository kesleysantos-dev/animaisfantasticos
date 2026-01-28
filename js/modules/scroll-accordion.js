export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = "ativo";
  if (accordionList.length) {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    accordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAcordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAcordion);
    });
  }
}

