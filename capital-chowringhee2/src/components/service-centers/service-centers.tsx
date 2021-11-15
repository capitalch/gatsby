import React, { Fragment } from "react";
import styles from './service-centers.module.scss';
import centersjson from './centers.json';

function ServiceCenters() {

    function toCentersObject(centersJson: any[]) {
        const entries = {};
        centersJson.forEach(x => {
            entries[x.brand] = x.centers;
        });
        return entries;
    }

    function getDisplayItem(item: any, index: number) {
        const it = <div key={index} className={styles.center}>
            <div className={styles.name}>{item.name}</div>
            <div><b>Address:</b>{item.address}</div>
            <div><b>Pin:</b>{item.pin}</div>
            <div><b>Phone:</b>{item.phone}</div>
        </div>
        return it;
    }

    const centersObject = toCentersObject(centersjson);
    const centersObjectKeys: string[] = Object.keys(centersObject);
    const Temp = <div className={styles.serviceContainer}>
        {
            centersObjectKeys.map((centersKey, index) => {
                return <div key={index} >
                <h1 className={styles.heading}>{centersKey}</h1>
                    <div className={styles.brand}>
                        {
                            centersObject[centersKey].map((x: any, index: number) => {
                                return getDisplayItem(x, index);
                            })
                        }
                    </div>
                </div>
            })
        }
    </div>
    return Temp;
}

export default ServiceCenters;