const imgs = {
    "card1": "../Imgs/img6.jpg",
    "card2": "https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "card3": "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "card4": "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "card5": "../Imgs/img6.jpg"
  };

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".cardimage");
    cards.forEach((card, index) => {
      const imageKey = `card${index + 1}`;
      const imageUrl = imgs[imageKey];
      if (imageUrl) {
        card.style.backgroundImage = `url(${imageUrl})`;
        // If you want to apply images to :before pseudo-element
        card.style.setProperty('--background-image', `url(${imageUrl})`);
      }
    });
  });