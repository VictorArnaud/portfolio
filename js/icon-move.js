function modificarIcone(idCollapse) {
  let icon = document.getElementById(idCollapse);

  if(icon.classList.contains('fa-caret-right')) {
    icon.classList.replace('fa-caret-right', 'fa-caret-down');
  } else {
    icon.classList.replace('fa-caret-down', 'fa-caret-right');
  }
}