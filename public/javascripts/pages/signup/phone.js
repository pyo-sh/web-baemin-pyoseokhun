(function initPhone() {
  const $phoneInput = document.querySelector("#phone_input");
  const $authInput = document.querySelector("#phone_auth__input");
  const $authSection = document.querySelector("#phone_certificate__section");
  const $startBtn = document.querySelector("#phone_start");
  const $againBtn = document.querySelector("#phone_again");

  // TODO : button 활성화 부분 function 화 시키기
  // input phone number
  let canAuth = false;
  $phoneInput.addEventListener("input", (e) => {
    const { value, topParent } = e.target;

    const data = (value || "")
      .substring(0, 13)
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");
    e.target.value = data;

    canAuth = data?.length === 13;
    topParent.toggleCheck(canAuth);
    $startBtn.classList.toggle("common_button__inactive", !canAuth);
    $startBtn.disabled = !canAuth;
  });

  // control erase data
  Object.defineProperty($phoneInput, "clear", {
    set(newValue) {
      if (newValue) {
        canAuth = false;
        $phoneInput.topParent.toggleCheck(canAuth);
        $startBtn.classList.toggle("common_button__inactive", !canAuth);
        $startBtn.disabled = !canAuth;
      }
    },
  });

  // send certificate number
  let certNum = null;
  let certSchedule = null;
  const sendCert = () => {
    clearTimeout(certSchedule);
    certNum = null;
    certSchedule = setTimeout(() => {
      certNum = generateCertification();
      $authInput.value = certNum;
      $authInput.topParent.toggleCheck(true);
    }, 2000);
  };
  $againBtn.addEventListener("click", () => {
    sendCert();
    $authInput.value = "";
    $authInput.topParent.toggleCheck(false);
  });

  // click button & send auth
  $startBtn.addEventListener("click", () => {
    $startBtn.classList.add("disappear");
    $authSection.classList.remove("hidden");
    sendCert();
  });
})();

function generateCertification() {
  return Math.floor(Math.random() * 9999);
}
