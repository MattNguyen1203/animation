function start() {
  let counter = document.querySelector(".counter");
  let currentValue = 0;

  function increase() {
    if (currentValue === 100) return;

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counter.textContent = currentValue;

    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(increase, delay);
  }

  increase();
}
start();

gsap.to(".counter", 0.25, {
  delay: 3.5,
  opacity: 0,
});

gsap.to(".bar", 1.5, {
  delay: 3.5,
  height: 0,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

gsap.from(".title", 1.5, {
  delay: 4,
  y: 700,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

gsap.to(".ball", 2, {
  delay: 5,
  x: 800,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});
