import axios from "axios";

const setUser = (payload) => ({ type: "SET_USER", payload });

export const logUserOut = () => ({ type: "LOG_OUT" });

// Methods
export const logOut = () => (dispatch) => {
  axios.post("auth/logout")
  .then(res=>{
    // console.log(res);
    dispatch(logUserOut());
  })
  .catch(e => console.log(e))

}
export const fetchUserGoogle = (userInfo) => (dispatch) => {
  axios
    .post("auth/google", {
      token: userInfo,
    })
    .then((res) => {
      // console.log(res);
      dispatch(setUser(res.data));
    })
    .catch((err) => console.log(err));
};

export const fetchUserFacebook = (userInfo) => (dispatch) => {
  axios
    .post("auth/facebook", {
      token: userInfo,
    })
    .then((res) => {
      // console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data));
    })
    .catch((err) => console.log(err));
};

export const autoLogin = () => (dispatch) => {
  axios
    .post("auth/check", {
      token: localStorage.getItem("token"),
    })
    .then((res) => {
      // console.log("Hello");
      // console.log(res);
      dispatch(setUser(res.data));
    })
    .catch((err) => console.log(err));
};
