function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function safeHTML(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    const val = values[i] !== undefined ? escapeHTML(String(values[i])) : "";
    return acc + str + val;
  }, "");
}

const userInput = `<script>alert('XSS')</script>`;
const html = safeHTML`<div>${userInput}</div>`;
console.log(html);