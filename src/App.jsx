import Header from './Components/Header'
import './App.css'
import Footer from './Components/Footer'
import HeadlinePages from './Components/HeadlinePages'

function App() {


    return (
        <div className='container'>
            <Header />
            <div className="container">
                <HeadlinePages />
            </div>
            <Footer />
        </div>
    )
}

export default App
