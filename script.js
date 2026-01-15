const texts = [
  "👋Welcome to my website",
  "🐍Python",
  "💻HTML",
  "🏹CSS",
  "🍵Java",
  "🔗Git",
];
  
  let index = 0;
  let charIndex = 0;
  let currentText = "";
  const speed = 100; //a typing speed
  
  function type() {
    currentText = texts[index];
    document.getElementById("typing-text").textContent =
      currentText.substring(0, charIndex + 1);
  
    charIndex++;
  
    if (charIndex < currentText.length) {
      setTimeout(type, speed);
    } else {
      setTimeout(erase, 1500); // wait before erase
    }s
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