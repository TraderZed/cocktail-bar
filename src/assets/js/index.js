class CocktailBar {
  constructor() {}
  getContent(type, isCocktail) {
    $.ajax({
      type: "GET",
      url: `https://the-black-hoof.firebaseio.com/cocktail_bar-${type}.json`,
      success: data => {
        type === 'hours' ? this.buildHours(data) : this.buildMenu(type, data, isCocktail);
      }
    });
  }
  buildHours(data) {
    const $hoursTable = $(".hoof-info-hours");
    for (const val of data) {
      $hoursTable.append(`<tr><td>${val.day}</td><td>${val.hours}</td></tr>`);
    };
  }
  buildMenu(type, data, isCocktail) {
    if (data == null) {
      return;
    }
    const $menuList = $(`.cocktail-bar-menu__${type}`).find(".cocktail-bar-menu__list");
    for (const val of data) {
      $menuList.append(
        `<li class='cocktail-bar-menu__list-item'><span class="cocktail-bar-menu__list-item-name">${
          val.name
        }${
          isCocktail ? `<span>${val.description}</span>` : ""
        }</span><span class="cocktail-bar-menu__list-item-price">${
          val.price
        }</span></li>`
      );
    }
  }
  randomImage() {
    const $element = $(".header");
    var images = [
      'public/assets/images/ice.jpg',
      'public/assets/images/leaf.jpg',
      'public/assets/images/pour.jpg',
      'public/assets/images/slash.jpg'
    ];
    var size = images.length;
    var x = Math.floor(size * Math.random());

    $element[0].style["background-image"] = "url("+ images[x] + ")";
  }
}

const cocktailBar = new CocktailBar();

cocktailBar.randomImage();

cocktailBar.getContent("hours");
cocktailBar.getContent("snacks");

cocktailBar.getContent("seasonal", true);
cocktailBar.getContent("spirit-free", true);
cocktailBar.getContent("easy-drinking", true);
cocktailBar.getContent("mainstays", true);
cocktailBar.getContent("contemporary", true);
