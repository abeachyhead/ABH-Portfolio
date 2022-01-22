// sticky navigation
const stickyNavEl = document.querySelector(".sticky-nav");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) document.body.classList.add("sticky");

    if (ent.isIntersecting === true) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-70px",
  }
);
obs.observe(stickyNavEl);
