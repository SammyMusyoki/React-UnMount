import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile.jsx'
import './style.css';

export default function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // React On unmount

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p className="time">Current time: {time}</p>

      <UserProfile 
      name= 'Sammy'
      age = {20}
      favouriteColors = {["green", "blue", "red"]}
      isAvailable = {false}
      />
    </div>
  );
}
