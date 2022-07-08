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

    fetch("/user/login", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify(info),
    })
      .then((res) => {
        if (res.status === 200) window.location.href = res.url;
      })
      .catch((e) => alert("Login Failed!"));
  });
  $inputID.addEventListener("input", () => {});
})();
