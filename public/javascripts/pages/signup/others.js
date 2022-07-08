import handleInputEvents from "../../utils/handleInputEvents.js";

(function initOthers() {
  const $emailInput = document.querySelector("#others_email");
  const $emailBtn = document.querySelector("#others_email__check");
  const $otherSection = document.querySelector("#others_needed");
  const $nicknameInput = document.querySelector("#others_nickname");
  const $passwordInput = document.querySelector("#others_password");
  const $birthdayInput = document.querySelector("#others_birthday");

  /* emailInput events */
  let isValidEmail = false;
  let emailController = {
    get() {
      return isValidEmail;
    },
    set ["isValid"](newVal) {
      isValidEmail = newVal;
      $emailBtn.classList.toggle("common_button__inactive", !newVal);
      $emailBtn.disabled = !newVal;
    },
  };
  const validateEmail = (value) => {
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const isValid = value.match(regExp);
    return isValid;
  };
  handleInputEvents($emailInput, {
    submitController: emailController,
    validate: validateEmail,
  });

  /* save Email */
  let email = "";
  $emailBtn.addEventListener("click", () => {
    if (!isValidEmail) return;
    email = $emailInput.value;
    $otherSection.classList.toggle("hidden", false);
  });

  /* nickname events */
  let nicknameController = {};
  handleInputEvents($nicknameInput, { submitController: nicknameController });

  /* password events */
  let passwordController = {};
  const validatePassword = (value) => {
    let included = 0;
    [/[a-z]+/, /[A-Z]+/, /[\d]+/, /[`~!@#$%^&*\(\)-_=+]+/].forEach((reg) => {
      const hasChar = reg.test(value);
      if (hasChar) included++;
    });
    // TODO : 같은 숫자 or 연속된 숫자 검사

    const isValid = value.length >= 10 && included >= 2;
    return isValid;
  };
  handleInputEvents($passwordInput, {
    submitController: passwordController,
    validate: validatePassword,
  });

  /* birthday events */
  let birthdayController = {};
  const fitBirthday = (value) => {
    return (value || "")
      .substring(0, 10)
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, "$1.$2.$3")
      .replace(/(\.{1,2})$/g, "");
  };
  const validateBirthday = (value) => {
    return value.length === 10;
  };
  handleInputEvents($birthdayInput, {
    submitController: birthdayController,
    fitValue: fitBirthday,
    validate: validateBirthday,
  });
})();
