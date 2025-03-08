
export const setupIntersectionObservers = () => {
  // Observer for feature cards
  const featureObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.add('translate-y-0');
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
    window.scrollTo({
      top: element.offsetTop - 80, // Account for navbar height
      behavior: 'smooth'
    });
  }
};

// Fix for the TypeScript error by using WheelEvent instead of Event
const handleParallaxScroll = (e: WheelEvent) => {
  const deltaY = e.deltaY;
  const deltaX = e.deltaX;
  return { deltaY, deltaX };
};

export { handleParallaxScroll };
