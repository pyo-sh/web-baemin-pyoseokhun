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

    const pairs = {
      email: $inputID,
      password: $inputPW,
    };

    let canSubmit = true;
    const info = Object.entries(pairs).reduce((result, [key, $input]) => {
      const { value } = $input;
      canSubmit &&= !!value;
      return { ...result, [key]: value };
    }, {});

    if (!canSubmit) return false;

    loginAPI(info);
  });
  $inputID.addEventListener("input", () => {});
})();
