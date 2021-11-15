import React, { Fragment } from 'react';
import { useGallary } from '../../hooks/gallary-hook';
import Img from "gatsby-image"
import styles from './workshop.module.scss';

function Workshop() {
    const { allImagesFluid } = useGallary('workshop','fluid');

    const allImages = Object.keys(allImagesFluid).map(x => allImagesFluid[x]);

    const Temp = <div className={styles.workshop}>
        {
            allImages.map((x, index) => {
                return <Img key={index} fluid={x}></Img>
            })
        }
    </div>

    return Temp;
}

export default Workshop;