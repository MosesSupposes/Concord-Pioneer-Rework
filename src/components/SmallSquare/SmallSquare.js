import React, { Component } from 'react'

const styles = {
    div: {
        display: 'inline-block',
    },

    img: {
        width: '200px',
        height: '200px'
    }
}



export default class SmallSquare extends Component {
    componentDidMount() {
        const { storeMetaInfo, id, date, description, company} = this.props
        storeMetaInfo({ 
            type: 'small square',
            id,
            description,
            date,
            company
        })
    }

    render() {
        const { image, description } = this.props
        return (
            <div style={styles.div} >
                <img style={styles.img} alt={description} src={image} />
            </div>
        )
    }
}