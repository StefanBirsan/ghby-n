function eyeToggle() {
  let passwordField = document.getElementById('passwordField');

  if (passwordField.type === 'text') {
    passwordField.type = 'password';
  } else {
    passwordField.type = 'text';
  }
}