// Load saved data on page load
window.onload = function() {
  const savedPurpose = localStorage.getItem('purpose');
  const savedTime = localStorage.getItem('time');

  if (savedPurpose) {
    document.getElementById('purposeInput').value = savedPurpose;
    document.getElementById('purposeText').textContent = savedPurpose;
  }
  if (savedTime) {
    document.getElementById('timeInput').value = savedTime;
    document.getElementById('timeText').textContent = savedTime;
  }
};

// Update text + save data locally
function updateGoal() {
  const purpose = document.getElementById('purposeInput').value.trim() || '...';
  const time = document.getElementById('timeInput').value.trim() || '...';

  document.getElementById('purposeText').textContent = purpose;
  document.getElementById('timeText').textContent = time;

  // Save to localStorage
  localStorage.setItem('purpose', purpose);
  localStorage.setItem('time', time);
}
