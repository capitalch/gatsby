import React, { Fragment } from 'react';
import { useShowcase } from '../../hooks/showcase-hook';
import Img from "gatsby-image"
import showcaseJson from '../../images/products/showcase/showcase.json';
import offersJson from '../../images/products/offers/offers.json';
import styles from './showcase.module.scss';

// &#x20B9;

function Showcase() {
    const { itemsAllImagesFluid, itemsAllImagesFixed } = useShowcase();
    const x = 0;
    // const racks = {};

    function toRacksObject(itemsMeta: any[]) {
        const racksObject = {};
        itemsMeta.forEach(x => {
            if (x.rack) {
                racksObject[x.rack] || (racksObject[x.rack] = []);
                racksObject[x.rack].push(x);
            }
        })
        return racksObject;
    }

    function getFormattedCurrency(amount) {
        return new Intl.NumberFormat('en-IN', { style: "currency", currency: 'INR', minimumFractionDigits: 0 }).format(amount);
    }

    function getItemFluid(fluid: any, imageJson: any, index: number) {
        const savePercent = ' ('.concat(String(Math.round((imageJson.mrp - imageJson.offerPrice) / imageJson.mrp * 100)), '%)');
        return <div className={styles.product} key={index}>
            <div className={styles.picture}><Img fluid={fluid} ></Img></div>
            <div className={styles.details}>
                <div>{imageJson.name}</div>
                <div>{imageJson.descr}</div>
                <div>{imageJson.specs}</div>
                <p>
                    <span className={styles.offerPrice}>
                        {getFormattedCurrency(imageJson.offerPrice)}
                    </span>
                    <del className={styles.mrp}>
                        {getFormattedCurrency(imageJson.mrp)}
                    </del>
                    <span className={styles.save}>
                        Save {getFormattedCurrency(imageJson.mrp - imageJson.offerPrice)}{savePercent}
                    </span>
                </p>
            </div>
        </div>
    }

    function getAllItems() {
        const allItems: any[] = [];
        // offersJson.forEach((j: any, index: number) => {
        //     allProducts.push(getItemFluid(offersAllImagesFluid[j.image], j, index));

        // });
        // return allProducts;
        Object.keys(itemsAllImagesFluid).forEach((x: any, index: number) => {
            allItems.push(
                <div key={index} style={{ width: '436px', height: '326px' }}><Img fluid={itemsAllImagesFluid[x]}></Img></div>
            )
        });
        return allItems;
    }

    function getDisplayItem(item: any, index: number) {
        const temp = <div key={index}>
            <div style={{ width: '436px', height: '326px' }}>
                <Img fluid={itemsAllImagesFluid[item.image]}></Img>
            </div>
            <div>{item.name}</div>
        </div>
        return temp;
    }

    const racksObject: any = toRacksObject(showcaseJson);
    const racksObjectKeys: string[] = Object.keys(racksObject);
    const Temp = <div className={styles.showcase}>
    
        {racksObjectKeys.map((racksKey, index) => {
            return <Fragment key={index}> <h1 >{racksKey }</h1>
             <div  className={styles.rack}>
                    {
                        racksObject[racksKey].map((x: any, index: number) => {
                            return getDisplayItem(x, index);
                        })
                    }
                </div>
            </Fragment>
        })
        }


        {/* <h2>Rack1</h2>
        <div className={styles.rack}>
            {
                getAllItems().map(x => x)
            }
        </div> */}
        {/* <h2>Rack2</h2>
        <div className={styles.rack}>
            {
                getAllItems().map(x => x)
            }
        </div>
        <h2>Rack3</h2>
        <div className={styles.rack}>
            {
                getAllItems().map(x => x)
            }
        </div>
        <h2>Rack4</h2>
        <div className={styles.rack}>
            {
                getAllItems().map(x => x)
            }
        </div> */}
    </div>

    return Temp;
}

export default Showcase;