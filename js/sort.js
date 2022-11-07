//------sort ---------
document.querySelector('.arr-price-top').onclick = mysort;
document.querySelector('.arr-price-down').onclick = mysortDesc;

const nav = document.querySelector('.main-wrapper__card')

function mysortDesc() {
  for (let i = 0; i < nav.children.length; i++) {
    for (let k = i; k < nav.children.length; k++) {
      if (+nav.children[i].getAttribute('data-price') > +nav.children[k].getAttribute('data-price')) {
        replaceNode = nav.replaceChild(nav.children[k], nav.children[i])
        insertAfter(replaceNode, nav.children[i])
      }
    }
  }
}

function mysort() {
  for (let i = 0; i < nav.children.length; i++) {
    for (let k = i; k < nav.children.length; k++) {
      if (+nav.children[i].getAttribute('data-price') < +nav.children[k].getAttribute('data-price')) {
        replaceNode = nav.replaceChild(nav.children[k], nav.children[i])
        insertAfter(replaceNode, nav.children[i])
      }
    }
  }
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}