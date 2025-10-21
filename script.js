// Sample markdown
const sampleMarkdown = `# Hello World

This is a **bold** text and this is *italic*.

- Item 1
- Item 2

[Link](https://example.com)`;

try {
  const html = marked.parse(sampleMarkdown);
  document.getElementById('output').innerHTML = html;
} catch (e) {
  console.error('Error converting markdown:', e);
  document.getElementById('output').textContent = 'Error converting markdown.';
}