import { useMotion } from '@vueuse/motion'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-animate', {
    mounted(el, binding) {
      // Set up animation config - default or from binding value
      const animationConfig = binding.value || {
        initial: { opacity: 0, y: 40 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            type: 'spring', 
            stiffness: 100, 
            damping: 15, 
            duration: 800 
          }
        }
      }

      // Apply motion to the element
      const motion = useMotion(el, animationConfig)
      
      // Set initial state to hide element
      motion.apply('initial')

      // Create intersection observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // When element comes into view, animate it
            motion.apply('visible')
            // Unobserve once triggered (optional - remove if you want to replay animation when scrolling back up)
            observer.unobserve(el)
          }
        })
      }, {
        // Adjust these thresholds as needed
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      })

      // Start observing
      observer.observe(el)
    }
  })
})
