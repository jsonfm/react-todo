import { useState, useEffect } from "react";
import { TodosService } from "@/services/TodosService";


export const useLocalStorage = (key = "TODOS_V1", initialValue = []) => {

    const todosService = new TodosService();
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchTodos = async () => {
          try {
            const response = await todosService.fetchTodos(1000, key);
            setItem(response);
            setLoading(false);
          }catch(error){
            setError(error);
          }
        };
        fetchTodos();
    }, []);


    return [
        item, 
        setItem,
        loading,
        error,
    ];
}