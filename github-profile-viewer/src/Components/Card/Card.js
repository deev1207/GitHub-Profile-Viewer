import { useEffect, useState } from 'react'
import './Card.css'


export default function Card({repo}){
    const [topicsExist, setTopics] = useState(false)
    const {name,description,topics} = repo
    console.log(topicsExist);
    useEffect(()=>{
        console.log(topics);
        if(topics.length!=0){
            console.log(topics);
            setTopics(true)
        }
    }, [])

    return(
        <div className='card'>
            <div className='name'>{name}</div>
            <div className='desc'>{description}</div>
            {topicsExist && (
                <div>
                    {topics.map(topic=>(
                        <div className='topic'>{topic}</div>
                    ))}
                </div>
            )}
        </div>
    )
}