import React from 'react'

export default function Section({number=0, title='Title', body='Body'}){
  return (
    <section className='py-12 border-t'>
      <div className='container-max'>
        <div className='flex gap-6 items-start'>
          <div className='text-indigo-600 font-bold text-2xl'>{number}</div>
          <div>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='mt-2 text-gray-700'>{body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
