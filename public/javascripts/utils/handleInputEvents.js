export default function handleInputEvents($element, options) {
  const { setValid, formatValue, validate } = {
    setValid: () => {},
    formatValue: (value) => value,
    validate: (value) => !!value,
    ...options,
  };

  function handleValidation({ showError, onlyValidError }) {
    const isValid = validate($element.value);
    if (onlyValidError && isValid) $element.topParent.toggleError(true);
    if (showError) $element.topParent.toggleError(isValid);
    $element.topParent.toggleCheck(isValid);
    setValid(isValid);
  }

  // watch X button click
  Object.defineProperty($element, "clear", {
    set(newVal) {
      if (newVal) handleValidation({ showError: true });
    },
  });

  // input validation check & formatValue
  $element.addEventListener("input", () => {
    $element.value = formatValue($element.value);
    handleValidation({ onlyValidError: true });
  });

  // focus out -> errorMessage
  $element.addEventListener("blur", () => {
    handleValidation({ showError: true });
  });
}
