import React, {Fragment} from 'react';
import { useGallary } from '../../hooks/gallary-hook';
import Img from "gatsby-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import offersJson from '../../gallaries/offers/offers.json';
import styles from './main.module.scss';

function Main() {
    // const { offersAllImagesFluid, offersAllImagesFixed } = useOffers();
    const { allImagesFixed } = useGallary('offers');

    function getFormattedCurrency(amount) {
        return new Intl.NumberFormat('en-IN', { style: "currency", currency: 'INR', minimumFractionDigits: 0 }).format(amount);
    }

    function getItemFixed(fixed: any, imageJson: any, index: number) {
        const savePercent = ' ('.concat(String(Math.round((imageJson.mrp - imageJson.offerPrice) / imageJson.mrp * 100)), '%)');
        return <div className={styles.product} key={index}>
            <div className={styles.picture}>
                <Img fixed={fixed} ></Img>
            </div>
            <div className={styles.details}>
                <div>{imageJson.name}</div>
                <div>{imageJson.descr}</div>
                <div>{imageJson.specs}</div>
                <p>
                    <span className={styles.offerPrice}>
                        <FontAwesomeIcon icon={faRupeeSign} /> {imageJson.offerPrice}
                        {/* {getFormattedCurrency(imageJson.offerPrice)} */}
                    </span>
                    <del className={styles.mrp}>
                        <FontAwesomeIcon icon={faRupeeSign} /> {imageJson.mrp}
                        {/* {getFormattedCurrency(imageJson.mrp)} */}
                    </del>
                    <span className={styles.save}>
                        Save <FontAwesomeIcon icon={faRupeeSign} /> {imageJson.mrp - imageJson.offerPrice}{savePercent}
                        {/* {getFormattedCurrency(imageJson.mrp - imageJson.offerPrice)}{savePercent} */}
                    </span>
                </p>
            </div>
        </div>
    }

    function getAllItems() {
        const allItems: any[] = [];
        offersJson.forEach((j: any, index: number) => {
            allItems.push(getItemFixed(allImagesFixed[j.image], j, index));
        });
        return allItems;
    }

    const Temp =
        <Fragment>
            <h1 className={styles.heading}>Special Offer</h1>
            <div className={styles.main}>

                {
                    getAllItems()
                }
            </div>
        </Fragment>
    return Temp;
}

export default Main;