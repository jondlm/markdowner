import { sanitize } from "dompurify";
import { marked } from "marked";

// Load css
import "github-markdown-css";
import "./index.css";

const input_b64 = document.querySelector("#input_b64");
const input_md = document.querySelector("#input_md");
const output = document.querySelector("#output");

input_b64.addEventListener("input", (ev) => {
  const b64 = ev.currentTarget.value;
  const ascii = atob(b64);
  const parsed = marked.parse(ascii);
  const sanitized = sanitize(parsed);

  output.innerHTML = sanitized;
});

input_md.addEventListener("input", (ev) => {
  const parsed = marked.parse(ev.currentTarget.value);
  const sanitized = sanitize(parsed);

  output.innerHTML = sanitized;
});
