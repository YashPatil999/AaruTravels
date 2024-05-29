const imgs = {
    card1:
      "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    card2:
      "https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    card3:
      "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    card4:
      "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    card5:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    card6:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    card7:
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    card8:
      "https://images.unsplash.com/photo-1536323760109-ca8c07450053?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  };

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      const imageKey = `card${index + 1}`;
      const imageUrl = imgs[imageKey];
      if (imageUrl) {
        card.style.setProperty("background-image", `url(${imageUrl})`);
      }
    });

    document
      .getElementById("scrollLeftBtn")
      .addEventListener("click", scrollContainerLeft);
    document
      .getElementById("scrollRightBtn")
      .addEventListener("click", scrollContainerRight);
  });

  function scrollContainerLeft() {
    const container = document.getElementById("cardContainer");
    const cardWidth = container.querySelector(".card").offsetWidth + 20; // Width of a single card + margin
    container.scrollBy({ left: -cardWidth, behavior: "smooth" });
  }

  function scrollContainerRight() {
    const container = document.getElementById("cardContainer");
    const cardWidth = container.querySelector(".card").offsetWidth + 20; // Width of a single card + margin
    container.scrollBy({ left: cardWidth, behavior: "smooth" });
  }