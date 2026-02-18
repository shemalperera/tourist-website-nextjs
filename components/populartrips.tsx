import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'

type DestinationCard = {
  slug: string
  name: string
  shortDescription?: string
  imageUrl: string
}

const PopularTrips = ({ destinations }: { destinations: DestinationCard[] }) => {
   
  return (
    <div>
      <div className="grid grid-cols-1 gap-1 p-2 mt-4">
        <div className='mx-auto text-4xl lg:text-4xl font-bold text-gray-800'>Popular Destinations</div>
        <div className='flex items-center mx-auto text-sm font-semibold text-red-500 hover:text-cyan-700 hover:cursor-pointer'>View all Destination<AiOutlineArrowRight/></div>
        </div>
    
<div className='grid grid-cols-4 p-11'>
  {destinations.map((destination) => (
    <div
      key={destination.slug}
      className='flex flex-col gap-2 bg-white shadow-slate-200 p-1 h-84'
    >
      <div>
        <Image
          className='h-72 rounded-lg'
          src={destination.imageUrl}
          alt={destination.name}
          width={500}
          height={500}
        />
      </div>
      <div className='flex mx-auto text-3xl font-serif font-semibold'>{destination.name}</div>
    </div>
  ))}
</div>
</div>
  )
}

export default PopularTrips