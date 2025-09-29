import React, { useState } from "react";

// function component 
export default function Label({texto}){
    // chamada HOOK

    const [valor, setValor] = useState({texto})
    return(
        <>
            {valor} 
        </>
    );// fim return 
};// fim function Label