
const reveal = (id) => {
  const element = document.getElementById(id);
  for(let i = 0; i < element.children.length; i++) {
    setTimeout(() => {
      element.children[i].classList.add(["fade-in"])
    }, i * 250);
  }
};

reveal("con")
