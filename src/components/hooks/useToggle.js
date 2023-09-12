import { useState } from 'react';

const useToggle = (init) => {
  const [toggleValue, setToggleValue] = useState(init);

  function toggle() {
    setToggleValue(val => !val);
  }

  return [
    toggleValue,
    toggle,
  ]
};

export default useToggle;