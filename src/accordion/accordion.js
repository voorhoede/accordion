function enhance() {
  const accordions = document.querySelectorAll('[data-accordion]')

  if (accordions) {
    Array.prototype.forEach.call(accordions, accordion => {
      accordion.addEventListener('keydown', function () {
        keysBindingHander(event, accordion)
      })
      toggleSection(accordion)
    })
  }

  function keysBindingHander(event, object) {
    const target = event.target
    const key = event.which.toString()
    const items = object.querySelectorAll('[data-accordion-toggle-button]')
    const index = Number(target.getAttribute('data-index'))

    if (target.hasAttribute('data-accordion-toggle-button')) {
      // 38 = Up, 40 = Down (keyboard)
      if (key.match(/38|40/)) {
        const direction = (key.match(/40/)) ? 'down' : 'up'
        focusNext({
          direction,
          index,
          items
        })
      } else if (key.match(/35|36/)) {
        // 35 = End, 36 = Home (keyboard)
        if (Number(key) === 36) {
          focusJump({
            specialKey: 'home',
            items
          })
        } else {
          focusJump({
            specialKey: 'end',
            items
          })
        }
      }
    }
  }

  function focusNext({ direction, items, index }) {
    if (!direction || !(items instanceof NodeList) || typeof index !== 'number') {
      throw new Error('focusNext(): One or more arguments are incorrect.')
    }

    const length = items.length - 1
    if (direction === 'down') {
      if (index !== length) {
        items[index + 1].focus()
      } else {
        items[0].focus()
      }
    } else if (direction === 'up') {
      if (index !== 0) {
        items[index - 1].focus()
      }
      else {
        items[length].focus()
      }
    }
  }

  function focusJump({ specialKey, items }) {
    if (!specialKey || !(items instanceof NodeList)) {
      throw new Error('focusJump(): One or more arguments are incorrect.')
    }

    if (specialKey === 'home') {
      items[0].focus()
    } else if (specialKey === 'end') {
      items[items.length - 1].focus()
    }
  }

  function toggleSection(object) {
    const HEADING_ATTR = 'data-accordion-toggle-title'
    const BUTTON_ATTR = 'data-accordion-toggle-button'
    const headings = object.querySelectorAll(`[${HEADING_ATTR}]`)

    Array.prototype.forEach.call(headings, (heading) => {
      let button = heading.querySelector(`[${BUTTON_ATTR}]`)
      let target = heading.nextElementSibling

      target.classList.add('hidden')
      button.setAttribute('aria-expanded', false)
      button.addEventListener('click', function() {
        const otherExpandedPanel = object.querySelector('[aria-expanded="true"]')
        if (otherExpandedPanel) {
          collapse({
            otherExpandedPanel,
            items: object
          })
        }

        let isExpanded = button.getAttribute('aria-expanded') === 'true' || false
        button.setAttribute('aria-expanded', !isExpanded)
        !target.classList.contains('hidden') ? target.classList.add('hidden') : target.classList.remove('hidden')
      })
    })
  }

  function collapse({ otherExpandedPanel: element, items }) {
    const controlName = element.getAttribute('aria-controls')
    const body = items.querySelector(`#${controlName}`)
    let isExpanded = element.getAttribute('aria-expanded') === 'true' || false
    element.setAttribute('aria-expanded', !isExpanded)

    if (!body.classList.contains('hidden')) {
      body.classList.add('hidden')
    }
  }
}

export default { enhance }