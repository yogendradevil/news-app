import React, { Component } from 'react'
import NewsItem from './NewsItem'



export default class NewsPage extends Component {
  
  constructor() {
    
    super();
    console.log("constructur called!");
    this.state = {
      articles: this.articles
    }
  }


  async componentDidMount(){
    // let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4deed33d50fb42039e49cd0c66114e8b"
    let {url} = this.props;
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({articles: parseddata.articles})
  }

  async componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      let {url} = this.props;
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(parseddata);
      this.setState({articles: parseddata.articles})
    }
  }

  render() {
    
    return (
      <div>
        <div className='container my-3'>
          <h1>Top Headlines,</h1>
          <div className="row">
            {this.state.articles && this.state.articles.map((element) => {
              return <div className="col md-3 my-3 mx-3">
                <NewsItem key={element.url} title={element.title} discription={element.description} newsurl={element.url} url={!element.urlToImage?"https://i.guim.co.uk/img/media/d12db99c242da3a3eba30bc179c5b3e765c8ffdb/191_287_3584_2150/master/3584.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1f298e5217e637a2d2a2be331f801850":element.urlToImage} />
              </div>
            })}
          </div>
        </div>
      </div>
    )
  }
}
