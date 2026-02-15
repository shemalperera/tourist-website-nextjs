import { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { AiFillCloseCircle, AiOutlineForm } from 'react-icons/ai'
import Form from '../components/form'

const Aboutus = () => {
  const [showForm, setshowForm] = useState(false);

  return (
    <div>
       <div className="bg-white lg:fixed lg:top-0 lg:z-50">
                <Header />
            </div>
          
         
          {(showForm) ?
            <div className=' max-md:hidden flex fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'><Form /><button className='flex' onClick={() => setshowForm(!showForm)}><AiFillCloseCircle className=' text-2xl' /></button></div> : <></>}
 
        <div className='mx-11 my-20 space-y-7'>
    <div className='grid grid-cols-1 text-center text-3xl font-bold'>About Us</div>
  <div>
    <p>
Namaste and Greetings from Zeelan Tours Travel & Tourism Travel Agency for India!!!!
Zeelan Tours tour operator is a local company specializing in India tours and organizes Holidays and sightseeing tours in India, Nepal, Tibet and Bhutan.
</p>

</div>
<div><p>Our main goal is to provide the trip of a lifetime and memories you will never forget. Our guides speak  English Spanish, Portuguese, German, French , Japanese, Italian and the local Hindi language. We work with groups and individual tours and we have regular departures from July to April, which is the best time to visit India tours.</p></div>
  <div className='grid grid-cols-2'>
    <div>
    <ul className='list-disc'>
        <li>
Traveling to India with family.</li>
<li>Enjoy the Indian wedding vacation.</li>
<li>
Rural Indian Travel and Camel Safari.</li>
<li>
Boat trip on lakes.</li>
    </ul>
    </div>

    <div className=''>
    <ul className='list-disc'>
        <li>
Traveling to India with family.</li>
<li>Enjoy the Indian wedding vacation.</li>
<li>
Rural Indian Travel and Camel Safari.</li>
<li>
Boat trip on lakes.</li>
    </ul>
    </div>
  </div>
  <div>
    <p>We are at your service and we prepare the itinerary according to your travel needs and requirements. Please send us a request to prepare your trip. It is confirmed that we will take better care of your trip to India.
</p>
  </div>
  <div>
    <h1>
Note: -</h1>
 
 
    <p>We would like to inform you if you want any changes to the itinerary/hotels or would like to add or delete any of your favorite destinations. Please send us a request to prepare your trip. It is Confirmed that We will design your dream trip perfectly. We are here to make your trip pleasant and unforgettable.
</p>
  </div>
  <div>
    <h1>
Important Note about Passports & Visas:-</h1>
    <p>VISA IS MANDATORY TO TRAVEL TO INDIA FOR ALL FOREIGNERS. YOU HAVE TO COMPLETE THE VISA PROCESS ON YOUR SIDE. You need a passport with about 06 months of Validity and a valid Visa and Passport and Visa processing is not included in the cost of the trip.
</p>
  </div>
  <div>
  <p>Welcome to Zeelan Tours.
</p>

  </div>
  </div>
  <Footer />
  </div>

  )
}

export default Aboutus