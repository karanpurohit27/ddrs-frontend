import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';


const Buy=()=>{
    const [files, setFiles] = useState([]);

    useEffect(() => {
        console.log("geett")
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        
        const response = await axios.get('http://localhost:5000/getfiles'); // Assuming your backend route is '/api/files'
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    return (
      <div>
        <h2>File Details</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index}>
                <td>{file.amount}</td>
                <td>{file.size}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )  
}

export default Buy;