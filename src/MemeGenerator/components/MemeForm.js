import './MemeForm.css'
import { useEffect, useState } from 'react'
import { buttonOnEnterStyleFix } from '../hooks/buttonOnEnterStyleFix'
import { elementEnterToTab } from '../hooks/elementEnterToTab'
import { MemeData } from '../MemeData'

export const MemeForm = () => {
  useEffect(() => {
    buttonOnEnterStyleFix('meme-form-button', 'meme-form-button-active')
    elementEnterToTab('meme-form-textinputs')
  }, [])

  const [meme, setMeme] = useState({
    textTop: '',
    textBottom: '',
    image: 'http://i.imgflip.com/1bij.jpg',
  })

  const [allMemeImages, setAllMemeImages] = useState(MemeData)

  const selectRandomImage = () => {
    const memes = allMemeImages.data.memes
    const randomMem = memes[Math.floor(Math.random() * memes.length)]
    setMeme((prev) => ({ ...prev, image: randomMem.url }))
  }

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
      <button
        className='meme-form-button'
        type='button'
        onClick={selectRandomImage}
      >
        <span className='meme-form-button-text'>Get a new meme image</span> 🖼️
      </button>
      <img className='meme-image' src={meme.image} alt='Meme' />
    </form>
  )
}
