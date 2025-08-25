const form = document.querySelector('form[name="contact"]');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    // Netlify requires 'form-name' in the POST body
    if (!fd.get('form-name')) fd.set('form-name', form.getAttribute('name'));

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(fd).toString()
      });
      // simple success UX
      form.reset();
      alert('Thanks! Your message was sent.'); // replace with a nicer UI if you want
    } catch (err) {
      alert('Sorry — something went wrong. Please try again or email me directly.');
    }
  });
}
