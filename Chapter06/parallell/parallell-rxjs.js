import Rx from 'rxjs/Rx';
// imagine we collected these from a form
let user = 'user';
let password = 'password';

// we collect username and password from a form
login(username, password) {
  // same as before
}

const getUsersData = (user) => {
  return Rx.Observable.forkJoin([
    getOrders(),
    getMessages(),
    getFriends()
  ])
}

const getUser = () => {
  return Rx.Observable.ajax("/users", {
    headers: {
      Authorization: "Bearer " + localStorage.getToken("auth")
    }
  }).map(r => r.response);
};

const getOrders = user => {
  return Rx.Observable.json(`/orders/user/${user.id}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getToken("auth")
    }
  }).map(r => r.response);
};

login(user, password)
  .switchMap(getUser)
  .switchMap(getUsersData)
