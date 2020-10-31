import axios from "axios";

const setUser = (payload) => ({ type: "SET_USER", payload });

export const logUserOut = () => ({ type: "LOG_OUT" });

// Methods

export const fetchUserGoogle = (userInfo) => (dispatch) => {
  axios
    .post("http://176.107.131.27:5000/auth/google", {
      token: userInfo,
    })
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data));
    })
    .catch((err) => console.log(err));
};

export const fetchUserFacebook = (userInfo) => (dispatch) => {
  fetch(`http://localhost:4000/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      // data sent back will in the format of
      // {
      //     user: {},
      //.    token: "aaaaa.bbbbb.bbbbb"
      // }
      localStorage.setItem("token", data.token);
      dispatch(setUser(data.user));
    });
};

export const autoLogin = () => (dispatch) => {
  axios
    .post("http://mateuszdobosz.site/auth/check", {
      token: localStorage.getItem("token"),
    })
    .then((res) => {
      console.log("Hello");
      console.log(res);
      dispatch(setUser(res.data));
    })
    .catch((err) => console.log(err));
};
