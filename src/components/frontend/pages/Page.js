import React from 'react'
import {
    useParams
  } from "react-router-dom";
export default function Page() {
    let { page } = useParams();
    return (
        <div className="main-cms-part">
            <h3>Page is : {page}</h3>
        </div>
    )
}
