document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY || window.pageYOffset;

        if (scrollTop > lastScrollTop) {
            header.classList.add("header-up");
        } else {
            header.classList.remove("header-up");
        }
        lastScrollTop = scrollTop;
    });
});
