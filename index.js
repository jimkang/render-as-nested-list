function RenderAsNestedList({
  propertiesToIgnore = [],
  labelProp = 'id',
  labelClass = 'label',
  listClass = 'list',
  valueClass = 'value'
}) {
  return renderAsNestedList;

  function renderAsNestedList({ targetListEl, name, thing }) {
    var item = append(targetListEl, 'li');
    if (name) {
      let label = append(item, 'span');
      label.classList.add(labelClass);
      label.textContent = name;
    }

    var type = typeof thing;
    if (thing && type === 'object') {
      let proptree = append(item, 'ul');
      proptree.classList.add(listClass);
      if (Array.isArray(thing) && thing.length < 1) {
        renderAsNestedList({ targetListEl: proptree, thing: '<empty array>' });
      } else {
        let objectKeyRendered = false;
        for (let key in thing) {
          if (!propertiesToIgnore.includes(key) && key !== labelProp) {
            renderAsNestedList({
              targetListEl: proptree,
              name: key,
              thing: thing[key]
            });
            objectKeyRendered = true;
          }
        }
        if (!objectKeyRendered) {
          renderAsNestedList({
            targetListEl: proptree,
            thing: '<empty object>'
          });
        }
      }
    } else {
      var valueSpan = append(item, 'span');
      valueSpan.classList.add(valueClass);
      if (thing === undefined) {
        valueSpan.textContent = '<undefined>';
      } else if (thing === null) {
        valueSpan.textContent = '<null>';
      } else {
        valueSpan.textContent = thing;
      }
    }
  }
}

function append(parentEl, tag) {
  var node = document.createElement(tag);
  parentEl.appendChild(node);
  return node;
}

module.exports = RenderAsNestedList;
