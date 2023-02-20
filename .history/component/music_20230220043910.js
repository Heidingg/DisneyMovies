import { useState, useEffect } from 'react';
import useSound from 'use-sound';
export default function Sound() {
    const [isChecked, setIsChecked] = useState(
      false
    );
  
    const [play, { stop }] = useSound(fanfareSfx);
    const handleChange = event => {
      if (event.target.checked) {
      playOn();
      } else {
       playOff()
      }
      setIsChecked(current => !current);
    };
    return (
      <input
      type="checkbox"

        checked={isChecked}
        size={24}
        onChange={handleChange}
        />
      
    );
  }