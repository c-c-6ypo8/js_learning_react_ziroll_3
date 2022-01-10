/* Sets focus to focusedElement after form of class formClass got submitted. */

export const setFocusOnFormSubmit = (formClass, focusedElement) => {
  // TODO: Sets listener on window load if there is ALL GET parameters from the
  //forms with the provided class

  // Sets listener on window load id there is any GET parameters from the forms
  // with the provided class
  window.addEventListener('load', () => {
    document.location.search.substring(1) && focusedElement?.focus()
  })

  // Setting listener for the forms where the submit method is POST
  // TODO: check if it's a POST method
  for (let form of document.getElementsByClassName(formClass)) {
    form.addEventListener('submit', (event) => {
      console.log(event)
      focusedElement?.focus()
      // event.preventDefault()
    })
  }
}
