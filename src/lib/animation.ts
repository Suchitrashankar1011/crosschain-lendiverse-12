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
          
          // Add glow effect for certain elements
          if (entry.target.classList.contains('glow-on-visible')) {
            entry.target.classList.add('glow-active');
          }
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
          
          // Find and animate path elements for SVG graphics
          const pathElements = entry.target.querySelectorAll('.animated-path');
          pathElements.forEach((path, index) => {
            setTimeout(() => {
              path.classList.add('path-reveal');
            }, index * 200);
          });
        }
      });
    },
    { threshold: 0.1 }
  );

  // Enhanced observer for parallax scrolling effect
  const parallaxObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('parallax-active');
          
          // Trigger animation for children elements
          const animatedChildren = entry.target.querySelectorAll('.animated-child');
          animatedChildren.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animated-child-visible');
            }, index * 120);
          });
        } else {
          entry.target.classList.remove('parallax-active');
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
  );
  
  // New observer for floating graphic elements
  const graphicsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('graphics-visible');
          
          // Animate lines and dots separately with delays
          const lines = entry.target.querySelectorAll('.graphic-line');
          lines.forEach((line, index) => {
            setTimeout(() => {
              line.classList.add('line-visible');
            }, index * 200);
          });
          
          const dots = entry.target.querySelectorAll('.graphic-dot');
          dots.forEach((dot, index) => {
            setTimeout(() => {
              dot.classList.add('dot-visible');
            }, index * 150 + 300);
          });
        }
      });
    },
    { threshold: 0.1 }
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
  
  // Apply to graphic elements
  const graphicElements = document.querySelectorAll('.animated-graphic');
  graphicElements.forEach((element) => {
    graphicsObserver.observe(element);
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
    graphicElements.forEach((element) => {
      graphicsObserver.unobserve(element);
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

// Enhanced parallax scroll handler with improved movement
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

// Add mouse move parallax effect for enhanced visuals
export const setupMouseParallax = () => {
  const handleMouseMove = (e: MouseEvent) => {
    const parallaxElements = document.querySelectorAll('.mouse-parallax');
    
    parallaxElements.forEach((element) => {
      const speed = parseFloat((element as HTMLElement).dataset.speed || '0.05');
      const x = (window.innerWidth / 2 - e.clientX) * speed;
      const y = (window.innerHeight / 2 - e.clientY) * speed;
      
      (element as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
    });
  };
  
  window.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
};

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

// Add new path animation function
export const animateSvgPaths = (svgElement: SVGElement) => {
  const paths = svgElement.querySelectorAll('path');
  
  paths.forEach((path, index) => {
    const length = path.getTotalLength();
    
    // Set up the starting position
    path.style.strokeDasharray = length.toString();
    path.style.strokeDashoffset = length.toString();
    
    // Trigger the animation
    setTimeout(() => {
      path.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
      path.style.strokeDashoffset = '0';
    }, index * 300);
  });
};

export { handleParallaxScroll };
