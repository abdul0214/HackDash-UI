import React from 'react';

const Layout =({children}) =>{
    return(
        <>
        <div>
            <h1>This is Hack App</h1>
            {/* <ToolBar/> */}
            {/* <Sides/> */}
            {/* <Backdrop/> */}
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;