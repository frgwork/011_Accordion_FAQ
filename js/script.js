document.querySelectorAll('.accordion__item').forEach(item => {
  const accordionHeader = item.querySelector('.accordion__header');

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open');
    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

function toggleItem(item) {
  const accordionContent = item.querySelector('.accordion__content');

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }
}
