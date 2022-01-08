import './MemeApp.css'
import { MemeNavBar } from './components/MemeNavBar'

export const MemeApp = () => {
  return (
    <div className='meme-app'>
      <header>
        <MemeNavBar />
      </header>
      <main></main>
    </div>
  )
}
