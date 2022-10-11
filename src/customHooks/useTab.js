import React, { useState } from 'react';

const useTab = initialValue => {
  const [value, setValue] = useState(initialValue);

  const onClick = e => {
    console.log(e.target.innerHTML);
    setValue(e.target.innerHTML);
  };
  return [value, onClick];
};

export default useTab;
