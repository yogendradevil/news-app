import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, discription, url, newsurl } = this.props;
        return (
            <div>
                <div className="card" style={{ width: '23rem' }}>
                    <img src={url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <a href={newsurl} target='_blank' className="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
