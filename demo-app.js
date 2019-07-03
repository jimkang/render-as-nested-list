var RenderAsNestedList = require('./index');
var exampleObject = require('./example-object.json');

var rawField = document.getElementById('raw-json');
var rootList = document.getElementById('root-list');

var renderAsNestedList = RenderAsNestedList({});

rawField.textContent = JSON.stringify(exampleObject, null, 2);

renderAsNestedList({
  targetListEl: rootList,
  name: 'root',
  thing: exampleObject
});
