import './MemeNavBar.css'
import trollface from '../assets/troll-face.svg'

export const MemeNavBar = () => (
  <nav className='meme-nav'>
    <span className='meme-nav-logo'>
      <img src={trollface} alt='trollface' />
      <h1 className='meme-nav-logo-title'>Meme Generator</h1>
    </span>
    <span className='meme-nav-header'>React Course - Project 3</span>
  </nav>
)
