
// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Dialog modals
document.querySelectorAll('.more').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-dialog');
    const dlg = document.getElementById(id);
    if (dlg && typeof dlg.showModal === 'function') dlg.showModal();
  });
});
document.querySelectorAll('.project-dialog .close').forEach(btn => {
  btn.addEventListener('click', e => {
    const dlg = e.target.closest('dialog');
    if (dlg && typeof dlg.close === 'function') dlg.close();
  });
});

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
