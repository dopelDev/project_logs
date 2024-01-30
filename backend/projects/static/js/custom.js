document.addEventListener('DOMContentLoaded', () => {
	const dropdown = document.querySelector('.dropdown');
	dropdown.addEventListener('click', event => {
		event.stopPropagation();
		dropdown.classList.toggle('is-active');
	});
});
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('mySidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const closeSidebar = document.getElementById('closeSidebar');

  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});

