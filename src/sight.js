const defaultConfig = {
  // Default selector
  selector: '[data-sight]',
  // Default margin
  rootMargin: 0,
  // Default threshold
  threshold: 0.5
}

export default function (config = {}) {
  // Merge defaults into config
  const { selector, rootMargin, threshold } = { ...defaultConfig, ...config}
  // Select elements
  const elements = document.querySelectorAll(selector)
  // Create an observer
  let observer
  // Count the elements
  let elementCount = elements.length

  function observe(elements) {
    // Create the new observer
    observer = new IntersectionObserver(onIntersection, config)

    Array.from(elements).forEach(element => {
      // For each element observe it
      observer.observe(element)
    })
  }

  function onIntersection(entries) {
    // Disconnect if we saw everything
    if (elementCount === 0) {
      observer.disconnect()
    }

    Array.from(entries).forEach(entry => {
      // For each entry remove an element from the count
      if (entry.intersectionRatio > threshold) {
        elementCount--
      }

      // Stop watching the element
      observer.unobserve(entry.target)

      // Work
      if (entry.isIntersecting) {
        console.log(elementCount + ' ' + 'intersecting')
      }
    })
  }

  // Run the observer agains the marked elements
  return observe(elements)
}
