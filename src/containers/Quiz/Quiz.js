import React, { Component } from 'react'
import {PageModal} from '../../components/UI/Modal/PageModal/PageModal'
import {Topics} from '../../components/Quiz/Topics/Topics'

export default class Quiz extends Component {
    state = {
        selectedTopic: ''
    }
    render() {
        return (
            <>
                <PageModal>
                   <Topics>

                   </Topics>
                </PageModal>
            </>
        )
    }
}
