import React from "react";


export const withStorageListener = (Wrapped) => {
    return function Wrapper({ sincronize }){
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener("storage", (change) => {
            if(change.key === "TODOS_V1" ){
                console.log("Cambios en TODOS_V1: ", change);
                setStorageChange(true);
            }
        });

        const toggleShow = () => {
            sincronize();
            setStorageChange(false);
        }

        return (
            <Wrapped 
                show={storageChange}
                toggleShow={toggleShow}
            />
        );
    }
}