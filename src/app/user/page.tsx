import React from "react";

export default function User(){
    return(
        <div>
            <div>
                this is users Page
            </div>
            <button onClick={() => {throw Error("joijojoj")}}>Click</button>
        </div>
    )
}