
export const setupIntersectionObservers = () => {
  // Observer for feature cards
  const featureObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.add('translate-x-0');
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observer for section headers
  const headerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('visible');
            }, index * 150);
          });
        }
      });
    },
    { threshold: 0.1 }
  );

  // Apply to feature cards
  const featureCards = document.querySelectorAll('.feature-card, .network-card, .step-card, .cta-card');
  featureCards.forEach((card) => {
    featureObserver.observe(card);
  });

  // Apply to section headers
  const sectionHeaders = document.querySelectorAll('section, [id]');
  sectionHeaders.forEach((section) => {
    headerObserver.observe(section);
  });

  // Setup horizontal scroll animations
  document.querySelectorAll('.snap-start').forEach(section => {
    section.classList.add('opacity-0', 'translate-x-20', 'transition-all', 'duration-1000');
    const horizontalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('translate-x-20');
          }
        });
      },
      { threshold: 0.2 }
    );
    horizontalObserver.observe(section);
  });

  return () => {
    featureCards.forEach((card) => {
      featureObserver.unobserve(card);
    });
    sectionHeaders.forEach((section) => {
      headerObserver.unobserve(section);
    });
  };
};

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    // If on mobile, use vertical scrolling
    if (window.innerWidth < 768) {
      window.scrollTo({
        top: element.offsetTop - 80, // Account for navbar height
        behavior: 'smooth'
      });
    } else {
      // On desktop, use horizontal scrolling
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
  }
};

// Add smooth horizontal scroll navigation
export const initSmoothHorizontalScroll = () => {
  const scrollContainer = document.querySelector('.snap-x');
  
  if (scrollContainer && window.innerWidth >= 768) {
    scrollContainer.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY || e.deltaX;
      scrollContainer.scrollLeft += delta;
    }, { passive: false });
  }
};
