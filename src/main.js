import './style.css'
import iwh from '/iwh.png'
import { startCountdown } from './countdown.js'
import { initMatomo } from './matomo';

document.querySelector('#app').innerHTML = `
  <div class="w-[320px] md:w-[420px] mx-auto mb-4 p-8 md:p-0 landscape:mb-2">
    <h1 class="text-2xl md:text-4xl text-yellow-400 font-bold mb-2 md:mb-4">
      When is...<br>
      <span class="font-notable text-red-500 text-3xl md:text-5xl">Halloween?</span>
    </h1>
    <p class="text-2xl md:text-4xl font-bold text-white mb-8 text-right">October 31st</p>
  </div>
  <div class="text-lg font-bold text-white text-center">
    <span id="countdown"></span>
  </div>
  <div class="absolute bottom-0 left-0 p-4 md:p-8 w-full">
    <div class="flex flex-col md:flex-row md:justify-between items-end w-full">
      <p class="text-white text-xs md:text-sm w-full text-center md:w-auto order-2 md:order-1 mb-4 md:mb-0 landscape:hidden lg:landscape:block">
        Made with 🎃 by <a href="https://iwatchhorror.com" target="_blank" title="I Watch Horror" class="text-yellow-400 hover:underline">I Watch Horror</a> | Grab the code on <a href="https://github.com/activatedbrain/whenishalloween" target="_blank" class="text-yellow-400 hover:underline">Github</a>
      </p>
      <a href="https://iwatchhorror.com" target="_blank" class="order-1 md:order-2 mb-4 md:mb-0 w-16 mx-auto md:mx-0 md:w-auto" title="Powered by I Watch Horror">
        <img src="${iwh}" alt="I Watch Horror">
      </a>
    </div>
  </div>
`;

initMatomo();
startCountdown(document.querySelector('#countdown'))
