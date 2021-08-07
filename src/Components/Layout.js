import React from 'react'
import Header from './Header';



function Layout({children} ) {
    return (
        <div>
            <Header title="My Application"/>
            <div>{children}</div>
        </div> 
    )
}

export default Layout
