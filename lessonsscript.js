document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.float-img');
  let currentPopup = null;

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m]));
  }

  function createPopup(title, desc, ed) {
    const popup = document.createElement('div');
    popup.className = 'info-popup';
    popup.innerHTML = `<h4>${escapeHtml(title)}</h4><p>${escapeHtml(desc)}</p><p>------------</p><p>${escapeHtml(ed)}</p>`;
    document.body.appendChild(popup);
    return popup;
  }

  function showPopup(imgEl) {
    const title = imgEl.dataset.title || imgEl.alt;
    const desc = imgEl.dataset.desc || '';
    const ed = imgEl.dataset.ed || '';
    if (currentPopup && currentPopup.targetImg === imgEl) {
      closePopup();
      return;
    }
    closePopup();

    const popup = createPopup(title, desc, ed);
    popup.targetImg = imgEl;

    const rect = imgEl.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();

    let top = window.scrollY + rect.top - popupRect.height - 10;
    let left = window.scrollX + rect.left + rect.width / 2 - popupRect.width / 2;

    if (top < 0) top = window.scrollY + rect.bottom + 10;
    left = Math.max(8, Math.min(left, window.innerWidth - popupRect.width - 8));

    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;

    currentPopup = popup;
  }

  function closePopup() {
    if (currentPopup) {
      currentPopup.remove();
      currentPopup = null;
    }
  }

  images.forEach(img => {
    img.addEventListener('click', e => {
      e.stopPropagation();
      showPopup(img);
    });
  });

  document.addEventListener('click', e => {
    if (currentPopup && !currentPopup.contains(e.target)) closePopup();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePopup();
  });
});
