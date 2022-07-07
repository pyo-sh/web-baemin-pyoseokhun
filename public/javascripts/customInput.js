(function initAll() {
  const $inputs = document.querySelectorAll(".custom_input__wrapper");
  [...$inputs].forEach(defineUtils);
})();

function defineUtils($element) {
  const $errorMessage = $element.querySelector(".custom_input__error");
  const $checkIcon = $element.querySelector(".custom_input__check");
  const $input = $element.querySelector(".custom_input__main");
  const $eraseBtn = $element.querySelector(".custom_input__button");

  /* remember top element of custom input */
  $input.topParent = $element;

  /* able to toggle error */
  $element.toggleError = handleToggleError($errorMessage);

  /* able to toggle check */
  $element.toggleCheck = handleToggleCheck($checkIcon);

  /* able to erase button */
  $element.eraseValue = handleEraseValue($input, $eraseBtn);
}

function handleToggleError($errorSpan) {
  if (!$errorSpan) return () => {};
  return (isVisibility) => $errorSpan.classList.toggle("hidden", isVisibility);
}

function handleToggleCheck($checkIcon) {
  if (!$checkIcon) return () => {};
  return (isVisibility) => $checkIcon.classList.toggle("custom_input__checked", isVisibility);
}

function handleEraseValue($input, $eraseBtn) {
  if (!$input || !$eraseBtn) return;

  $input.addEventListener("input", () => {
    $eraseBtn.classList.toggle("hidden", !$input.value);
  });

  const eraseValue = () => {
    $input.value = "";
    $eraseBtn.classList.toggle("hidden", !$input.value);
  };
  $eraseBtn.addEventListener("click", eraseValue);
  return eraseValue;
}
