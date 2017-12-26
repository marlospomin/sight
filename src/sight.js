const defaultConfig = {
  // Default selector
  selector: '[data-sight]',
  // Default threshold
  threshold: [0.5]
}

export default function (config = {}) {
  // Merge defaults into config
  const { selector, threshold } = { ...defaultConfig, ...config}
  // Select elements
  const elements = document.querySelectorAll(selector)
  // Create an observer
  let observer
  // If IntersectionObserver is not supported break
  if (!('IntersectionObserver' in window)) {
    return
  }

  function observe(elements) {
    // Create the new observer
    observer = new IntersectionObserver(onIntersection, config)

    Array.from(elements).forEach(element => {
      // For each element observe it
      observer.observe(element)
    })
  }

  function onIntersection(entries) {
    Array.from(entries).forEach(entry => {
      // For each entry remove an element from the count
      if (entry.isIntersecting) {
        console.log('debugging')
        // Stop watching the element
        observer.unobserve(entry.target)
      }
    })
  }

  // Run the observer agains the marked elements
  return observe(elements)
}
