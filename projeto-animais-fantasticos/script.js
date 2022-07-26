function chamaTabNav() {
    const tabmenu = document.querySelectorAll('.js-tabmenu li');
    const tabcontent = document.querySelectorAll('.js-tabcontent section');

    if (tabmenu.length && tabcontent.length) {
        tabcontent[0].classList.add('ativo');

        function activeTab(index) {
            tabcontent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabcontent[index].classList.add('ativo');
        }

        tabmenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        });
    }
}

chamaTabNav();

function chamaAccordion() {
    const accordionLista = document.querySelectorAll('.js-accordion dt');
    accordionLista[0].classList.add('ativo');
    accordionLista[0].nextElementSibling.classList.add('ativo');

    function ativarAccordion() {
        this.classList.add('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }

    accordionLista.forEach((item) => {
        item.addEventListener('click', ativarAccordion);
    })
}
chamaAccordion();
