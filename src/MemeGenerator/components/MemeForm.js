import './MemeForm.css'
import { useCallback, useEffect, useState } from 'react'
import { buttonOnEnterStyleFix } from '../hooks/buttonOnEnterStyleFix'
import { elementEnterToTab } from '../hooks/elementEnterToTab'

export const MemeForm = () => {
  const [meme, setMeme] = useState({
    textTop: '',
    textBottom: '',
    image: '',
  })

  const [allMemeImages, setAllMemeImages] = useState()

  const getMemesFromApi = useCallback((apiURL) => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((dataJSON) => {
        const memes = dataJSON.data.memes
        setAllMemeImages(memes)
        setMeme((prev) => ({
          ...prev,
          image: randomElement(memes).url,
        }))
      })
  }, [])

  const randomElement = (array) =>
    array[Math.floor(Math.random() * array.length)]

  const selectRandomImage = () => {
    setMeme((prev) => ({ ...prev, image: randomElement(allMemeImages).url }))
  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setMeme((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  useEffect(() => {
    buttonOnEnterStyleFix('meme-form-button', 'meme-form-button-active')
    elementEnterToTab('meme-form-textinputs')
    getMemesFromApi('https://api.imgflip.com/get_memes')
  }, [getMemesFromApi])

  return (
    <form className="meme-form" onSubmit={handleSubmit}>
      <section className="meme-form-textinputs">
        <input
          className="meme-form-textinput"
          name="textTop"
          placeholder="Top text"
          value={meme.textTop}
          onChange={handleChange}
        ></input>
        <input
          className="meme-form-textinput"
          name="textBottom"
          placeholder="Bottom text"
          value={meme.textBottom}
          onChange={handleChange}
        ></input>
      </section>
      <button className="meme-form-button" onClick={selectRandomImage}>
        <span className="meme-form-button-text">Get a new meme image</span> 🖼️
      </button>
      <div className="meme-form-meme">
        <img className="meme-form-meme-image" src={meme.image} alt="Meme" />
        <h2 className="meme-form-meme-text meme-form-meme-text-top">
          {meme.textTop}
        </h2>
        <h2 className="meme-form-meme-text meme-form-meme-text-bottom">
          {meme.textBottom}
        </h2>
      </div>
    </form>
  )
}
