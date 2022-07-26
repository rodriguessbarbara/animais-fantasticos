function tabNav() {
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

tabNav();