$(document).ready(function(){

$('#todo-form').on('submit', function(event) {
    event.preventDefault()

    var input = $('#todo-input').val()
    var newElement = '<li>' + input + '</li >'
    $('#todo-list').append(newElement)

    $('#todo-input').val('')
    console.log(input)
  })
})
