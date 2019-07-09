# Accordion

* A behavioural and accessible accordion component built with HTML, CSS and JavaScript.
* Component is a [Nunjucks](https://mozilla.github.io/nunjucks/api.html) macro.


## Demo

View the [demo](https://voorhoede-accordion-block.netlify.com/).


## Keyboard support

| Key            | Function                                                     |
| -------------- | ------------------------------------------------------------ |
| Space or Enter | When focus is on the accordion header of a collapsed section, expands the section. |
| Tab            | - Moves focus to the next focusable element.<br> - All focusable elements in the accordion are included in the `Tab` sequence.           |
| Shift + Tab    | - Moves focus to the previous focusable element.<br> - All focusable elements in the accordion are included in the `Tab` sequence. |
| Down arrow     | - When focus is on an accordion header, moves focus to the next accordion header.<br> - When focus is on last accordion header, moves focus to first accordion header. |
| Up arrow       | - When focus is on an accordion header, moves focus to the previous accordion header.<br> - When focus is on first accordion header, moves focus to last accordion header.|
| Home           | When focus is on an accordion header, moves focus to the first accordion header.|
| End            | When focus is on an accordion header, moves focus to the last accordion header.|

Source: [w3.org](https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190207/examples/accordion/accordion.html)


## Accessibility

Component has been tested on:

* MacOS VoiceOver in Safari.
* [NVDA](https://www.nvaccess.org/) on Windows 8.
* [JAWS](http://www.freedomscientific.com/Products/software/JAWS/) on Windows 8.