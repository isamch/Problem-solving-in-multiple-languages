// Exercise: Template Engine

// Description: Render a simple template with placeholders.

function render(template, data) {
  return template.replace(/{{(\w+)}}/g, (_, key) => data[key] || '');
}

// Test the function
console.log(render('Hello {{name}}', { name: 'World' })); // Output: Hello World
