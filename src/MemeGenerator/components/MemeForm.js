import './MemeForm.css'
import { useEffect, useState } from 'react'
import { buttonOnEnterStyleFix } from '../hooks/buttonOnEnterStyleFix'
import { elementEnterToTab } from '../hooks/elementEnterToTab'
import { MemeData } from '../MemeData'

export const MemeForm = () => {
  useEffect(() => {
    buttonOnEnterStyleFix('meme-form-button', 'meme-form-button-active')
    elementEnterToTab('meme-form-textinputs')
    selectRandomImage()
  }, [])

  const [memeImage, setMemeImage] = useState()

  const selectRandomImage = () => {
    const memes = MemeData.data.memes
    const randomMem = memes[Math.floor(Math.random() * memes.length)]
    setMemeImage(randomMem.url)
  }

  return (
    <form className="meme-form">
      <section className="meme-form-textinputs">
        <input
          className="meme-form-textinput"
          id="meme-form-text-top"
          name="meme-form-text-top"
          placeholder="Top text"
        ></input>
        <input
          className="meme-form-textinput"
          id="meme-form-text-bottom"
          name="meme-form-text-bottom"
          placeholder="Bottom text"
        ></input>
      </section>
      <button
        className="meme-form-button"
        type="button"
        onClick={selectRandomImage}
      >
        <span className="meme-form-button-text">Get a new meme image</span> 🖼️
      </button>
      <img src={memeImage} alt="Meme" />
    </form>
  )
}
