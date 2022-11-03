import React, {useState, useEffect} from 'react';

function Digital() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString())
        }, 1000);
    }, []);
    
  return (
    <div>
        <h2>{currentTime}</h2>
    </div>
  )
}

export default Digital;