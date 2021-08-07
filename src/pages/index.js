import React from 'react'
import { Link } from "gatsby";
import Header from '../Components/Header';
import Layout from '../Components/Layout';

function index() {
    return (
        <Layout>
 <Header title="Index Page"/>
            Hello Jani
            <br/>
            <Link to="/about/">About</Link>
        </Layout>
    )
}

export default index
