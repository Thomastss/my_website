const texts = [
  "Welcome to my webite",
  "🐍Python",
  "💻HTML",
  "🍵Java"
];
  
  let index = 0;
  let charIndex = 0;
  let currentText = "";
  const speed = 80; //a typing speed
  
  function type() {
    currentText = texts[index];
    document.getElementById("typing-text").textContent =
      currentText.substring(0, charIndex + 1);
  
    charIndex++;
  
    if (charIndex < currentText.length) {
      setTimeout(type, speed);
    } else {
      setTimeout(erase, 1500); // wait before erase
    }
  }
  
  function erase() {
    document.getElementById("typing-text").textContent =
      currentText.substring(0, charIndex - 1);
  
    charIndex--;
  
    if (charIndex > 0) {
      setTimeout(erase, 40);
    } else {
      index = (index + 1) % texts.length;
      setTimeout(type, 500);
    }
  }
  
  type();


  function goToTomWarps() {
    window.open("https://modrinth.com/plugin/tomwarps", "_blank");
  }

  function goToTomExpensive() {
    window.open("https://modrinth.com/plugin/tomexpensive", "_blank");
  }

  function goToMcLeader() {
    window.open("http://www.thomakosmc.eu/", "_blank");
  }

  function goToDiscord() {
    window.open("https://discord.gg/EfuTrGmBXt", "_blank");
  }
  
  function goToModrinth() {
    window.open("https://modrinth.com/user/Thomakosxd", "_blank");
  }
  