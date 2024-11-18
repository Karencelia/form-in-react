import { useState } from "react";

const AssForm = () => {
const [data, setData] = useState({ fname: '', age: '', stats: '', select: '', check: ''});
const handleSubmit = (e) => {
  e.preventDefault();
  alert(`Submitted: ${data}`);
};

const handleChange = (e) => {
  setData({...data, [e.target.name]: e.target.value });
};
}
 function Form() {
  return (
    <div>
      <form>
        <>
        <label>Full Name: </label>
        <input
          type="text"
          value={form.fname}
          onChange={(e) => (setData = e.target.value)}
        />
        <p>Input Value: {data}</p>
        </>
        <>
        <label>Age: </label>
        <input
          type="number" 
          value={form.age} 
        />
        <label>Marital Status: </label><br></br>
        <input 
          type="radio" 
          id="single" 
          name="single" 
          value={form.stats} 
          />
        <label for="single">Single</label>

        <input
         type="radio" 
         id="married" 
         name="married" 
         value={form.stats}
        />
        </>

        <>
        <label for="married">Married</label>

        <input
         type="radio"
         id="divorce" 
         name="divorce" 
         value={form.stats} 
        />

        <label for="divorce">Divorced</label>
        </>

        <>
        <label>Select Region: </label>
        <select value={form.select}>
          <option value="Ketu">Ketu</option>
          <option value="Ikeja">Ikeja</option>
          <option value="Mushin">Mushin</option>
          <option value="Ogba">Ogba</option>
        </select>
        </>

        <>
        <label>Enter A Message</label>
        <textarea name="message" ></textarea>

        <label>Select Sport: </label>
        <input type="checkbox"
          name="check" 
          value={form.check}
        />
        </>

        <>
        <label>Football</label>
        <input type="checkbox"
          name="check" 
          value={form.check}
        />

        <label>Basketball</label>
        <input type="checkbox"
          name="check" 
          value={form.check}
        />

        <label>Swimming</label>
        <input type="checkbox"
          name="check" 
          value={form.check}
        />
        </>
        <>
        <button type='submit' onClick={handleSubmit}>Submit</button></>
      </form>
    </div>
  );
}

export default AssForm;
