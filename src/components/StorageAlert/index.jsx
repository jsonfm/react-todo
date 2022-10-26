import React from "react";
import { UilRefresh } from '@iconscout/react-unicons'
import { withStorageListener } from "@/hoc/withStorageListener";
import { UilExclamationTriangle } from '@iconscout/react-unicons';

import "./styles.css";

export const StorageAlert = ({ show, toggleShow }) => {
    return(
        <>
        {show &&
            <div class="storage-alert-container">
                <div class="storage-alert">
                    <div class="message"> <UilExclamationTriangle /> Parece que hubieron cambios en otra pestaña del navegador.</div>
                    <div class="refresh-button" onClick={toggleShow}>
                        <UilRefresh />  Recargar
                    </div>
                </div>   
            </div>  
        }
        </>

    );
}

export const StorageAlertWithListener = withStorageListener(StorageAlert);
