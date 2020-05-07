const defaultConfig = {
  // Default selector
  selector: '[data-sight]',
  // Default threshold
  threshold: 0.5,
}

export default function(config = {}) {
  // Merge defaults into config
  const { selector } = { ...defaultConfig, ...config }
  // Select elements
  const elements = document.querySelectorAll(selector)
  // Create an observer
  let observer

  const observe = (entries) => {
    // Create the new observer
    observer = new IntersectionObserver(onIntersection, config)
    // Observe all elements found
    Array.from(entries).forEach(entry => observer.observe(entry))
  }

  const onIntersection = (entries) => {
    Array.from(entries).forEach(entry => {
      // For each entry remove an element from the count
      if (entry.intersectionRatio > 0) {
        // Animate the element => Hack w/ setTimeout
        setTimeout(() => requestAnimationFrame(() => entry.target.classList.add('animated')), 300)
        // Stop watching the element
        observer.unobserve(entry.target)
      }
    })
  }
  // Run the observer against the marked elements
  return observe(elements)
}
