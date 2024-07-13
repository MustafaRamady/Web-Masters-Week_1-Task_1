let btn = document.querySelector(".services button");

window.onscroll = () => {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
let count1 = document.querySelector(".count1");
let count2 = document.querySelector(".count2");
let count3 = document.querySelector(".count3");
let count_1 = () => {
  count1.innerHTML++;
  if (count1.innerHTML == 400) {
    clearInterval(counter1);
  }
};
let count_2 = () => {
  count2.innerHTML++;
  if (count2.innerHTML == 600) {
    clearInterval(counter2);
  }
};
let count_3 = () => {
  count3.innerHTML++;
  if (count1.innerHTML == 100) {
    clearInterval(counter3);
  }
};
let counter1 = setInterval(count_1, 5);
let counter2 = setInterval(count_2, 5);
let counter3 = setInterval(count_3, 5);
