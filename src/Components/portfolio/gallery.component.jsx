import React from 'react';

import ButtonComponent from '../button/button.component'


import './gallery.styles.scss'



class GalleryItem extends React.Component{
    constructor(props){
        super()
    }

    render() {
        return(
            <div className='galleryItem' style={{ backgroundImage: `url(${this.props.imageUrl})`}}>
                <div className='galleryTitles'>
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.subtitle}</h3>
                </div>
                <div className='galleryButtons'>
                    <ButtonComponent title='Live'/>
                    <ButtonComponent title='Code'/>
                </div>
            </div>
        )
    }
}

export default GalleryItem