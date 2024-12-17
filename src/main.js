document.addEventListener("DOMContentLoaded", () => {
  const timerElement = document.getElementById("timer");
  let timeLeft = 90;

  const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes}:${seconds}`;
  };
  const toggleHeadersFooters = () => {
    const firstElements = document.querySelectorAll(".first-visible");
    const secondElements = document.querySelectorAll(".second-visible");

    firstElements.forEach((element) => {
      element.classList.remove("first-visible");
      element.classList.add("second-visible");
    });
    secondElements.forEach((element) => {
      element.classList.remove("second-visible");
      element.classList.add("first-visible");
    });
  };

  const startTimer = () => {
    updateTimer(); 
    setInterval(() => {
      if (--timeLeft <= 0) {
        toggleHeadersFooters();
        timeLeft = 90;
      }
      updateTimer();
    }, 1000);
  };

  startTimer();
});
