import React, { useState } from 'react';
import Editor from './Components/Editor';
import axios from 'axios';
import Navbar from './Components/Navbar';

const App = () => {
  let [data, setData] = useState('');

  async function handleChange(text) {
    await axios.post('http://localhost:8000/api', {
      html: text
    }).then((response) => {
      setData(response.data);
    });
  }

  return (
    <div className='h-screen'>
      <Navbar/>
      <div className='flex h-screen bg-gray-100 p-10' >
      <Editor handleChange={handleChange} />

      <textarea
        className='w-6/12 ml-8 h-5/6 p-5 border-2 resize-none rounded'
        value={data}
        placeholder='Converted LaTeX code will appear here...'
      />
      </div>
    </div>
  );
}

export default App;
