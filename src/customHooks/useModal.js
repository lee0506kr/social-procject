import React, { useCallback, useState } from 'react';

const useModal = initialValue => {
  const [value, setValue] = useState(initialValue);

  const showModalHandler = () => {
    setValue(prev => !prev);
  };
  return [value, showModalHandler];
};

export default useModal;
