export function navTo(id) {
  // If we're not on the homepage, navigate there first
  if (window.location.pathname !== '/') {
    window.location.href = `/#${id}`;
    return;
  }
  // Already on homepage, just scroll
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}