

window.addEventListener("scroll", () => {
    const position = window.innerHeight / 1.5;



    const information = document.querySelector(".information");
    const information_title = document.querySelector(".information_title");
    const information_subtitle = document.querySelector(".information_subtitle");
    if (information.getBoundingClientRect().top < position) {
        information_title.classList.add("show");
        setTimeout(() => {
            information_subtitle.classList.add("show");
        }, 250)
    }


    const solution_title = document.querySelector(".solution").querySelector(".title");
    if (solution_title.getBoundingClientRect().top < position) {
        solution_title.classList.add("show");
    }


    const solution__tabs_nav = document.querySelector(".solution__tabs").querySelector(".nav");
    if (solution__tabs_nav.getBoundingClientRect().top < position) {
        solution__tabs_nav.classList.add("show");
    }

    const solution__tabs_cont_items = document.querySelectorAll(".solution__tabs_cont_itemb");
    let delay = 50;
    if (solution__tabs_cont_items[0].getBoundingClientRect().top < position) {
        for (let i = 0; i < solution__tabs_cont_items.length; i++) {
            setTimeout(() => {
                solution__tabs_cont_items[i].classList.add("show");
            }, delay)
            delay += 50;
        }
    }

    const solution__tabs_cont_see = document.querySelector(".solution__tabs_cont_see");
    if (solution__tabs_cont_see.getBoundingClientRect().top < position) {
        solution__tabs_cont_see.classList.add("show");
    }

    const advantage_title = document.querySelector(".advantage").querySelector(".title");
    if (advantage_title.getBoundingClientRect().top < position) {
        advantage_title.classList.add("show");
    }

    const advantage__analytics_span = document.querySelector(".advantage__analytics").querySelector("span");
    const advantage__analytics_h3 = document.querySelector(".advantage__analytics").querySelector("h3");
    const advantage__analytics_p = document.querySelector(".advantage__analytics").querySelector("p");
    if (advantage__analytics_span.getBoundingClientRect().top < position) {
        advantage__analytics_span.classList.add("show");
        advantage__analytics_h3.classList.add("show");
        setTimeout(() => {
            advantage__analytics_p.classList.add("show");
        }, 200)
    }

    const advantage__Savings_span = document.querySelector(".advantage__Savings").querySelector("span");
    const advantage__Savings_h3 = document.querySelector(".advantage__Savings").querySelector("h3");
    const advantage__Savings_p = document.querySelector(".advantage__Savings").querySelector("p");
    if (advantage__Savings_span.getBoundingClientRect().top < position) {
        advantage__Savings_span.classList.add("show");
        advantage__Savings_h3.classList.add("show");
        setTimeout(() => {
            advantage__Savings_p.classList.add("show");
        }, 200)
    }

    const advantage__cutting_span = document.querySelector(".advantage__cutting").querySelector("span");
    const advantage__cutting_h3 = document.querySelector(".advantage__cutting").querySelector("h3");
    const advantage__cutting_p = document.querySelector(".advantage__cutting").querySelector("p");
    if (advantage__cutting_span.getBoundingClientRect().top < position) {
        advantage__cutting_span.classList.add("show");
        advantage__cutting_h3.classList.add("show");
        setTimeout(() => {
            advantage__cutting_p.classList.add("show");
        }, 200)
    }

    const advantage__security_span = document.querySelector(".advantage__security").querySelector("span");
    const advantage__security_h3 = document.querySelector(".advantage__security").querySelector("h3");
    const advantage__security_p = document.querySelector(".advantage__security").querySelector("p");
    if (advantage__security_span.getBoundingClientRect().top < position) {
        advantage__security_span.classList.add("show");
        advantage__security_h3.classList.add("show");
        setTimeout(() => {
            advantage__security_p.classList.add("show");
        }, 200)
    }

    const advantage__lastAnalytics_span = document.querySelectorAll(".advantage__analytics")[1].querySelector("span");
    const advantage__lastAnalytics_h3 = document.querySelectorAll(".advantage__analytics")[1].querySelector("h3");
    const advantage__lastAnalytics_p = document.querySelectorAll(".advantage__analytics")[1].querySelector("p");
    if (advantage__lastAnalytics_span.getBoundingClientRect().top < position) {
        advantage__lastAnalytics_span.classList.add("show");
        advantage__lastAnalytics_h3.classList.add("show");
        setTimeout(() => {
            advantage__lastAnalytics_p.classList.add("show");
        }, 200)
    }

    const register__title = document.querySelector(".register__title");
    if (register__title.getBoundingClientRect().top < position) {
        register__title.classList.add("show");
    }

    const register__par = document.querySelector(".register__par");
    if (register__par.getBoundingClientRect().top < position) {
        register__par.classList.add("show");
    }

    const register__link = document.querySelector(".register__link");
    if (register__link.getBoundingClientRect().top < position) {
        register__link.classList.add("show");
    }

    const news__title = document.querySelector(".news__title");
    if (news__title.getBoundingClientRect().top < position) {
        news__title.classList.add("show");
    }
})