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
    const classeAtivo = 'ativo';

    accordionLista[0].classList.add(classeAtivo);
    accordionLista[0].nextElementSibling.classList.add(classeAtivo);

    function ativarAccordion() {
        this.classList.add(classeAtivo);
        this.nextElementSibling.classList.toggle(classeAtivo);
    }

    accordionLista.forEach((item) => {
        item.addEventListener('click', ativarAccordion);
    })
}
chamaAccordion();

function chamaScrollSuave() {
    function scrollSection(event) {
        event.preventDefault();

        const href = event.currentTarget.getAttribute('href'); //aqui pega só o nome do id
        const section = document.querySelector(href); //pega a section inteira a partir do nome do id

        section.scrollIntoView({
            behavior: 'smooth',
        })
    }

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollSection);
    })
}
chamaScrollSuave();

function chamaAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    const metadeDaTela = window.innerHeight * 0.6;

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - metadeDaTela; //getboudingclientrect pega a distancia do topo da section até o topo da tela
            if (sectionTop < 0) {
                section.classList.add('ativo');
                console.log(sectionTop);
            }
        })
    }

    animaScroll();
    window.addEventListener('scroll', animaScroll);
}
chamaAnimacaoScroll();