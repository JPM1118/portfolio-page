const opacityOnScroll = () => {
  let home = document.querySelector(".my-work__home-item");
  let scrolling;
  window.addEventListener("scroll", function() {
    home.style.opacity = 1;
    window.clearTimeout(scrolling);
    scrolling = setTimeout(() => {
      console.log(`setTimeout is firing`);
      console.log(home);
      home.style.opacity = 0.2;
    }, 500);
  });
  home.addEventListener(
    "mouseover",
    function(event) {
      // highlight the mouseover target
      home.style.opacity = 1;

      // reset the color after a short delay
      setTimeout(function() {
        home.style.opacity = 0.2;
      }, 1000);
    },
    false
  );
};

export default opacityOnScroll;
