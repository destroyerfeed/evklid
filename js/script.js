const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
        delay: 15000,
    },

});

const tabs = document.querySelector(".tab-wrapper");
const tabButton = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabButton.forEach(btn => {
            btn.classList.remove("tab-active");
        });
        e.target.classList.add("tab-active");

        contents.forEach(content => {
            content.classList.remove("tab-active");
        });
        const element = document.getElementById(id);
        element.classList.add("tab-active");
    }
}


const items = document.querySelectorAll(".accordion .accordion-btn");

function toggleAccordion() {
    const ItemToggle = this.getAttribute('aria-expanded');
    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false')
    };

    if (ItemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));