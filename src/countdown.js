export function startCountdown(countdownElement) {

  if (!countdownElement) {
    console.error("No element provided for countdown.");
    return;
  }

  const getNextHalloween = () => {
    const now = new Date();
    let year = now.getFullYear();
    const halloween = new Date(year, 9, 31, 0, 0, 0);

    // If Halloween passed this year, go to next year.
    if (now > halloween) {
      halloween.setFullYear(year + 1);
    }

    return halloween;
  }

  const updateCountdown = () => {
    const now = new Date();
    const target = getNextHalloween();
    const totalSeconds = Math.floor((target - now) / 1000);

    if (totalSeconds <= 0) {
      countdownElement.innerHTML = `
        <div class="text-5xl text-center animate-bounce">
          Today! Go be <span class="text-yellow-400 italic">spoooooky!</span>
        </div>
      `;
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    countdownElement.innerHTML = `
      <span class="text-red-500 text-4xl">${days}</span> <span class="hidden md:inline">days</span><span class="inline md:hidden">d</span>
      <span class="text-red-500 text-4xl">${hours}</span> <span class="hidden md:inline">hours</span><span class="inline md:hidden">h</span>
      <span class="text-red-500 text-4xl">${minutes}</span> <span class="hidden md:inline">minutes</span><span class="inline md:hidden">m</span>
      <span class="text-red-500 text-4xl">${seconds}</span> <span class="hidden md:inline">seconds</span><span class="inline md:hidden">s</span>
    `;
  }

  updateCountdown();
  const timerInterval = setInterval(updateCountdown, 1000);
}
