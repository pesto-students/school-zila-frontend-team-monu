import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader({size}){
    return (
        <div>
            <CircularProgress size={size} />
        </div>
    )
}