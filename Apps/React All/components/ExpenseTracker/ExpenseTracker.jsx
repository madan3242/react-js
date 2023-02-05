import React, { useState } from 'react'
import Form from './Form';
import Tracker from './Tracker';

const ExpenseTracker = () => {
    const [track, setTrack] = useState([]);
  return (
    <>
        <Form track={track} setTrack={setTrack} />
        <Tracker track={track} />
    </>
  )
}

export default ExpenseTracker