"use strict";
var theme = {
  init: function () {
    theme.mobmenu();
    theme.headerSticky();
    theme.tabbingbtn();
    theme.textslide();
    theme.accordion();
    theme.swiperslider();
    theme.plantoogle();
    theme.plantabbing();
    theme.planaccordionToggle();
    theme.promobarPopup();
  },

  mobmenu: function () {
    // Hamburger toggle
    $(".hamburger").on("click", function () {
      $(".menu-bar, .hamburger").addClass("active");

      // Add back button if not already added
      $(".menu-bar > ul > li.dropdown").each(function () {
        var $dropdownMenu = $(this).find("ul").first();
        if ($dropdownMenu.find("li.back").length === 0) {
          $dropdownMenu.prepend(`
            <li class="back">
              <a href="#"><i class="bi bi-arrow-left"></i> Back</a>
            </li>
          `);
        }
      });
    });

    // Close menu
    $(".menu-bar").on("click", ".close-menu-btn", function () {
      $(".menu-bar, .hamburger").removeClass("active");
    });

    // Open dropdown
    $(".menu-bar > ul > li.dropdown > a").on("click", function (e) {
      e.preventDefault();
      var $li = $(this).closest("li.dropdown");
      $li.addClass("dropdown-active");
      $li.find("ul").first().addClass("active");
    });

    // Back button inside dropdown
    $(".menu-bar").on("click", "li.back a", function (e) {
      e.preventDefault();
      var $dropdown = $(this).closest("li.dropdown");
      $dropdown.removeClass("dropdown-active");
      $dropdown.find("ul").first().removeClass("active");
    });
  },

  headerSticky: function () {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 150) {
        $("#header").addClass("sticky");
      } else {
        $("#header").removeClass("sticky");
      }
    });
  },

  tabbingbtn: function () {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabPanes.forEach((pane) => pane.classList.remove("active"));
        button.classList.add("active");

        const targetTab = button.getAttribute("data-tab");
        const targetPane = document.getElementById(targetTab);
        if (targetPane) {
          targetPane.classList.add("active");
        }
      });
    });
  },

  textslide: function () {
    const $textContent = document.querySelector(".text-slides .text-content");

    if (!$textContent) return;

    const data = $textContent.getAttribute("data-text");
    const textArray = data ? data.split(",") : [];
    if (textArray.length === 0) return;

    let currentIndex = 0;
    $textContent.style.top = "0";
    $textContent.style.opacity = 1;
    $textContent.textContent = textArray[currentIndex];

    function updateText() {
      $textContent.style.transition = "all 0.5s ease";
      $textContent.style.top = "-100%";
      $textContent.style.opacity = "0";

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % textArray.length;
        $textContent.textContent = textArray[currentIndex];

        $textContent.style.transition = "none";
        $textContent.style.top = "100%";
        $textContent.style.opacity = "0";

        setTimeout(() => {
          $textContent.style.transition = "all 0.5s ease";
          $textContent.style.top = "0";
          $textContent.style.opacity = "1";
        }, 50);
      }, 500);
    }

    setTimeout(() => {
      setInterval(updateText, 3000);
    }, 100);
  },
  /**
   * Accordion
   */
  accordion: function () {
    $(".accordion > li:first").addClass("active").find("p").slideDown();
    $(".accordion li").on("click", function () {
      var dropDown = $(this).find("p");

      $(this).closest(".accordion").find("p").not(dropDown).slideUp();

      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).closest(".accordion").find("li.active").removeClass("active");
        $(this).addClass("active");
      }

      dropDown.stop(false, true).slideToggle();
    });
  },

  /**
   * Swiper Slider
   */
  swiperslider: function () {
    new Swiper(".swiper-testimonial", {
      speed: 1000,
      loop: false,
      navigation: {
        nextEl: ".swiper-testimonilas-right",
        prevEl: ".swiper-testimonilas-left",
      },
      slidesPerView: "auto",
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        575: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
      },
    });

    new Swiper(".swiper-homepage-product", {
      speed: 1000,
      loop: false,
      navigation: {
        nextEl: ".swiper-product-right",
        prevEl: ".swiper-product-left",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      slidesPerView: "auto",
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      },
    });
    new Swiper(".swiper-homepage-product.two", {
      speed: 1000,
      loop: false,
      navigation: {
        nextEl: ".swiper-product-right",
        prevEl: ".swiper-product-left",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      slidesPerView: "auto",
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
    });
  },

  plantoogle: function () {
    const toggleButtons = document.querySelectorAll(".toggle-features");
    const extraSections = document.querySelectorAll(".extra-features");

    const arrowUp = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" viewBox="0 0 24 24" style="fill: #0070d1; color: #0070d1;"><path fill="currentColor" d="M6.043 13.543a1 1 0 0 0 1.414 1.414L12 10.414l4.543 4.543a1 1 0 0 0 1.414-1.414l-5.25-5.25a1 1 0 0 0-1.414 0l-5.25 5.25Z"></path></svg>`;

    const arrowDown = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" viewBox="0 0 24 24" style="fill: #0070d1; color: #0070d1;"><path fill="currentColor" d="M17.957 10.457a1 1 0 0 0-1.414-1.414L12 13.586 7.457 9.043a1 1 0 0 0-1.414 1.414l5.25 5.25a1 1 0 0 0 1.414 0l5.25-5.25Z"></path></svg>`;

    toggleButtons.forEach(function (toggleBtn) {
      toggleBtn.addEventListener("click", function (e) {
        e.preventDefault();

        // Check first extra block for toggle state
        const isHidden =
          extraSections[0].style.display === "none" ||
          extraSections[0].style.display === "";

        extraSections.forEach(function (section) {
          section.style.display = isHidden ? "block" : "none";
        });

        toggleButtons.forEach(function (btn) {
          btn.innerHTML = isHidden
            ? ` View Less Features<span class="arrow">${arrowUp}</span>`
            : ` View all features<span class="arrow">${arrowDown}</span>`;
        });

        // Optional: Scroll to top of plans section
        if (!isHidden) {
          const firstPlan = document.querySelector(".plan-style-one");
          if (firstPlan) {
            setTimeout(() => {
              firstPlan.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
          }
        }
      });
    });
  },
  plantabbing: function () {
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const tabName = button.getAttribute("data-tab");
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const allPanes = document.querySelectorAll(".tab-pane");
        allPanes.forEach((pane) => pane.classList.remove("active"));

        const leftPane = document.getElementById(tabName);
        const rightPane = document.getElementById(`${tabName}-b`);

        if (leftPane) leftPane.classList.add("active");
        if (rightPane) rightPane.classList.add("active");
      });
    });
  },

  planaccordionToggle: function () {
    const buttons = document.querySelectorAll(".accordion-button");

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-bs-target");
        const target = document.querySelector(targetId);
        const isOpen = target.classList.contains("show");

        // Close all other panels
        document.querySelectorAll(".accordion-collapse").forEach((item) => {
          const btn = document.querySelector(
            `.accordion-button[data-bs-target="#${item.id}"]`
          );
          if (item !== target) {
            item.style.maxHeight = item.scrollHeight + "px";
            item.offsetHeight; // force repaint
            item.style.maxHeight = "0px";
            item.classList.remove("show");
            if (btn) btn.classList.add("collapsed");
          }
        });

        if (!isOpen) {
          target.classList.add("show");
          target.style.maxHeight = target.scrollHeight + "px";
          this.classList.remove("collapsed");
        } else {
          target.style.maxHeight = target.scrollHeight + "px";
          target.offsetHeight;
          target.style.maxHeight = "0px";
          this.classList.add("collapsed");
          target.addEventListener("transitionend", function handler() {
            target.classList.remove("show");
            target.removeEventListener("transitionend", handler);
          });
        }
      });
    });

    // On page load: open default shown item
    const defaultOpen = document.querySelector(".accordion-collapse.show");
    if (defaultOpen) {
      defaultOpen.style.maxHeight = defaultOpen.scrollHeight + "px";
      const btn = document.querySelector(
        `.accordion-button[data-bs-target="#${defaultOpen.id}"]`
      );
      if (btn) btn.classList.remove("collapsed");
    }
  },

  promobarPopup: function () {
    if (theme.getCookie("promoBarClosed") === "true") {
      document.querySelector(".promo-bar").classList.add("closed");
    }

    var closeBtn = document.querySelector(".promo-bar .close-btn-bar");
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        document.querySelector(".promo-bar").classList.add("closed");
        theme.setCookie("promoBarClosed", "true", 5);
      });
    }
  },

  getCookie: function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  setCookie: function (name, value, minutes) {
    var expires = "";
    if (minutes) {
      var date = new Date();
      date.setTime(date.getTime() + minutes * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
};

// Initialize the theme
document.addEventListener("DOMContentLoaded", function () {
  theme.init();
});
