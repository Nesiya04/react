import React, { useState } from 'react';

function Mywebval() {
  const [formData, setFormData] = useState({
    username: '',
    age: null,
  });
  const [errMsg, setErrMsg] = useState('');

  const uservalue = (event) => {
    const n = event.target.name;
    const v = event.target.value;
    let err = '';

    if (n === 'age') {
      if (v === '' || isNaN(v)) {
        err = <strong>Invalid Value, Your age must be a number</strong>;
      }
    }

    setErrMsg(err);
    setFormData((prev) => ({
      ...prev,
      [n]: v,
    }));
  };

  return (
    <div>
      <h1>Hello {formData.username}</h1>
      <h2>Your Age is {formData.age}</h2>
      <form>
        <p>Enter your name :</p>
        <input type="text" name="username" onChange={uservalue} />
        <p>Enter your age :</p>
        <input type="text" name="age" onChange={uservalue} />
        {errMsg && <div>{errMsg}</div>}
        <h3>Thank You !!</h3>
      </form>
    </div>
  );
}

export default Mywebval;