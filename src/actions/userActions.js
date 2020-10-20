import axios from "axios";

const setUser = (payload) => ({ type: "SET_USER", payload });

export const logUserOut = () => ({ type: "LOG_OUT" });

// Methods

export const fetchUserGoogle = (userInfo) => (dispatch) => {
  axios
    .post("http://176.107.131.27:5000/auth/google", {
      token: userInfo.tokenId,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.user));
    });
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
  fetch(`http://localhost:4000/auto_login`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
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
