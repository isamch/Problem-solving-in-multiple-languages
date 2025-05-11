// Exercise: Virtual DOM

// Description: Create a virtual DOM node.

function createVNode(tag, props, ...children) {
  return { tag, props, children };
}

// Test the function
console.log(createVNode('div', { id: 'app' }, 'Hello'));
