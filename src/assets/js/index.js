class CocktailBar {
  constructor() {}
  getContent(type, isCocktail) {
    $.ajax({
      type: "GET",
      url: `https://the-black-hoof.firebaseio.com/cocktail_bar-${type}.json`,
      success: data => {
        this.buildMenu(type, data, isCocktail);
      }
    });
  }
  buildMenu(type, data, isCocktail) {
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
}

const cocktailBar = new CocktailBar();

cocktailBar.getContent("seasonal", true);
cocktailBar.getContent("easy-drinking", true);
cocktailBar.getContent("mainstays", true);
cocktailBar.getContent("contemporary", true);
// leSwan.getContent("dessert");
// leSwan.getContent("milkshakes");
// leSwan.getContent("white-wine", true);
// leSwan.getContent("red-wine", true);
// leSwan.getContent("rose-wine", true);
// leSwan.getContent("orange-wine", true);
// leSwan.getContent("sparkling-wine", true);
