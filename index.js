import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";

fachwerk({ src: './README.md', theme: 'blue', style: {
  '--emphasis': 'var(--yellow)',
  height: '100vh',
  '--f-content-slides-padding': 'calc(var(--base) * 8) calc(var(--base) * 10)'
}})
