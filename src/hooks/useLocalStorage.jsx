import { useState } from "react";


export const useLocalStorage = (key = "TODOS_V1", initialValue = []) => {

    const localItem = localStorage.getItem(key);
    let parsedItem;


    if(!localItem){
        this.saveLocal(key, JSON.stringify(initialValue));
        parsedItem = initialValue;
    }else{
        parsedItem = JSON.parse(localItem);
    }

    const [ item, setItem ] = useState(parsedItem);

    const saveItem = (newItem) => {
        const string = JSON.stringify(newItem);
        localStorage.setItem(key, string);
        setItem(newItem);
    }

    return [item, saveItem];
}