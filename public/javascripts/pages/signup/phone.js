import handleInputEvents from "../../utils/handleInputEvents.js";

(function initPhone() {
  const $phoneInput = document.querySelector("#phone_input");
  const $authInput = document.querySelector("#phone_auth__input");
  const $authSection = document.querySelector("#phone_certificate__section");
  const $startBtn = document.querySelector("#phone_start");
  const $againBtn = document.querySelector("#phone_again");
  const $nextBtn = document.querySelector("#header_next");

  let canCert = false;
  let certController = {
    get() {
      return canCert;
    },
    set ["isValid"](newVal) {
      canCert = newVal;
      $phoneInput.topParent.toggleCheck(newVal);
      $startBtn.classList.toggle("common_button__inactive", !newVal);
      $startBtn.disabled = !newVal;
    },
  };
  const fitPhone = (value) => {
    return (value || "")
      .substring(0, 13)
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");
  };
  const validatePhone = (value) => {
    const isValid = value?.length === 13;
    console.log(isValid);
    return isValid;
  };
  handleInputEvents($phoneInput, {
    submitController: certController,
    fitValue: fitPhone,
    validate: validatePhone,
  });

  // certificate number
  let canSubmit = false;
  let certNum = null;
  const certificateNumber = () => {
    canSubmit = $authInput.value === certNum;
    $authInput.topParent.toggleCheck(canSubmit);
    $nextBtn.disabled = !canSubmit;
    $nextBtn.classList.toggle("header_next__active", canSubmit);
  };

  // send certification number
  let certSchedule = null;
  const sendCert = () => {
    clearTimeout(certSchedule);
    certNum = null;
    certificateNumber();
    certSchedule = setTimeout(() => {
      $authInput.value = certNum = generateCertification();
      certificateNumber();
    }, 2000);
  };

  // certificate buttons
  $startBtn.addEventListener("click", () => {
    $startBtn.classList.add("disappear");
    $authSection.classList.remove("hidden");
    sendCert();
  });
  $againBtn.addEventListener("click", sendCert);
  $authInput.addEventListener("input", certificateNumber);

  // send next
  $nextBtn.addEventListener("click", () => {
    if (!canSubmit) return;

    // TODO : fetch and get Data from server
    window.location.href = `${window.location.origin}/signup/others`;
  });
})();

function generateCertification() {
  const randomNums = Array.from(new Array(4), () => Math.floor(Math.random() * 9));
  return randomNums.join("");
}
