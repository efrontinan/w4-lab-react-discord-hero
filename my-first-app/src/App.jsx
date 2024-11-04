import './App.css'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'

const heroText = {
  mainText: {
    title: 'Imagine a place ...',
    message: '... where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.',
  },
  buttonText: {
    primaryButton: 'Download for Mac',
    secondaryButton: 'Open Discord in your browser',
  }
}

function App() {

  return (
    <div className="App">
      <Navbar />
      <Herosection
        title={heroText.mainText.title}
        message={heroText.mainText.message}
        primaryButton={heroText.buttonText.primaryButton}
        secondaryButton={heroText.buttonText.secondaryButton} />
    </div>
  )
}

export default App
