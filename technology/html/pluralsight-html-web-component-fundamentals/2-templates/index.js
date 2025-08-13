let numCopies = 0;

function copyTemplate() {
  const template = document.querySelector('template');
  const cloned = document.importNode(template.content, true);

  cloned.querySelector('.verb').textContent = 'shitty';
  cloned.querySelector('.num-copies').textContent = String(++numCopies);

  document.body.append(cloned);
}
