export function SignUp(username, email, password,navigate) {
  let userInfo = {
    username: username,
    email: email,
    password: password
  }
  sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
  const registeredUser= sessionStorage.getItem('userInfo');
  console.log(registeredUser);
  navigate('/login');
}

export const Signin = (username, password, navigate) => {
  const registeredUser = JSON.parse(sessionStorage.getItem('userInfo'));

  if (registeredUser.username === username && registeredUser.password === password) {
    console.log('Success: Signed in as a registered user');
    navigate('/home');
  } else {
    console.log('Failure: Invalid credentials');
  }
}
