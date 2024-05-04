'use client';

import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount:number}) => {
    console.log(amount);
    
  return (
    <div>
        <CountUp end={amount} prefix='$' decimal='.' decimals={2}/>
    </div>
  )
}

export default AnimatedCounter