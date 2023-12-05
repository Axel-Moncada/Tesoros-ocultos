let nextCard = document.querySelector("#next");
let prevCard = document.querySelector("#prev");

function handleScrollNext(direction) {
  const tarjetass = document.querySelector(".tarjetas-content");
  tarjetass.scrollLeft = tarjetass.scrollLeft +=
    window.innerWidth / 2 > 600
      ? window.innerWidth / 2
      : window.innerWidth - 100;
}

function handleScrollPrev(direction) {
  const tarjetass = document.querySelector(".tarjetas-content");
  tarjetass.scrollLeft = tarjetass.scrollLeft -=
    window.innerWidth / 2 > 600
      ? window.innerWidth / 2
      : window.innerWidth - 100;
}

nextCard.addEventListener("click", handleScrollNext);
prevCard.addEventListener("click", handleScrollPrev);

document.addEventListener("DOMContentLoaded", function () {
  const fragment = window.location.hash;

  if (fragment === "#tarjeta1") {
    const tarjeta1Modal = new bootstrap.Modal(
      document.getElementById("tarjeta1")
    );
    tarjeta1Modal.show();
  }
});


