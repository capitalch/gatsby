import React, { Fragment } from 'react';
import { useGallary } from '../../hooks/gallary-hook';
import Img from "gatsby-image"
import styles from './shop.module.scss';

function Shop() {
    const { allImagesFluid } = useGallary('shopFluid','fluid');

    const allImages = Object.keys(allImagesFluid).map(x => allImagesFluid[x]);

    const Temp = <div className={styles.shop}>
        {
            allImages.map((x, index) => {
                return <Img key={index} fluid={x}></Img>
            })
        }
    </div>

    return Temp;
}

export default Shop;