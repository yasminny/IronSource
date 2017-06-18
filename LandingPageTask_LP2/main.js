// const path = window.location.pathname;
// function getUrlParameter(name) {
//   name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//   var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//   var results = regex.exec(location.search);
//   return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
// };

//used a fake url path to test and made a search url params based on the above function
const testPath = "/questions/979975/?bcolor=72BA46&btext=Download&prod=clash";

function getUrlParameterTest(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  let results = regex.exec(testPath);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

const ProductObjects = [{
  name: 'Clash of Clans',
  textTop: 'From rage-filled Barbarians with glorious mustaches to pyromaniac wizards, raise your own army and lead your clan to victory! Build your village to fend off raiders, battle against millions of players worldwide, and forge a powerful clan with others to destroy enemy clans.',
  textBody: 'Clash of Clans is a freemium MMO mobile game that allows you to raise armies and lead your clan in battle against millions of players worldwide. From rage-filled Barbarians with glorious mustaches to pyromaniac wizards, raise your own army and lead your clan to victory! Build your village to fend off raiders, battle against millions of players worldwide, and forge a powerful clan with others to destroy enemy clans.',
  icon: 'LP2/assets/Clash of Clans_small _image.png',
  image: 'LP2/assets/Clash of Clans.png'
}, {
  name: 'Minecraft',
  textTop: 'Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep into the world in survival mode, crafting weapons and armor to fend off the dangerous mobs.',
  textBody: 'Minecraft is a freemium MMO mobile game that allows you to raise armies and lead your clan in battle against millions of players worldwide. From rage-filled Barbarians with glorious mustaches to pyromaniac wizards, raise your own army and lead your clan to victory! Build your village to fend off raiders, battle against millions of players worldwide, and forge a powerful clan with others to destroy enemy clans.',
  icon: 'LP2/assets/icon_minecraft.png',
  image: 'LP2/assets/Minecraft.png'
}];

function initView() {
  const topSection = document.querySelector('.top');
  const bottomSection = document.querySelector('.bottom');
  const gameName = getUrlParameterTest('prod');
  let game = {};
  ProductObjects.find((item)=> {
    if (item.name.toUpperCase().includes(gameName.toUpperCase())){
      game = item;
    }
  });
  const bcolor = getUrlParameterTest('bcolor');
  const btext = getUrlParameterTest('btext');
  const btnStyle = `background-color:#${bcolor}`;

  const pageTemplateTop = `<div class="flex-wrap">
<div class="title-icon-wrapper">
<img src='LP2/assets/Clash of Clans_small _image.png' class="icon"/>
<h1 class="game-name">${game.name}</h1> <h1 class="under-icon">for Windows PC</h1></div>
<div class="button-wrapper">
<button type="button" style=${btnStyle}>${btext.toUpperCase()} ${game.name.toUpperCase()}</button></div>
</div> 
<div class="text">
<p>${game.textTop}</p>
</div>`;

  const pageTemplateBottom = `<div class="image-button-wrapper">
<img src=${game.image} class="image"/>
<button type="button" style=${btnStyle}>${btext.toUpperCase()} ${game.name.toUpperCase()}</button>
</div>
<div class="text">
<h3 class="bold-text">
${game.textBody}
</h3>
<p>
PLEASE NOTE! ${game.name} is free to download and play, however some game items can also be purchased for real money. If you do not want to use this feature, please set up password protection for purchases in the settings of your Google Play Store app. Also, under our Terms of Service and Privacy Policy, you must be at least 13 years of age to play or download ${game.name}.
</p>
<h3>
About
</h3>
<p>
Andy breaks down the barrier between desktop and mobile computing, while keeping a user up to date with the latest Android OS feature upgrades. It also provides users with unlimited storage capacity, PC and Mac compatibility, and the freedom to play the most popular mobile games on a desktop, Yes you can now run Android on windows. With phone as a joystick, you will never have to sacrifice the multi-touch or gyro elements of gaming, and thanks to seamless connection between desktop and mobile, you can receive a SnapChat phone picture on the street and see it on your desktop at home or even a whatsapp message.
</p>
<h3>
Features
</h3>
<p>
Provides seamless sync between desktop and mobile devices.
</p>
<ul>
<li>Connects</li>
<li>Enables app</li>
<li>Ensures most</li>
<li>Brings your</li>
</ul>
</div>`;

  topSection.innerHTML = pageTemplateTop;
bottomSection.innerHTML = pageTemplateBottom;
const icon = document.querySelector('.icon');
const image = document.querySelector('.image');
icon.src = game.icon;
image.src = game.image;
}

initView();