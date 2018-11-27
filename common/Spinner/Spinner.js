import React from 'react';
import {ClipLoader} from 'react-spinners';

import './Spinner.scss';

const Spinner = (props) => {

      return (
          <div className='custom-spinner'>
                <ClipLoader
                    sizeUnit={"px"}
                    size={50}
                    color={'#123abc'}
                />
                <h1>{props.spinnerText}</h1>
          </div>
      )
};

Spinner.defaultProps = {
      spinnerText: 'Loading...'
};

export default Spinner;