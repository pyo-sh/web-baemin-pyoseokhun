(function initTerms() {
  const $termList = document.querySelector(".terms_list");
  const $boxes = [...document.querySelectorAll(".terms_list__input")];
  const $controller = $boxes.shift();
  const $button = document.querySelector("#term_button");

  let canSubmit = false;
  $termList.addEventListener("change", (e) => {
    const { id, checked } = e.target;

    if (id === "term_all") {
      $boxes.forEach(($box) => {
        $box.checked = checked;
      });
    }

    const [isAllChecked, isRequiredChecked] = $boxes.reduce(
      ([isAllChecked, isRequiredChecked], { checked, required }) => [isAllChecked && checked, isRequiredChecked && (checked || !required)],
      [true, true]
    );
    $controller.checked = isAllChecked;
    canSubmit = isRequiredChecked;
    $button.disabled = !canSubmit;
    $button.classList.toggle("common_button_inactive", !canSubmit);
  });

  $button.addEventListener("click", () => {
    if (!canSubmit) return;

    // TODO : fetch and get Data from server
    window.location.href = `${window.location.origin}/signup/phone`;
  });
})();
