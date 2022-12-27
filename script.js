const planList = document.querySelector(".plan__list");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalActionNegative = document.querySelector(".modal__action--negative");
const mobileToggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

const addClass = function (element, className) {
  element?.classList.add(className);
};

const removeClass = function (element, className) {
  element?.classList.remove(className);
};

const openBackdropAndModal = function () {
  addClass(backdrop, "show");
  addClass(modal, "show");
};

const closeBackdropAndModal = function () {
  removeClass(backdrop, "show");
  removeClass(modal, "show");
};

planList?.addEventListener("click", function (e) {
  const target = e.target;

  if (target.tagName.toLowerCase() !== "button") return;

  openBackdropAndModal();
});

modalActionNegative?.addEventListener("click", closeBackdropAndModal);

backdrop?.addEventListener("click", function () {
  removeClass(mobileNav, "show");
  closeBackdropAndModal();
});

mobileToggleButton?.addEventListener("click", function () {
  addClass(backdrop, "show");
  addClass(mobileNav, "show");
});
