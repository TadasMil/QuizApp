import React from 'react'
import {Topic} from './Topic/Topic'
import classes from './Topics.module.scss'

const topics = [
    {
        id: 1,
        type: 'sports',
        name: 'Sports'
    },
    {
        id: 2,
        type: 'geography',
        name: 'Geography'
    },
    {
        id: 3,
        type: 'polytics',
        name: 'Polytics'
    },
    {
        id: 4,
        type: 'celebrities',
        name: 'Celebrities'
    },
    {
        id: 5,
        type: 'computers',
        name: 'Science: Computers'
    },
    {
        id: 6,
        type: 'math',
        name: 'Science: Mathematics'
    },
]

export const Topics = () => {
    return (
        <div className={classes.Topics}>
            {   topics.map(topic=>{
                    return <Topic key={topic.id} topicInfo={topic} />
            })}
        </div>
    )
}
