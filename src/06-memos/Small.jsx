// import {memo} from 'react'
import React from "react";

export const Small = React.memo(({value}) => {

    console.log('Me volví a redibujar');

    return (
        <small>{value}</small>
    )
})
