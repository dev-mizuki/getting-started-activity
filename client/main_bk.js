// import './style.css'
// import rocketLogo from '/rocket.png'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <img src="${rocketLogo}" class="logo" alt="Discord" />
//     <h1>Hello, World!</h1>
//   </div>
// `;

// Import the SDK
import { DiscordSDK } from "@discord/embedded-app-sdk";

import "./style.css";
import rocketLogo from '/rocket.png';

// Instantiate the SDK
const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

setupDiscordSdk().then(() => {
  console.log("Discord SDK is ready");
});

async function setupDiscordSdk() {
  await discordSdk.ready();
}

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${rocketLogo}" class="logo" alt="Discord" />
    <h1>Hello, World!</h1>
    <br /><h1>main.jsをいじってるよアスラン皿</h1>
  </div>
`;