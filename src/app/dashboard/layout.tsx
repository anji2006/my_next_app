import React from "react";


interface DashLayoutProps {
    children: React.ReactElement
}

export default function Layout(props:DashLayoutProps){
    const {children} = props;
    return(
        <div>
            <div>
                this is Dash Layout....
            </div>
            {children}
        </div>
    )
}