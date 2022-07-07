export default function handleInputEvents($element, options) {
  const { submitController, fitValue, validate } = {
    submitController: {},
    fitValue: (value) => value,
    validate: (value) => !!value,
    ...options,
  };

  function handleValidation({ showError, onlyValidError }) {
    const isValid = validate($element.value);
    if (onlyValidError && isValid) $element.topParent.toggleError(true);
    if (showError) $element.topParent.toggleError(isValid);
    $element.topParent.toggleCheck(!isValid);
    submitController.isValid = isValid;
  }

  // watch X button click
  Object.defineProperty($element, "clear", {
    set(newVal) {
      if (newVal) handleValidation({ showError: true });
    },
  });

  // input validation check & fitValue
  $element.addEventListener("input", () => {
    $element.value = fitValue($element.value);
    handleValidation({ onlyValidError: true });
  });

  // focus out -> errorMessage
  $element.addEventListener("blur", () => {
    handleValidation({ showError: true });
  });
}
