import './MemeForm.css'
import { useEffect } from 'react'
import { buttonOnEnterStyleFix } from '../hooks/buttonOnEnterStyleFix'
import { elementEnterToTab } from '../hooks/elementEnterToTab'

export const MemeForm = () => {
  useEffect(() => {
    buttonOnEnterStyleFix('meme-form-button', 'meme-form-button-active')
    elementEnterToTab('meme-form-textinputs')    
  }, [])

  return (
    <form className='meme-form'>
      <section className='meme-form-textinputs'>
        <input
          className='meme-form-textinput'
          id='meme-form-text-top'
          name='meme-form-text-top'
          placeholder='Top text'
        ></input>
        <input
          className='meme-form-textinput'
          id='meme-form-text-bottom'
          name='meme-form-text-bottom'
          placeholder='Bottom text'
        ></input>
      </section>
      <button className='meme-form-button'>
        <span className='meme-form-button-text'>Get a new meme image</span> 🖼️
      </button>
    </form>
  )
}
