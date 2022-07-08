import handleInputEvents from "../../utils/handleInputEvents.js";
import { validateEmail, validatePassword, validateBirthday } from "../../utils/validations.js";
import { formatBirthday } from "../../utils/formations.js";

(function initOthers() {
  const $emailInput = document.querySelector("#others_email");
  const $emailBtn = document.querySelector("#others_email__check");
  const $otherSection = document.querySelector("#others_needed");
  const $nicknameInput = document.querySelector("#others_nickname");
  const $passwordInput = document.querySelector("#others_password");
  const $birthdayInput = document.querySelector("#others_birthday");

  /* emailInput events */
  let isValidEmail = false;
  const setIsValidEmail = (isValid) => {
    isValidEmail = isValid;
    $emailBtn.classList.toggle("common_button__inactive", !isValid);
    $emailBtn.disabled = !isValid;
  };
  handleInputEvents($emailInput, {
    setValid: setIsValidEmail,
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
  let isValidNickname = false;
  const setIsValidNickname = (isValid) => {
    isValidNickname = isValid;
  };
  handleInputEvents($nicknameInput, { setValid: setIsValidNickname });

  /* password events */
  let isValidPassword = false;
  const setIsValidPassword = (isValid) => {
    isValidPassword = isValid;
  };
  handleInputEvents($passwordInput, {
    setValid: setIsValidPassword,
    validate: validatePassword,
  });

  /* birthday events */
  let isValidBirthday = false;
  const setIsValidBirthday = (isValid) => {
    isValidBirthday = isValid;
  };
  handleInputEvents($birthdayInput, {
    setValid: setIsValidBirthday,
    formatValue: formatBirthday,
    validate: validateBirthday,
  });
})();
