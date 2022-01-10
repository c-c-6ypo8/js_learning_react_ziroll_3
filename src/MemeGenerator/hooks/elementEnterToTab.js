// Changes Enter bahavior to Tab for all of the elements of provided class name

export const elementEnterToTab = (elementClass) => {
  for (let element of document.getElementsByClassName(elementClass)) {
    element.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        var form = event.target.form
        var index = Array.prototype.indexOf.call(form, event.target)
        form.elements[index + 1].focus()
        event.preventDefault()
      }
    })
  }
}
