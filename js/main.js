/* ─── LANGUAGE SWITCH ─── */
let currentLang = 'ko';

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';

  document.querySelectorAll('[data-ko][data-en]').forEach(el => {
    const value = el.getAttribute('data-' + lang);
    if (value === null) return;
    // li, p, blockquote 등 HTML 마크업을 포함할 수 있는 요소는 innerHTML 사용
    if (['LI', 'P', 'BLOCKQUOTE', 'TD', 'SPAN'].includes(el.tagName)) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

applyLang('ko');
