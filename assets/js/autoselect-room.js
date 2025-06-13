window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const selectedRoom = params.get('room');
  if (selectedRoom) {
    const dropdown = document.getElementById('room');
    if (dropdown) {
      dropdown.value = selectedRoom.toLowerCase();
    }
  }
});
