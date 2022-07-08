export const loginAPI = async (body) => {
  try {
    const response = await fetch("/user/login", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify(body),
    });

    if (response.status === 200) window.location.href = response.url;
    else throw Error("Login Failed!");
  } catch (e) {
    // TODO: Error Page or Error Message
    alert(e.message);
  }
};
