import React from 'react'
import { Link } from "gatsby";
import Layout from '../Components/Layout';
import * as styles from "./about.module.css";


function About () {
    return (
        <Layout>
            <div>
            About Div Page
            <br/>
            <Link to="/"> Home Page</Link>
        </div>
       <div>
       <div className={styles.myComponent}>
            How with component styles
        </div>
       </div>
        </Layout>
        
    )
}

export default About 
