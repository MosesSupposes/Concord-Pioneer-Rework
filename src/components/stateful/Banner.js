import React, {Component} from 'react' 

const styles = {
    div: {
display: 'inline-block'
    },

img: {
    width: '468px',
    height: '60px'
}
}

class Banner extends Component {
    componentDidMount() {
        const {storeMetaInfo, id, date, description, company} = this.props
        storeMetaInfo({
            type: 'banner',
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

export default Banner