import React, {Fragment} from 'react';
import './FormPress.css';

const FormPress = props => {
  return (
    <Fragment>
      <div className='Inp'>
        <input type="text" placeholder='Write a film' onChange={props.inputVal}/>
      </div>
      <div className='Btn'>
        <button onClick={props.added}>Add</button>
      </div>
    </Fragment>
  );
};

export default FormPress;