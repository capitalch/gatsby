import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer";
import Left from "../left/left";
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return <div className={styles.container}>
    <div className={styles.header}> <Header></Header> </div>    
    <div className={styles.left}> <Left></Left> </div>
    <div className={styles.main}> {children} </div>
    <div className={styles.footer}> <Footer></Footer> </div>
  </div>
}
export default Layout

/*

*/
