fetchUserById(1, function(err, user) {
  if (err) {
    console.error('Could not retrieve user');
  } else {
    console.log(user);
  }
});
