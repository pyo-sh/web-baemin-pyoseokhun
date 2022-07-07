(function initLogin() {
  const $form = document.querySelector("#login_form");
  const $inputID = document.querySelector("#login_id");
  const $inputPW = document.querySelector("#login_pw");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    const pairs = {
      id: $inputID,
      pw: $inputPW,
    };

    let canSubmit = true;
    const info = Object.entries(pairs).reduce((result, [key, { topParent, value }]) => {
      const isValid = !!value;
      canSubmit &= isValid;
      topParent.toggleError(isValid);
      return { ...result, [key]: value };
    }, {});

    if (!canSubmit) return false;

    // TODO: Submit login form
  });
  $inputID.addEventListener("input", () => {});
})();
