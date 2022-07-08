import handleInputEvents from "../utils/handleInputEvents.js";
import { loginAPI } from "../apis/login.js";

(function initLogin() {
  const $form = document.querySelector("#login_form");
  const $inputID = document.querySelector("#login_id");
  const $inputPW = document.querySelector("#login_pw");

  handleInputEvents($inputID);
  handleInputEvents($inputPW);

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    const canSubmit = [$inputID, $inputPW].every((e) => !!e);
    if (!canSubmit) return false;

    const info = {
      email: $inputID.value,
      password: $inputPW.value,
    };
    loginAPI(info);
  });
  $inputID.addEventListener("input", () => {});
})();
