document.addEventListener('DOMContentLoaded', function () {

  var hamburgerIcon = $('#nav-icon1');
  var dropdownMenu = $('.dropdown_menu_mobile');

  // Hamburger menu Jquery code
  hamburgerIcon.click(function () {
    $(this).toggleClass('open');

    //call dropdown menu function
    showHideMenu();
  });

  // Dropdown menu mobile
  dropdownMenu.addClass('hidden');

  function showHideMenu() {
    if (hamburgerIcon.hasClass('open')) {
      dropdownMenu.slideToggle('fast');
    } else {
      dropdownMenu.slideToggle('fast');
    }
  };

  // Mobile slide toggle for tech and services 
  // var techSlider = $('.tech_panel_slider');
  // var servicesSlider = $('.services_panel_slider');
  // var techContent = $('.tech_content');
  // var servicesContent = $('.services_content');

  // techSlider.click(function () {
  //   techContent.slideToggle();
  // });

  // servicesSlider.click(function () {
  //   servicesContent.slideToggle();
  // });

  // var techSlider = document.querySelector('.tech_panel_slider');
  // var servicesSlider = document.querySelector('.services_panel_slider');
  // var techContent = document.querySelector('.tech_content');
  // var servicesContent = document.querySelector('.services_content');

  // techSlider.addEventListener('click', function() {
  //   if (techContent.style.display == 'none') {
  //     techContent.style.display = 'block';
  //   } else {
  //     techContent.style.display = 'none';
  //   }
  // });

  // servicesSlider.addEventListener('click', function() {
  //   if (servicesContent.style.display == 'none') {
  //     servicesContent.style.display = 'block';
  //   } else {
  //     servicesContent.style.display = 'none';
  //   }
  // });

  // Mobile slide toggle for contact form //
  // var contactForm = $('.contact_form_container');
  // var contactFormDropdown = $('.contact_form_dropdown');

  // contactFormDropdown.click(function () {
  //   contactForm.slideToggle();
  // });

  // email adress click = new message window //
  var email = $('.adress_container').find('h3:eq(1)');

  email.click(function () {
    var email = 'dominik.s.wojtowicz@gmail.com';
    var subject = 'Kontakt ze strony / Contact from website';
    document.location = "mailto:" + email + "?subject=" + subject;
  });

  // Form Validation ------------------------------------ //
  // Form is not valid on page load //
  var isFormValid = false;

  // input variables //
  var name = $('#name');
  var email = $('#email');
  var subject = $('#subject');
  var message = $('#message');
  var subtmitBtnPl = $('#submit_pl');
  var subtmitBtnEn = $('#submit_eng');
  var resetBtnPl = $('#reset_pl');
  var resetBtnEn = $('#reset_eng');

  var form = $('.contact_form');

  var isNameValid = function () {
    var nameVal = name.val();
    return nameVal.length > 0 && nameVal.length <= 100;
  };

  var isEmailValid = function () {
    var emailVal = email.val();
    return emailVal.indexOf('@') > -1 && emailVal.length <= 100;
  };

  var isSubjectValid = function () {
    var subjectVal = subject.val();
    return subjectVal.length > 0 && subjectVal.length <= 100;
  };

  var isMessageValid = function () {
    var messageVal = message.val();
    return messageVal.length > 0 && messageVal.length <= 500;
  };

  function formValidation() {
    var isFormValid = isNameValid() && isEmailValid() && isSubjectValid() && isMessageValid();

    if (isFormValid === false) {
      alert('Błąd. Proszę sprawdzić czy pola zostały poprawnie wypełnione.');
    } else {
      $.ajax({
        url: "https://formspree.io/dominik.s.wojtowicz@gmail.com",
        method: "POST",
        data: form.serialize(),
        dataType: "json"
      });
      alert('Wiadomość została wysłana');
      form[0].reset();
    }
  };

  form.submit(function (event) {
    event.preventDefault();
    formValidation();
  });

});
