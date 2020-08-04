function submit() {
  $("#submitButton").click(event => {
    event.preventDefault();
    console.log('hi')
    const inputItem = $("shopping-list-entry").val();//storing info
    if (inputItem != "") {
      $(".shopping-list").append(`<li>
            <span class="shopping-item">"${inputItem}"</span>
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


  $(submit);


  //toggle list item w/ hidden css
  $(".shopping-item-toggle").click(event => {
    event.preventDefault();
    if (String.match('#shopping-item')) {
      $('#shopping-item').css('.shopping-item_checked')
    }
  })

  //remove or empty list item
  $('.shopping-item-delete').click(event => {
    event.preventDefault();
    $('inputItem').empty()
  })
}

  //$("element").method("elementToChange")
  // ie: $(#class).append(src)
  // .className
  // #tagID