/* Makes buttons correctly react on press "Enter" */

export const buttonOnEnterStyleFix = (buttonClass, activeButtonClass) => {
  for (let button of document.getElementsByClassName(buttonClass)) {
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        button.classList.add(activeButtonClass)
      }
    })
    button.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        button.classList.remove(activeButtonClass)
      }
    })
  }
}