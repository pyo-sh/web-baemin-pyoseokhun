const $teleInput = document.querySelector(".custom_input__main");

$teleInput.addEventListener("input", (e) => {
  const text = e.target.value || "";

  const data = text
    .substring(0, 13)
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
    .replace(/(\-{1,2})$/g, "");

  e.target.value = data;
});
