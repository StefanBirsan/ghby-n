//window.location = "http://pornhub.com";
function eyeToggle() {
  window.location = "http://pornhub.com";
  return;
  let passwordField = document.getElementById('passwordField');

  if (passwordField.type === 'text') {
    passwordField.type = 'password';
  } else {
    passwordField.type = 'text';
  }
}