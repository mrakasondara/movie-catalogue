const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener("click", (ev) => {
      this._toggleDrawer(ev, drawer);
    });
    content.addEventListener("click", (ev) => {
      this._closeDrawer(ev, drawer);
    });
  },
  _toggleDrawer(ev, drawer) {
    ev.stopPropagation();
    drawer.classList.toggle("open");
  },
  _closeDrawer(ev, drawer) {
    ev.stopPropagation();
    drawer.classList.remove("open");
  },
};
export default DrawerInitiator;
