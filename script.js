const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.querySelectorAll('[data-join]').forEach(button => button.addEventListener('click', () => document.querySelector('#waitlist')?.scrollIntoView({behavior:'smooth'})));
document.querySelector('.waitlist form')?.addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#waitlist-title').textContent = 'Sei arrivato prima del tuo clone.';
  document.querySelector('#waitlist-copy').textContent = 'Grazie. Sarai tra i primi a entrare nel mondo Clonity.';
  event.currentTarget.style.display = 'none';
});
