// Vivliostyle publication config for "You Shall Know LibFuzzer".
//
//   npm install
//   npm run figures      # mmd/*.mmd -> img/*.svg (+ .dark.svg)
//   npm run pdf          # -> you-shall-know-libfuzzer.pdf
//
// The figures are static SVG, so there is no renderer to wait for and
// Vivliostyle paginates index.html directly. (An earlier revision rendered
// Mermaid in the page at load time and needed a pre-render pass to stop
// asynchronous SVG from losing the race with pagination; externalizing the
// figures removed that whole problem.)
//
// Page geometry lives in css/print.css — @page sets the trim size, the running
// head via string-set, and the break-inside rules. Change it there; nothing
// here needs to follow.
module.exports = {
  title: 'You Shall Know LibFuzzer',
  language: 'en',

  entry: ['index.html'],
  output: ['you-shall-know-libfuzzer.pdf'],

  workspaceDir: '.vivliostyle',
  toc: false,              // the book ships its own hand-written TOC
  pressReady: false,       // set true for CMYK / PDF-X output at a printer

  // NOTE: do not set `timeout` here. CLI v11.3.3 passes a config-file value
  // straight to playwright's waitForFunction as *milliseconds*, so `600` means
  // 600 ms and the build dies with "Timeout 600ms exceeded". The command-line
  // -t/--timeout flag is in seconds, which is what npm run pdf uses.
};
