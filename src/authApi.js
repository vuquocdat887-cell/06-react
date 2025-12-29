export const fakeLoginApi = (e, p) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      e === "user@gmail.com" && p === "password123"
        ? resolve({
            Logged: "logged",
            user: {  email: e  },
          })
        : reject("tài khoản mật khẩu ko chính xác");
    }, 500);
  });
};
