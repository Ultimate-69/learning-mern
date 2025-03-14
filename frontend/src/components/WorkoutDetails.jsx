import React from 'react'

import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default function WorkoutDetails({ workout }) {

  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
      method: 'DELETE'
    });
    //const json = await response.json();
    console.log('hi');


    if (response.ok) {
      window.location.reload();
    };
  };

  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
        <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
    </div>
  )
}
