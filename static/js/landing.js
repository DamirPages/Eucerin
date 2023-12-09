// import $ from 'jquery';
import header from 'components/header-landing/header.js'
import NiceSelect from './plugins/nice-select';
import { initHandlersModal} from '../../components/modals/modals';

const selects = document.querySelectorAll('.select');
selects.forEach(select => {
    if(select.hasAttribute('id')){
      if(!window.niceSelect) window.niceSelect = {};
      const key = select.getAttribute('id');
      window.niceSelect[key] = new NiceSelect(select);
    }else{
      new NiceSelect(select);
    }
});

const telInputs = document.querySelectorAll('.tel');
telInputs.forEach(input => {
    let keyCode;

    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
        i = new_value.indexOf("_");

        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i);
        }

        let reg = matrix.substr(0, this.value.length).replace(/_+/g, function (a) {
            return "\\d{1," + a.length + "}";
        }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
});

document.querySelectorAll("a[href^='#'").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var href = this.getAttribute("href").substring(1);
      var scrollTarget = document.getElementById(href);
      if (!scrollTarget) return;
      var topOffset = document.querySelector(".header").offsetHeight; // const topOffset = 0; // если не нужен отступ сверху
  
      var elementPosition = scrollTarget.getBoundingClientRect().top;
      var offsetPosition = elementPosition - topOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });

  const textProducts = document.querySelectorAll('.products__text');
  textProducts.forEach(item => {
    if(item.offsetHeight > 176){
        item.classList.add('hide-text');
    }
  });
  const moreTextButton = document.querySelectorAll('.products__more-text');
  moreTextButton.forEach(item => {
    item.addEventListener('click', () => {
        item.previousElementSibling.classList.remove('hide-text');
    });
  });
initHandlersModal();
