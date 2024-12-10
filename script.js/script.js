// Animate Progress Bars
document.querySelectorAll('.progress-bar').forEach(bar => {
  const value = bar.dataset.value;
  bar.style.setProperty('--progress', value + '%');
});