import { on } from './dom';

const nodeList = [];
const ctx = '@@clickoutsideContext';

let startClick;
let seed = 0;

!globalThis.__VUE_IS_SERVER__ && on(document, 'mousedown', e => (startClick = e));
!globalThis.__VUE_IS_SERVER__ && on(document, 'mouseup', (e) => {
  nodeList.forEach(node => node[ctx].documentHandler(e, startClick));
});

function createDocumentHandler(el, binding, vnode) {
  return function (mouseup = {}, mousedown = {}) {
    const mouseupTarget = mouseup.target;
    const mousedownTarget = mousedown.target;
    if (!mouseupTarget
      || !mousedownTarget
      || el.contains(mouseupTarget)
      || el.contains(mousedownTarget)
      || el === mouseupTarget) return;

    if (binding.value) {
      binding.value();
    }
  };
}

const Clickoutside = {
  beforeMount(el, binding, vnode) {
    nodeList.push(el);
    const id = seed++;
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
    };
  },
  updated(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
  },
  unmounted(el) {
    const len = nodeList.length;
    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  },
};

export default Clickoutside;
export { Clickoutside };


