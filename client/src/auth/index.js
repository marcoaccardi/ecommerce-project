import { API } from "../config";

const signup = (user) => {
  console.log(user);
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

const signin = (user) => {
  console.log(user);
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jsonWebToken", JSON.stringify(data));
  }
  next();
};

const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jsonWebToken");
    next();
    return fetch(`${API}/signout`, {
      method: "GET",
    })
      .then((response) => {
        console.log("signout", response);
      })
      .catch((err) => console.log(err));
  }
};

export { signup };
export { signin };
export { authenticate };
export { signout };
