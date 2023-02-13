// import axios from 'axios';
    import React,{useState,useEffect} from 'react';
    import Card from '../card/Card';

    
    export default function Dashboard() {
    
    const[trending,setTrending] =useState([]);
    const[readlaterdb,setReadlaterdb] =useState([]);
    
    
        useEffect(() => {
            fetch("https://newsapi.org/v2/everything?q=Apple&from=2022-11-22&sortBy=popularity&apiKey=b9d4300cfd97498aaf1d54cd65436ef9")
            .then(resut => resut.json())
            .then(data => {
                setTrending(data.articles);
            })
        }, [])
    
          return (
            <div className='container'>
            <div className='row' style={{width:"max"}}>
                        {trending.map((news) => (
                            <Card
                            urlToImage={news.urlToImage}
                            title={news.title}
                            author={news.author}
                            description={news.description}
                            url={news.url}
                            />
                        ))
                        } 
            </div>
            </div>
        );
    };