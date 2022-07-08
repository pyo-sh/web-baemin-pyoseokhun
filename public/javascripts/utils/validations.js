export const validatePhone = (value) => {
  const isValid = value?.length === 13;
  return isValid;
};

export const validateEmail = (value) => {
  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const isValid = value.match(regExp);
  return isValid;
};

export const validatePassword = (value) => {
  let included = 0;
  [/[a-z]+/, /[A-Z]+/, /[\d]+/, /[`~!@#$%^&*\(\)-_=+]+/].forEach((reg) => {
    const hasChar = reg.test(value);
    if (hasChar) included++;
  });
  // TODO : 같은 숫자 or 연속된 숫자 검사

  const isValid = value.length >= 10 && included >= 2;
  return isValid;
};

export const validateBirthday = (value) => {
  // TODO : 윤년 같은 날짜 검사
  return value.length === 10;
};
