import React from "react"
import styles from './Left.module.scss';
import { useGallary } from '../../hooks/gallary-hook';
// import { useShowcase } from '../../hooks/showcase-hook';
import Img from "gatsby-image"

function Left() {
    const {allImagesFluid} = useGallary('brands','fluid');
    const allImagesArray = Object.keys(allImagesFluid).map(x => allImagesFluid[x]);
    const Temp = <div>
        {
            allImagesArray.map((a, index) => {
                return <div key={index} className={styles.brands}><Img  fluid={a}></Img></div>
            })
        }
    </div>

    return Temp;
}

export default Left;