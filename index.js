function proceed(Clickevent) {
  Clickevent.preventDefault();
  const check = document.getElementById("promiseCheck").checked;
  console.log(check);
  if (check === true) {
    window.location.href = "Quiz.html";
  } else {
    alert("Accept the conditions to proceed");
  }
}
