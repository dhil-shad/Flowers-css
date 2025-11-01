onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
// New: Parallax Mouse-Move Effect
document.body.addEventListener('mousemove', (e) => {
  // Get mouse position relative to the center of the screen
  // (e.clientX / window.innerWidth) gives a value from 0 to 1
  // Subtracting 0.5 makes it range from -0.5 to 0.5
  let x = (e.clientX / window.innerWidth) - 0.5;
  let y = (e.clientY / window.innerHeight) - 0.5;
  
  // Set the CSS custom properties on the <body>
  // The CSS will use these variables to move the layers
  document.body.style.setProperty('--mouse-x', x);
  document.body.style.setProperty('--mouse-y', y);
});