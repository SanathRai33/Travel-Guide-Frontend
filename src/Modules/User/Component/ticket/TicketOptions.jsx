import React from 'react'
import TicketCard from './TicketCard'

const TicketOptions = ({ activeOption, onOptionSelect }) => {
  
  const options = [
    { 
      title: "Bus", 
      description: "Affordable bus travel options", 
      icon: "bus" 
    },
    { 
      title: "Train", 
      description: "Book train tickets for comfortable travel", 
      icon: "train" 
    },
    { 
      title: "Flight", 
      description: "Fly to your destination quickly", 
      icon: "flight" 
    },
    { 
      title: "Yacht", 
      description: "Luxury yacht experiences", 
      icon: "yacht" 
    }
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {options.map((option) => (
        <TicketCard
          key={option.title}
          title={option.title}
          description={option.description}
          icon={option.icon}
          isActive={activeOption === option.title}
          onClick={() => onOptionSelect(option.title)}
        />
      ))}
    </div>
  )
}

export default TicketOptions