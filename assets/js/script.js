'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items推荐信点击逻辑
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}

// add click event to modal close button推荐信关闭逻辑
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// 获取所有带有 data-nav-link 属性的元素，包括导航链接和项目项
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// 添加事件监听器到所有导航链接和项目项
navigationLinks.forEach(link => {
  link.addEventListener("click", function() {
    const targetPage = this.dataset.navLink;

    // 遍历所有页面并根据 targetPage 进行匹配
    pages.forEach(page => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
        link.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        // 如果 link 也是导航链接的一部分，移除其 active 类
        const correspondingLink = document.querySelector(`[data-nav-link="${page.dataset.page}"]`);
        if (correspondingLink) {
          // 判断 class 是否为 navbar-link active（之前的问题在于跳转后会取消其他navlink的active，这对于导航栏是合适的，但对于项目栏会导致点击portfolio后所有的项目都被取消active）
          if (correspondingLink.classList.contains("navbar-link") && correspondingLink.classList.contains("active")) {
            correspondingLink.classList.remove("active");
          }
        }
      }
    });
  });
});

