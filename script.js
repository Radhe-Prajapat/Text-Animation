function breakTheText() {
  var h1 = document.querySelector("h1");

  var h1Text = h1.textContent;

  var splitText = h1Text.split("");

  var clutter = "";

  splitText.forEach(function (el) {
    clutter = clutter + `<span>${el}</span>`;
  });

  h1.innerHTML = clutter;
}

breakTheText();

var tl = gsap.timeline();

tl.from("img", {
  opacity: 0,
  duration: 1.1,
  y: 50,
});
tl.from("h1 span", {
  y: 70,
  duration: 0.5,
  stagger: 0.1,
  opacity: 0,
});

tl.pause();

function chageName() {
  var btn = document.querySelector("button");

  var recap = 0;

  btn.addEventListener("click", function () {
    if (recap == 0) {
      btn.innerHTML = "Following";
      btn.style.backgroundColor = "rgba(78, 183, 253, 1)";
      btn.style.color = "#fff";
      tl.play();
      recap = 1;
    } else {
      btn.innerHTML = "Follow";
      btn.style.backgroundColor = "rgb(235, 240, 245)";
      btn.style.color = "#111";
      tl.reverse();
      recap = 0;
    }
  });
}

chageName();
