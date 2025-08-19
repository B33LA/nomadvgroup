document.querySelectorAll('.connect-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    let ripple = document.createElement('span');
    ripple.classList.add('ripple');
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});
