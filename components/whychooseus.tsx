import React from 'react'
import Image from 'next/image'
import { FaUsers, FaMapMarkedAlt, FaAward, FaHeart } from 'react-icons/fa'

const WhyChooseUs = () => {
  return (
    <div className='bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-6'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-800'>
              Why Choose <span className='text-blue-600'>Zeelan Tours</span>?
            </h2>
            
            <p className='text-gray-700 text-lg leading-relaxed'>
              At Zeelan Tours, we believe in creating unforgettable experiences that go beyond typical tourism. 
              With years of expertise in showcasing the beauty of Sri Lanka, we craft personalized journeys that 
              connect you with the heart and soul of our island paradise.
            </p>
            
            <p className='text-gray-700 text-lg leading-relaxed'>
              From pristine beaches to ancient temples, from wildlife safaris to tea plantations, we ensure 
              every moment of your journey is filled with wonder and discovery. Our commitment is to help you 
              explore the green umbrella of Sri Lanka with care and authenticity.
            </p>

            {/* Statistics Grid */}
            <div className='grid grid-cols-2 gap-6 pt-6'>
              {/* Happy Travelers */}
              <div className='text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300'>
                <FaUsers className='text-5xl text-blue-600 mx-auto mb-3' />
                <div className='text-3xl font-bold text-gray-800'>1,000+</div>
                <div className='text-gray-600 font-medium mt-2'>Happy Travelers</div>
              </div>

              {/* Local Destinations */}
              <div className='text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300'>
                <FaMapMarkedAlt className='text-5xl text-green-600 mx-auto mb-3' />
                <div className='text-3xl font-bold text-gray-800'>50+</div>
                <div className='text-gray-600 font-medium mt-2'>Local Destinations</div>
              </div>

              {/* Years Experience */}
              <div className='text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300'>
                <FaAward className='text-5xl text-yellow-600 mx-auto mb-3' />
                <div className='text-3xl font-bold text-gray-800'>10+</div>
                <div className='text-gray-600 font-medium mt-2'>Years Experience</div>
              </div>

              {/* Satisfaction Rate */}
              <div className='text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300'>
                <FaHeart className='text-5xl text-red-600 mx-auto mb-3' />
                <div className='text-3xl font-bold text-gray-800'>98%</div>
                <div className='text-gray-600 font-medium mt-2'>Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Images Grid */}
          <div className='grid grid-cols-2 gap-4'>
            {/* Large image - top right */}
            <div className='col-span-2 lg:col-span-1 row-span-2'>
              <div className='relative h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                <Image
                  src='https://res.cloudinary.com/ddcwoi5kp/image/upload/v1771179629/sigiriya_yk2s1z.jpg'
                  alt='Sri Lanka Temple'
                  fill
                  className='object-cover hover:scale-110 transition-transform duration-500'
                />
              </div>
            </div>

            {/* Top right image - elephants */}
            <div className='relative h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'>
              <Image
                src='https://res.cloudinary.com/ddcwoi5kp/image/upload/v1771178781/elephants_gang_dfdsrx.jpg'
                alt='Wildlife Safari'
                fill
                className='object-cover hover:scale-110 transition-transform duration-500'
              />
            </div>

            {/* Bottom right image - beach */}
            <div className='relative h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'>
              <Image
                src='https://res.cloudinary.com/ddcwoi5kp/image/upload/v1771178783/buddha_dttojq.jpg'
                alt='Pristine Beaches'
                fill
                className='object-cover hover:scale-110 transition-transform duration-500'
              />
            </div>

            {/* Bottom landscape image */}
            <div className='col-span-2 relative h-56 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'>
              <Image
                src='https://res.cloudinary.com/ddcwoi5kp/image/upload/v1771178782/tea_xjeuvy.jpg'
                alt='Tea Plantations'
                fill
                className='object-cover hover:scale-110 transition-transform duration-500'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
