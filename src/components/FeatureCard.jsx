import React from 'react'

export default function FeatureCard({title, body}){
  return (
    <div className='p-6 border rounded-lg shadow-sm hover:shadow-md transition'>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-sm text-gray-600'>{body}</p>
    </div>
  )
}
