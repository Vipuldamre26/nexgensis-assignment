import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const DataContext = createContext();

const UserContext = ({ children }) => {

  // const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://potterapi-fedeperin.vercel.app/en/books',
  };


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [])




  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}

export default UserContext;