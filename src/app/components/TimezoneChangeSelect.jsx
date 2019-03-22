import React, { useCallback, useState } from 'react';
import { timezoneList, timezoneMap } from 'use-timezone';
import { useAppContextState } from '../context';

export function TimezoneChangeSelect() {
  const {timezone, updateTimezone} = useAppContextState();
  const [zoneName, updateZoneName] = useState(timezone.zoneName);
  
  const onChange = useCallback(event => {
    const nextZoneName = event.target.value;
    
    updateZoneName(nextZoneName);
    
    if (timezoneMap.has(nextZoneName)) {
      updateTimezone(nextZoneName);
    }
  }, [updateTimezone]);
  
  return (
    <>
      <input list="timezones"
             aria-invalid={!timezoneMap.has(zoneName)}
             value={zoneName}
             onChange={onChange}/>
      
      <datalist id="timezones">
        {
          timezoneList.map((tz) => (
            <option key={tz.zoneName} value={tz.zoneName}/>
          ))
        }
      </datalist>
    </>
  );
}