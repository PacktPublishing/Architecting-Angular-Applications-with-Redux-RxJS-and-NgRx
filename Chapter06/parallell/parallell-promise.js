

// we collect username and password from a form
function login(username, password) {
  return new Promise(resolve => {
    resolve('logged in');
  })
}

function getUsersData(user) {
  return Promise.all([
    getOrders(user),
    getMessages(user),
    getFriends(user)
  ])
}

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
  .then(getUsersData)
