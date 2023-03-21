import "./less/index.less";

//Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın0
//document.querySelector("h1").addEventListener("click",function(e){
//alert("Bana tıkladın!")
//});

document.querySelectorAll("nav a").forEach((item) => {
  item.addEventListener("mouseover", (item) => {
    item.target.style.backgroundColor = "orange";
  });
});

document.querySelectorAll("nav a").forEach((item) => {
  item.addEventListener("mouseout", (item) => {
    item.target.style.color = "green";
  });
});

const imgOtobus = document.querySelector("img");
imgOtobus.forEach((item) => {
  item.addEventListener("click", (item) => {
    item.target.setAttribute("style", "filter:grayscale(100%)");
  });
});

document.querySelectorAll("img");
imgOtobus.forEach((item) => {
  item.addEventListener("dblclick", (item) => {
    item.setAttribute("style", "filter:grayscale(0%)");
  });
});

const acılıs = document.getElementById("login");
window.addEventListener("load", (item) => {
  setTimeout(() => {
    acilis.style.display = "none";
  }, 2000);
});

const imgwheel = document.querySelectorAll("footer");
imgwheel.forEach((footer) => {
  footer.addEventListener("wheel", (event) => {
    footer.style.fontSize = "45";
  });
});
