
import React, {memo} from "react";

export const Header = memo(function Header({title}){

    console.log('Header Rendered');
    return (
        <div>
            <h1>My name is {title}</h1>
        </div>
    )
})