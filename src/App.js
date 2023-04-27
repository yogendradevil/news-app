import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import NewsPage from './components/NewsPage';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {

  const [url, setUrl] = useState("https://newsapi.org/v2/top-headlines?country=us&apiKey=4deed33d50fb42039e49cd0c66114e8b");

  async function setTop(){
    setUrl("https://newsapi.org/v2/top-headlines?country=us&apiKey=4deed33d50fb42039e49cd0c66114e8b");
  }

  async function setIPL(){
    setUrl("https://newsapi.org/v2/everything?q=ipl&apiKey=4deed33d50fb42039e49cd0c66114e8b");
  }

  function setStock(){
    setUrl("https://newsapi.org/v2/everything?q=stockmarket&apiKey=4deed33d50fb42039e49cd0c66114e8b");
  }

  function setPolitics(){
    setUrl("https://newsapi.org/v2/everything?q=Politics&apiKey=4deed33d50fb42039e49cd0c66114e8b");
  }

  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
    <NavBar setTop={setTop} setIPL={setIPL} setStock={setStock} setPolitics={setPolitics} />
    {console.log("url is:"+url)}
    <NewsPage url={url}/>
    <Footer/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    </>
  );
}

export default App;
