/**
 * Neon Auto Transport — Real-Time Date Updater
 * Automatically computes and inserts current Month & Year in real-time
 * across all pages, blogs, route guides, and author bylines.
 */
document.addEventListener('DOMContentLoaded', function() {
  function updateRealtimeDates() {
    const now = new Date();
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const currentMonthYear = `${months[now.getMonth()]} ${now.getFullYear()}`;

    // Target elements with class "realtime-date" or "last-updated-date"
    const dateElements = document.querySelectorAll('.realtime-date, .last-updated-date');
    dateElements.forEach(function(el) {
      el.textContent = currentMonthYear;
    });
  }

  updateRealtimeDates();
});
