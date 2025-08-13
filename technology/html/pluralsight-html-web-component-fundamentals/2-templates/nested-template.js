const headerTemplate = document.querySelector('#header');
const headerClone = document.importNode(headerTemplate.content, true);

const contentTemplate = headerClone.content.querySelector('#content');
const contentClone = document.importNode(contentTemplate.content, true);

headerClone.appendChild(contentClone);
document.body.append(headerClone);
