
const userMap = new Map();

userMap.set("1", { 
  username: "test1",
  firstname: "John",
  lastname: "Doe"
});
userMap.set("2", { 
  username: "test2",
  firstname: "Charles",
  lastname: "Doe"
});

const assignUser = (req, res, next) => {
  const token = req.header("Authorization");
 
  // Look up the user based on the token
  const user = userMap.get(token);
  
  // assign the user object to the request object
  req.user = user;

  // call next middleware in the stack
  next();
};

module.exports = assignUser;
