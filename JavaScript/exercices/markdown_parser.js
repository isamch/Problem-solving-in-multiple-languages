// Exercise: Markdown Parser

// Description: Convert markdown headers to HTML.

function parseMarkdown(md) {
  return md.replace(/^# (.*$)/gim, '<h1>$1</h1>');
}

// Test the function
console.log(parseMarkdown('# Hello'));
