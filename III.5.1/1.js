function getUsers(names) {
    return Promise.all(names.map(name => {
      return fetch('https://api.github.com/users/' + name)
        .then(res => {
          return res.ok ? res.json() : null;
        });
    }));
}