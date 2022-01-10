import './MemeApp.css'
import { MemeNavBar } from './components/MemeNavBar'
import { MemeForm } from './components/MemeForm'

export const MemeApp = () => {
  return (
    <div className='meme-app'>
      <header>
        <MemeNavBar />
      </header>
      <main className='meme-main'>
        <MemeForm />
      </main>
    </div>
  )
}
