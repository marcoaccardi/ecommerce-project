import { API } from "../config";

const createCategory = (userId, token, category) => {
  console.log(userId);
  return fetch(`${API}/category/create/:${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export { createCategory };
