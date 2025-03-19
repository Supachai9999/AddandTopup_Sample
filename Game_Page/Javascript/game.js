// ------------------------------Search Bar-----------------------------------------

const games = [
  { name: "AFK Journey", url: "Game_AFK_Journey_TH.html" },
  { name: "Arknights", url: "Game_Arknights_TH.html" },
  { name: "Black Clover M", url: "Game_Black_Clover_M_TH.html" },
  { name: "Blue Archive", url: "Game_Blue_Archive_TH.html" },
  { name: "Call of Duty Warzone Mobile", url: "GameSh_Calll_of_Duty_Warzone_Mobile_TH.html" },
  { name: "CookieRun: Tower of Adventures", url: "Game_CookieRun_Tower_of_Adventures_TH.html" },
  { name: "Counter: Side", url: "Game_Counter_Side_TH.html" },
  { name: "DDTank Origin", url: "GameSh_DDTank_Origin_TH.html" },
  { name: "Delta Force", url: "Game_Delta_Force_TH.html" },
  { name: "Dragon Age: Pals Adventure", url: "GameSh_Dragon_Age_Pals_Adventure_TH.html" },
  { name: "Dragon Nest II: Evolution", url: "Game_Dragon_Nest_II_Evolution_TH.html" },
  { name: "Eggy Party", url: "GameSh_Eggy_Party_TH.html" },
  { name: "EverChest: 15000 Chest Giveaway", url: "GameSh_EverChes_15000_Chest_Giveaway_TH.html" },
  { name: "FC Mobile", url: "Game_FC_Mobile_TH.html" },
  { name: "Free Fire", url: "Game_Free_Fire_TH.html" },
  { name: "Genshin Impact", url: "Game_Genshin_Impact_TH.html" },
  { name: "GIRLS' FRONTLINE 2: EXILIUM", url: "Game_GIRLS_FRONTLINE_2_EXILIUM_TH.html" },
  { name: "Go Go Muffin", url: "Game_Go_Go_Muffin_TH.html" },
  { name: "Honkai Star Rail", url: "Game_Honkai_Star_Rail_TH.html" },
  { name: "Infinity Nikki", url: "Game_Infinity_Nikki_TH.html" },
  { name: "Jujutsu Kaisen Phantom Parade", url: "GameSh_Jujutsu_Kaisen_TH.html" },
  { name: "King of Avalon", url: "GameSh_King_of_Avalon_TH.html" },
  { name: "Last War: Survival Game", url: "GameSh_Last_War_TH.html" },
  { name: "League of Legends (PC)", url: "Game_League_Of_Legends_PC_TH.html" },
  { name: "League of Legends: Wild Rift", url: "Game_LOL_Wild_Rift_TH.html" },
  { name: "Legend of Mushroom", url: "GameSh_Legend_of_Mushroom_TH.html" },
  { name: "Legends of Runeterra", url: "Game_Legends_of_Runeterra_TH.html" },
  { name: "Love and Deepspace", url: "GameSh_Love_and_Deepspace_TH.html" },
  { name: "Luna Origin", url: "GameSh_Luna_Origin_TH.html" },
  { name: "Mahjong Soul", url: "Game_Mahjong_Soul_TH.html" },
  { name: "Maplestory M", url: "GameSh_Maplestory_M_TH.html" },
  { name: "Marvel Rivals", url: "Game_Marvel_Rivals_TH.html" },
  { name: "Moonlight Sculptor: Dark Gamer", url: "GameSh_Moonlight_Sculptor_Dark_Gamer_TH.html" },
  { name: "Night Crows", url: "GameSh_NIght_Crows_TH.html" },
  { name: "NIKKE", url: "GameSh_NIKKE_TH.html" },
  { name: "Onmyoji Arena", url: "Game_Onmyoji_Arena_TH.html" },
  { name: "Path Of Exile 2", url: "Game_Path_Of_Exile2_TH.html" },
  { name: "Ragnarok Landverse", url: "GameSh_Ragnarok_Landverse_TH.html" },
  { name: "Reverse 1999", url: "GameSh_Reverse_1999_TH.html" },
  { name: "Roblox", url: "Game_Roblox_TH.html" },
  { name: "ROV", url: "Game_ROV_TH.html" },
  { name: "Samkok Tactics", url: "GameSh_Samkok_Tactics_TH.html" },
  { name: "Seven Knight Idle (7k Idle)", url: "GameSh_Seven_Knight_Idle_(7k_Idle)_TH.html" },
  { name: "Solo Leveling: Arise", url: "GameSh_Solo_Leveling_Arise_TH.html" },
  { name: "STARSEED: Asnia Trigger", url: "Game_STARSEED_Asnia_Trigger_TH.html" },
  { name: "Summoners War: Sky Arena", url: "Game_Summoners_War_Sky_Arena_TH.html" },
  { name: "Sword of Convallaria", url: "Game_Sword_of_Convallaria_TH.html" },
  { name: "Teamfight Tactics (Mobile)", url: "Game_Teamfight_Tactics_TH.html" },
  { name: "Tower of God: Great Journey", url: "GameSh_Tower_of_God_Great_Journey_TH.html" },
  { name: "Valorant", url: "Game_Valorant_TH.html" },
  { name: "Wuthering Waves", url: "Game_Wuthering_Waves_TH.html" },
  { name: "The Legend of Heroes: Gagharv", url: "GameSh_The_Legend_of_Heroes_Gagharv_TH.html" },
  { name: "The Seven Deadly Sins", url: "GameSh_The_Seven_Deadly_Sins_TH.html" },
  { name: "Yulgang จุติยุทธภพเลือดใหม่", url: "GameSh_Yulgang_TH.html" },
  { name: "Zenless Zone Zero", url: "Game_Zenless_Zone_Zero_TH.html" }
];

let selectedIndex = -1;

function showSuggestions() {
  const input = document.getElementById('searchBar').value.toLowerCase();
  const AddAnd_Suggestions = document.getElementById('AddAnd_Suggestions');
  AddAnd_Suggestions.innerHTML = '';
  selectedIndex = -1;

  const filteredGames = games.filter(game => game.name.toLowerCase().includes(input));

  if (input === '') {
      AddAnd_Suggestions.style.display = 'none';
      return;
  }

  if (filteredGames.length === 0) {
      const noResult = document.createElement('div');
      noResult.textContent = 'ไม่พบเกมที่คุณกำลังค้นหา';
      noResult.classList.add('no-result');
      AddAnd_Suggestions.appendChild(noResult);
  } else {
      filteredGames.forEach((game) => {
          const div = document.createElement('div');
          div.textContent = game.name;
          div.addEventListener('click', () => window.location.href = game.url);
          AddAnd_Suggestions.appendChild(div);
      });
  }

  AddAnd_Suggestions.style.display = 'block';
}

function handleKey(e) {
  const AddAnd_Suggestions = Array.from(document.getElementById('AddAnd_Suggestions').children);
  const selectableSuggestions = AddAnd_Suggestions.filter(s => !s.classList.contains('no-result'));

  if (selectableSuggestions.length === 0) return;

  if (e.key === 'ArrowDown') {
      selectedIndex = (selectedIndex + 1) % selectableSuggestions.length;
  } else if (e.key === 'ArrowUp') {
      selectedIndex = (selectedIndex - 1 + selectableSuggestions.length) % selectableSuggestions.length;
  } else if (e.key === 'Enter' && selectedIndex >= 0) {
      selectableSuggestions[selectedIndex].click();
      return;
  }

  selectableSuggestions.forEach((suggestion, index) => {
      suggestion.classList.toggle('active', index === selectedIndex);
      if (index === selectedIndex) {
          document.getElementById('searchBar').value = suggestion.textContent;
      }
  });
}

function searchGame() {
  const input = document.getElementById('searchBar').value.toLowerCase();
  const game = games.find(game => game.name.toLowerCase() === input);
  if (game) {
      window.location.href = game.url;
  } else {
      /* alert('ไม่พบเกมที่คุณกำลังค้นหา'); */
  }
}

// ------------------------------เมนูขวามือในโทรศัพท์-----------------------------------------

function Addand_toggleMenu() {
  var Addand_menu = document.getElementById("Addand_menu");
  var Addand_menuIcon = document.getElementById("Addand_menu-icon");

  if (Addand_menu.classList.contains("show")) {
      Addand_menu.classList.remove("show");
      Addand_menuIcon.innerHTML = "☰"; // เปลี่ยนกลับเป็น 3 ขีด
  } else {
    Addand_menu.classList.add("show");
    Addand_menuIcon.innerHTML = "✖"; // เปลี่ยนเป็นกากบาท
  }
}

// ------------------------------Popup กลางจอ-----------------------------------------

let redirectUrl = '';
let popupShown = false;

const images = [
  { img:'../รูป/Fake Ads/1.jpg', link:'https://www.facebook.com/share/v/15qDajiLNV/'}, /* กงยู G */
  { img:'../รูป/Fake Ads/2.jpg', link:'https://www.facebook.com/share/v/1BDqA2f6GT/'}, /* Gwen Kluz */
  { img:'../รูป/Fake Ads/3.jpg', link:'https://www.facebook.com/share/v/1Db8L7Q57F/'}, /* Sunny 7500 */
  { img:'../รูป/Fake Ads/4.jpg', link:'https://www.facebook.com/share/p/161naUHeUv/'}, /* ผีเสื้อ Fight */
  { img:'../รูป/Fake Ads/5.jpg', link:'https://www.facebook.com/share/v/196mnFJHHn/'}, /* กงยู T */
  { img:'../รูป/Fake Ads/6.jpg', link:'https://www.facebook.com/share/v/1A47wkoSGx/'}, /* Alpha G */
  { img:'../รูป/Fake Ads/7.jpg', link:'https://www.facebook.com/share/r/15nnvPaVyb/'}, /* G เด้า */
  { img:'../รูป/Fake Ads/9.jpg', link:'https://www.facebook.com/share/v/1Fdsmb1k9U/'}, /* @& 1 */
  { img:'../รูป/Fake Ads/10.jpg', link:'https://www.facebook.com/share/v/1BJmfU91fu/'} /* @& 2 */
];



// เปิด Popup พร้อมกำหนด URL ปลายทาง
function openPopup(url) {
  

  if (sessionStorage.getItem('popupShown')) {
    // ถ้าเคยแสดงแล้ว ให้ไปหน้าเว็บเลย
    window.location.href = url;
    return;
  }
  
  // สุ่มรูปภาพ 1 รูป
  const random01 = images[Math.floor(Math.random() * images.length)];
  document.getElementById('Addand_PopupImage').src = random01.img;
  document.getElementById('Addand_PopupLink').href = random01.link;

  redirectUrl = url;
  document.getElementById('Addand_MidPopupBox').style.display = 'block';
  document.getElementById('Addand_MidPopupOverlay').style.display = 'block';

  // บันทึกว่ามีการแสดง Popup แล้ว
  /* sessionStorage.setItem('popupShown', 'true'); */
}

// ปิด Popup และเปลี่ยนหน้าไปยัง URL ที่กำหนด
function closePopup() {
  document.getElementById('Addand_MidPopupBox').style.display = 'none';
  document.getElementById('Addand_MidPopupOverlay').style.display = 'none';

  if (redirectUrl) {
    window.location.href = redirectUrl; // พาไปเว็บของเกม
  }

}

// ------------------------------Popup ซ้าย-ขวา หน้าจอ-----------------------------------------


const ads5_12 = [
  { image: '../รูป/เนียนพนัน/Comp_1_00000.jpg', link: 'https://youtu.be/5aprDECmFec?si=bRGKE8CWUFlAw0Md' },
  { image: '../รูป/เนียนพนัน/Gif ขโมยจากนัตตี้.gif', link: 'https://youtu.be/OVTU6oTLHuU?si=G5QB0uUeIIGMOihZ' },
  { image: '../รูป/เนียนพนัน/Gif ทำเอง.gif', link: 'https://youtu.be/Xq5XHFZfe8k?si=hu81l9YYqSDg8K9Z' }
];

function getRandomAds() {
  let shuffled = ads5_12.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2);
}

function closeAd(adId) {
  const ad = document.getElementById(adId);
  ad.style.display = 'none';
}

setTimeout(() => {
  const selectedAds = getRandomAds();

  document.getElementById('leftAdImage').src = selectedAds[0].image;
  document.getElementById('leftAdLink').href = selectedAds[0].link;

  document.getElementById('rightAdImage').src = selectedAds[1].image;
  document.getElementById('rightAdLink').href = selectedAds[1].link;

  document.getElementById('leftAd').style.opacity = '1';
  document.getElementById('leftAd').style.visibility = 'visible';
  
  document.getElementById('rightAd').style.opacity = '1';
  document.getElementById('rightAd').style.visibility = 'visible';
}, 3000);