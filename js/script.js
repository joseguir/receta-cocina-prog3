const btn = document.getElementById('darkModeBtn');
btn.addEventListener('click', () => {
   document.body.classList.toggle('dark-mode');
});

 const menuToggle = document.getElementById('menuToggle');
 const menuList = document.getElementById('menuList');

  menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('show');
  });