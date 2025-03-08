
export const setupIntersectionObservers = () => {
  // Observer for feature cards with enhanced animation
  const featureObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.add('translate-y-0');
          
          // Add extra animation class for enhanced effect
          entry.target.classList.add('animate-scale-in');
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  // Observer for section headers with staggered animations
  const headerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('visible');
              el.classList.add('animate-scale-in');
            }, index * 150);
          });
        }
      });
    },
    { threshold: 0.1 }
  );

  // New observer for parallax scrolling effect
  const parallaxObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('parallax-active');
        } else {
          entry.target.classList.remove('parallax-active');
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
  );

  // Apply to feature cards with improved selection
  const featureCards = document.querySelectorAll('.feature-card, .network-card, .step-card, .cta-card');
  featureCards.forEach((card) => {
    featureObserver.observe(card);
  });

  // Apply to section headers
  const sectionHeaders = document.querySelectorAll('section, [id]');
  sectionHeaders.forEach((section) => {
    headerObserver.observe(section);
  });

  // Apply parallax effect to elements with parallax class
  const parallaxElements = document.querySelectorAll('.parallax-element');
  parallaxElements.forEach((element) => {
    parallaxObserver.observe(element);
  });

  return () => {
    featureCards.forEach((card) => {
      featureObserver.unobserve(card);
    });
    sectionHeaders.forEach((section) => {
      headerObserver.unobserve(section);
    });
    parallaxElements.forEach((element) => {
      parallaxObserver.unobserve(element);
    });
  };
};

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Account for navbar height
      behavior: 'smooth'
    });
  }
};

// Enhanced parallax scroll handler
const handleParallaxScroll = (e: WheelEvent) => {
  const deltaY = e.deltaY;
  const deltaX = e.deltaX;
  
  // Get all parallax elements that are active
  const parallaxElements = document.querySelectorAll('.parallax-element.parallax-active');
  
  parallaxElements.forEach((el) => {
    const speed = (el as HTMLElement).dataset.speed || '0.5';
    const yOffset = deltaY * parseFloat(speed);
    const xOffset = deltaX * parseFloat(speed) * 0.2;
    
    const currentTransform = window.getComputedStyle(el).transform;
    const matrix = new DOMMatrix(currentTransform);
    
    const newY = matrix.m42 - yOffset;
    const newX = matrix.m41 - xOffset;
    
    (el as HTMLElement).style.transform = `translate(${newX}px, ${newY}px)`;
  });
  
  return { deltaY, deltaX };
};

// Add smooth scroll function for enhanced experience
export const smoothScrollTo = (element: HTMLElement, duration = 1000) => {
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
};

export { handleParallaxScroll };
