import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = (props) => {
    const [value, setValue] = useState('');

    const handleChange = (content) => {
        setValue(content);
        props.handleChange(content);
    };



    console.log(value);

    return (
        <ReactQuill
            theme="snow"
            value={value}
            onChange={handleChange}
            className='w-6/12 h-4/5 bg-white'
        />
    );
}

export default Editor;
