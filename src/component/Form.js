import { useState } from 'react';

function FormComponent() { 
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [formData, setFormData] = useState('');
    const handleSubmit = (e) => {e.preventDefault();
        alert(`Submitted: ${formData}`)
};
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <label className='text-lg font-bold'>Enter Your Name:</label>
            <input className='border-4 border-black border-solid' type='text' value={inputValue}
             onChange={(e) => setInputValue(e.target.value)} />
            <p>Input Value: {inputValue}</p>
            <label>Select from dropdown</label>
            <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)} >
                <option value="option 1">Option1</option>
                <option value="option 2">Option2</option>
                <option value="option 3">Option3</option>
            </select>
            <p>Select Value: {selectValue}</p>
            <input type='text' value={formData} onChange= {(e) => setFormData(e.target.value)} /> <br />
            <button className='bg-blue-500 text-white p-2 rounded-md' onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default FormComponent;