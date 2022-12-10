function Element({ tagName, props, children }) {
    if (!(this instanceof Element)) {
        return new Element({ tagName, props, children })
    }
    this.tagName = tagName;
    this.props = props || {};
    this.children = children || [];
}

Element.prototype.render = function () {
    var el = document.createElement(this.tagName),
        props = this.props,
        propName,
        propValue;
    for (propName in props) {
        propValue = props[propName];
        el.setAttribute(propName, propValue);
    }
    this.children.forEach(function (child) {
        var childEl = null;
        if (child instanceof Element) {
            childEl = child.render();
        } else {
            childEl = document.createTextNode(child);
        }
        el.appendChild(childEl);
    });
    return el;
};
// var elem = Element({
//     tagName: 'ul',
//     props: {'class': 'list'},
//     children: [
//         Element({tagName: 'li', children: ['item1']}),
//         Element({tagName: 'li', children: ['item2']})
//     ]
// });
// document.querySelector('body').appendChild(elem.render());

function updateElement($root, newElem, oldElem, index = 0) {
    if (!oldElem) {
        $root.appendChild(newElem.render());
    } else if (!newElem) {
        $root.removeChild($root.childNodes[index]);
    } else if (changed(newElem, oldElem)) {
        if (typeof newElem === 'string') {
            $root.childNodes[index].textContent = newElem;
        } else {
            $root.replaceChild(newElem.render(), $root.childNodes[index]);
        }
    } else if (newElem.tagName) {
        let newLen = newElem.children.length;
        let oldLen = oldElem.children.length;
        for (let i = 0; i < newLen || i < oldLen; i++) {
            updateElement($root.childNodes[index], newElem.children[i], oldElem.children[i], i)
        }
    }
}
function changed(elem1, elem2) {
    return (typeof elem1 !== typeof elem2) ||
        (typeof elem1 === 'string' && elem1 !== elem2) ||
        (elem1.type !== elem2.type);
}