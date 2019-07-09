import accordion from './accordion/accordion.js'

if ('querySelector' in document && 'addEventListener' in window) {
  accordion.enhance();
}
