import React, { Fragment } from 'react'
import NavBar from './NavBar';


const Layout = (props) =>{

    return(
      <Fragment>
        <NavBar />
        {props.children}
      </Fragment>
    )

}

export default Layout;