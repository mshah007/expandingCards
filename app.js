let panels = document.querySelectorAll(`.panel`);

function remclass() {
  panels.forEach((panel) => {
    if ((panel.classlist = `active`)) {
      panel.classList.remove("active");
    }
  });
}
function addclass() {
  panels.forEach((panel) => {
    panel.addEventListener(`click`, () => {
      remclass();

      panel.classList.add(`active`);
    });
  });
}
addclass();
