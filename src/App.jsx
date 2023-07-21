import Header from './Components/Header'
import './App.css'
import Footer from './Components/Footer'
import HeadlinePages from './Components/HeadlinePages'
import newsData from '../mockNewsData.json'

function App() {
    const results = newsData.mockApiResponse.response.results


    return (
        <div className='container'>
            <Header />
            <div className="container">
                <HeadlinePages newsData={results} />
            </div>
            <Footer />
        </div>
    )
}

export default App
