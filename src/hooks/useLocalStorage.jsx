import { useState, useEffect } from 'react';
import { TodosService } from '@/services/TodosService';


export const useLocalStorage = (key = 'TODOS_V1', initialValue = []) => {
  const todosService = new TodosService();
  const [sincronizedItem, setSincronizedItem ] = useState(false);

  // 
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await todosService.fetchTodos(1000, key);
        console.log("response: ", response);
        setItem(response);
        setLoading(false);
        setSincronizedItem(true);
      } catch (error) {
        setError(error);
      }
    };
    fetchTodos();
  }, [sincronizedItem]);

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  }

  return {
    item, 
    setItem, 
    loading, 
    error, 
    sincronizeItem
  };
};
