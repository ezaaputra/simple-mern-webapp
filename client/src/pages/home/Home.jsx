import './home.css';
import React, { useState, useEffect } from 'react';
import axios from '../../axios'

function Home() {

  const [data, setData] = useState([])
  
  const getData = async () => {
    const response = await axios.get('/').catch((err) => {console.log(err)})
    if (response) {
      setData(response)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container">
      <code>data: {JSON.stringify(data.data)}</code>
      <code>headers: {JSON.stringify(data.headers)}</code>
      <code>status: {JSON.stringify(data.status)}</code>
      <code>statusText: {JSON.stringify(data.statusText)}</code>
    </div>
  );
}

export default Home;
