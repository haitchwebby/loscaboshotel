document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-chat");
  const chatBox = document.getElementById("chat-box");
  const trigger = document.getElementById("color-trigger");

  // Show/hide chat box
  toggleButton.addEventListener("click", function () {
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
  });

  // Function to check when to switch button color
  function checkButtonBackground() {
    if (!trigger) return;

    const triggerPosition = trigger.getBoundingClientRect().top;
    const buttonPosition = toggleButton.getBoundingClientRect().bottom;

    if (buttonPosition > triggerPosition) {
      toggleButton.classList.add("scrolled");
    } else {
      toggleButton.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", checkButtonBackground);
  window.addEventListener("resize", checkButtonBackground);
  checkButtonBackground(); // initial run
});
