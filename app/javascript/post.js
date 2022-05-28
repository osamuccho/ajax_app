function post(){

  const submit = document.getElementById("submit_btn");
  submit.addEventListener("click", (e) => {
    const formDate = new FormDate(document.getElementById("new_article"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST","/articles", true);
    XHR.responseType = "json";
    XHR.send(formDate);
    console.log(document.getElementById("new_article"));
    e.preventDefault();
  });
};

window.addEventListener('load',post);