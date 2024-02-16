// components/Card.tsx
import React from 'react'

interface CardProps {
  title: string
  description: string
  imageUrl: string
  buttonText: string
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-4 text-gray-600">{description}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default Card
