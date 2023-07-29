import { useState, useEffect } from 'react'
import Header from './Components/Header'
import './App.css'
import Footer from './Components/Footer'
import HeadlinePages from './Components/HeadlinePages'
// import newsData from '../mockNewsData.json'
import { getNews } from './utils/newsDataService';

function App() {

    const [news, setNews] = useState([]);

    const getData = async () => {
        const data = await getNews();
        // console.log(data)
        if (data instanceof Error) {
            setNews([]);
        } else {
            setNews(data);
            // console.log(data);
        }
    }


    useEffect(() => {
        getData();
    }, [])



    // results.then(res => console.log(res)).catch(err => console.log(err));


    return (
        <div className='container'>
            <Header />
            <div className="container">
                <HeadlinePages newsData={news} />
            </div>
            <Footer />
        </div>
    )
}

export default App
