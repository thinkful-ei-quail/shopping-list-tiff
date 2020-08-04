function submit() {
  $("#js-shopping-list-form").submit(event => {
    event.preventDefault();
    const inputItem = $("#shopping-list-entry").val();//storing info
    if (inputItem != "") {
      $(".shopping-list").append(`<li>
            <span class="shopping-item">${inputItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`)
    }
  })
}

function clicks(){
  //toggle list item w/ hidden css
  $(".shopping-list").on('click', '.shopping-item-toggle', event => {
    let currentItemName = $(event.currentTarget).closest('li').find('.shopping-item')
      currentItemName.toggleClass('shopping-item__checked')
  })

  //remove or empty list item
  $('.shopping-list').on('click', '.shopping-item-delete', event => {
    let currentItem = $(event.currentTarget).closest('li')
    console.log(currentItem)
    currentItem.remove()
  })
}


$(clicks);
$(submit);
  //$("element").method("elementToChange")
  // ie: $(#class).append(src)
  // .className
  // #tagID