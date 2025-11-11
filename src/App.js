import './App.css';
import { Box, } from '@mui/material';
import { useState, useEffect } from 'react';
function App() {
  const [nome, setNome] = useState("")
  const [test, setTest] = useState("")

  function saveContent(){
    localStorage.setItem('test', JSON.stringify(test))
  }

  useEffect(() => {
    const savedValue = localStorage.getItem('test');
    setTest( savedValue ? JSON.parse(savedValue) : '');
  }, [])

  return (
      <Box sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "blue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Box sx={{
          width: "300px",
          height:"300px",
          backgroundColor: "red",
        }}>
          <Box sx={{
            width: "300px",
            height: "100px",
            backgroundColor: "green"
          }}>
            <Box sx={{
            width: "100px",
            height: "100px",
            backgroundColor: "white"
          }}></Box>
          <Box sx={{
            width: "100px",
            height: "100px",
            backgroundColor: "orange"
          }}></Box>
          <Box sx={{
            width: "100px",
            height: "100px",
            backgroundColor: "red"
          }}></Box>
          </Box>
          <Box sx={{
            width: "300px",
            height: "100px",
            backgroundColor: "purple"
          }}></Box>
          <Box sx={{
            width: "300px",
            height: "100px",
            backgroundColor: "black"
          }}></Box>

        </Box>
      </Box>
  );
}

export default App;
