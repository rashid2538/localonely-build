import{t as e}from"./escape-CbM8J11v.js";var t=`
  @page { size: A4; margin: 18mm; }
  html, body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 12pt; line-height: 1.55; color: #141414; background: #fff; }
  body { margin: 0; padding: 0; }
  p { margin: 0 0 10pt; }
  h1, h2, h3, h4 { line-height: 1.25; margin: 18pt 0 8pt; }
  h1 { font-size: 20pt; } h2 { font-size: 16pt; } h3 { font-size: 13pt; }
  img { max-width: 100%; height: auto; }
  table { border-collapse: collapse; width: 100%; margin-bottom: 10pt; }
  th, td { border: 1px solid #bbb; padding: 4pt 8pt; text-align: left; }
  pre, code { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 10pt; white-space: pre-wrap; word-break: break-word; }
  blockquote { border-left: 3px solid #bbb; margin: 0 0 10pt; padding: 2pt 12pt; color: #444; }
  a { color: #1a4fd4; }
`;function n(e){let t=String(e??``),n=t.search(/<body[^>]*>/i);if(n===-1)return t;let r=t.indexOf(`>`,n)+1,i=t.search(/<\/body>/i);return i===-1||i<r?t.slice(r):t.slice(r,i)}function r(n,{title:r=`Document`,base:i=``}={}){return`<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>${e(r)}</title>
${i?`<base href="${e(i)}">`:``}
<style>${t}</style>
</head><body>${n}</body></html>`}export{r as n,n as t};