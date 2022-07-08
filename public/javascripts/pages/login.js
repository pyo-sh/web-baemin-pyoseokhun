import { loginAPI } from "../apis/login.js";

(function initLogin() {
  const $form = document.querySelector("#login_form");
  const $inputID = document.querySelector("#login_id");
  const $inputPW = document.querySelector("#login_pw");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    const pairs = {
      email: $inputID,
      password: $inputPW,
    };

    let canSubmit = true;
    const info = Object.entries(pairs).reduce((result, [key, { topParent, value }]) => {
      const isValid = !!value;
      canSubmit &= isValid;
      topParent.toggleError(isValid);
      return { ...result, [key]: value };
    }, {});

    if (!canSubmit) return false;

    loginAPI(info);
  });
  $inputID.addEventListener("input", () => {});
})();
