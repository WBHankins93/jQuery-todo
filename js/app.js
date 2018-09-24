// Need to find button and make on click function on it
$('button').on('click', () => {

  const $info = $('input').val();
  console.log($info);
  createTodo($info)
})

const createTodo = (inputValue) => {

  const $div = $('<div/>').addClass('todos');

  $div.append('<h5>' + inputValue + '</h5>');

  const $button = $('<button/>').on('click', completeTodo);

  $button.text('completed');

  $div.append($button);

  $('#col-1').append($div);
}

const completeTodo = (event) => {

  const $currentTodo = $(event.currentTarget).parent()
  console.log($currentTodo);

  $('#col-2').append($currentTodo);
}
