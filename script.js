const filterButtons = document.querySelectorAll('.filter-button');
const skillGroups = document.querySelectorAll('.skill-group');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    skillGroups.forEach((group) => {
      group.classList.toggle('is-hidden', filter !== 'all' && group.dataset.category !== filter);
    });
  });
});

const revealItems = document.querySelectorAll('.about-content, .project, .experience-content, .skills-content, .contact-content');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));
