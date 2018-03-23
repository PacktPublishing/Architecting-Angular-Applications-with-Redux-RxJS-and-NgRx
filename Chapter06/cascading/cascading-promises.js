// we collect username and password from a form
const login = (username, password) => {
  return fetch("/login", {
    method: "POST",
    body: { username, password }
  })
    .then(r => r.json())
    .then(token => {
      localStorage.setItem("auth", token);
    });
};

const getUser = () => {
  return fetch("/users", {
    headers: {
      Authorization: "Bearer " + localStorage.getToken("auth")
    }
  }).then(r => r.json());
};


const getOrders = user => {
  return fetch(`/orders/user/${user.id}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getToken("auth")
    }
  }).then(r => r.json());
};

login()
  .then(getUser)
  .then(getOrders);
