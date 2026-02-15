import Image from "next/image"
import Header from "../../components/header"
import { MdFoodBank, MdOutlineKeyboardArrowRight } from "react-icons/md"
import { AiFillCheckCircle, AiFillCloseCircle, AiFillMinusCircle, AiFillStar, AiOutlineArrowRight, AiOutlineClockCircle, AiOutlineFieldTime, AiOutlinePlusCircle } from "react-icons/ai"
import Example from "../../components/calender"
import { BiDollar } from "react-icons/bi"
import { RiHotelFill } from "react-icons/ri"
import { BsTelephoneForward, BsStarHalf } from "react-icons/bs"
import { useState } from "react"
import Footer from "../../components/footer"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
import Link from "next/link"



const NorthIndiaTour = () => {
    const [showDay1, setshowDay1] = useState(false);
    const [showDay2, setshowDay2] = useState(false);
    const [showDay3, setshowDay3] = useState(false);
    const [showDay4, setshowDay4] = useState(false);
    const [showDay5, setshowDay5] = useState(false);
    const [showDay6, setshowDay6] = useState(false);
    const [showDay7, setshowDay7] = useState(false);
    const [showDay8, setshowDay8] = useState(false);
    const [showDay9, setshowDay9] = useState(false);
    const [showDay10, setshowDay10] = useState(false);
    const [showDay11, setshowDay11] = useState(false);

    SwiperCore.use([Autoplay])
    return (
        <div>
            <div className="bg-white lg:fixed lg:top-0 lg:z-50">
                <Header />
            </div>
            <div className="grid grid-cols-1 lg:mt-24 lg:px-11 lg:py-4 max-lg:hidden">
                <div className="flex items-center lg:text-lg gap-4 font-Roboto">
                    <div ><Link href={'/'} className="hover:text-blue-800 text-bluemix">Home</Link></div>
                    <MdOutlineKeyboardArrowRight />
                    <div><Link href={'/alltours'} className="hover:text-blue-800 text-bluemix">Tours</Link></div>
                    <MdOutlineKeyboardArrowRight />
                    <div><Link href={'/north-india-tour'} className="hover:text-blue-800 text-orangemix">Best of North India Tour</Link></div>
                </div>
            </div>
            <div className="grid grid-cols-1  font-Nunito font-medium  lg:px-11 max-lg:p-4">

                <div className="lg:text-4xl  max-lg:text-2xl max-lg:font-bold">
                    Best of North India Tour
                </div>
                <div className="flex lg:flex-row max-lg:flex-col">
                    <div className='flex items-center gap-1 pt-1 px-2'>
                        <div className='flex items-center  text-orangemix'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><BsStarHalf /></div>
                        <div>(7 Reviews)</div>
                    </div>
                    <div className='flex  items-center gap-1  text-gray-600 font-semibold pl-1 pt-1'><AiOutlineFieldTime className='text-2xl text-green-500' /> <div className='text-lg'>15 to 25 Days</div></div>
                </div>
            </div>
            <div className='grid grid-cols-1  lg:px-8 lg:py-4 max-lg:p-2'>
                <div className='grid lg:grid-cols-2 max-lg:grid-cols-1'>
                    <div className='grid grid-cols-1'>
                        <div>
                            <Image className="object-cover w-max  rounded-l-2xl"
                                src={'/asset/tours/north-india-tour/varanasi1.jpg'}
                                alt="taj-mahal"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                    <div className="grid grid-rows-2">
                        <div className="grid grid-cols-2">
                            <div className="px-1 pb-1">
                                <Image className="w-80 h-52 "
                                    src={'/asset/tours/golden-traingle/alberthall.jpg'}
                                    alt="taj-mahal"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div className="px-1 pb-1">
                                <Image className=" rounded-tr-2xl w-80 h-52 "
                                    src={'/asset/tours/golden-traingle/taj-mahal.jpg'}
                                    alt="taj-mahal"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-1 pt-1">
                                <Image className="w-80 h-52 "
                                    src={'/asset/tours/north-india-tour/orchha.jpg'}
                                    alt="taj-mahal"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div className="px-1 pt-1">
                                <Image className=" rounded-br-2xl w-80 h-52"
                                    src={'/asset/tours/north-india-tour/khajuraho.jpg'}
                                    alt="taj-mahal"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className=" grid lg:grid-cols-6  max-lg:grid-rows-4 lg:p-4">
                <div className=" lg:col-span-4 max-lg:row-span-3 lg:p-4">
                    <div className="max-lg:hidden gap-3 flex flex-row px-5 justify-between ">

                        <div className="flex gap-3 font-Roboto items-center max-lg:w-44">
                            <div className="flex justify-center items-center rounded-xl bg-slate-100 w-auto lg:rounded-xl p-2 h-auto border border-gray-500"><AiOutlineClockCircle className='text-2xl text-gray-500' /></div>
                            <div className="">
                                <div className="text-base font-semibold">Duration</div>
                                <div className="text-sm text-gray-600 font-semibold">15 to 25 Days</div>
                            </div>
                        </div>

                        <div className="flex gap-3 font-Roboto items-center">
                            <div className="flex justify-center items-center bg-slate-100 w-auto rounded-xl p-2 h-auto border border-gray-500"><BiDollar className='text-2xl text-greenmix' /></div>
                            <div className="">
                                <div className="text-base font-semibold">Price</div>
                                <div className="text-sm text-gray-600 font-semibold">$1699</div>
                            </div>
                        </div>



                        <div className="flex gap-3 w-44 font-Roboto items-center">
                            <div className="flex justify-center items-center bg-slate-100 w-auto rounded-xl p-2 h-auto border border-gray-500"><MdFoodBank className='text-2xl text-orangemix' /></div>
                            <div className="">
                                <div className="text-base font-semibold">Breakfast</div>
                                <div className="text-sm text-gray-600 font-semibold">Included</div>
                            </div>
                        </div>

                        <div className="flex gap-3 font-Roboto items-center">
                            <div className="flex justify-center items-center bg-slate-100 w-auto rounded-xl p-2 h-auto border border-gray-500"><RiHotelFill className='text-2xl text-blue-500' /></div>
                            <div className="">
                                <div className="text-base font-semibold">Hotels</div>
                                <div className="text-sm text-gray-600 font-semibold">All Category</div>
                            </div>
                        </div>
                    </div>

                    <div className=" lg:hidden grid grid-rows-2  px-4 py-2">
                        <div className="flex">
                            <div className="flex gap-3 font-Roboto items-center max-lg:w-44">
                                <div className="flex justify-center items-center rounded-xl bg-slate-100 w-auto lg:rounded-xl p-2 h-auto border border-gray-500"><AiOutlineClockCircle className='text-2xl text-gray-500' /></div>
                                <div className="">
                                    <div className="text-base font-semibold">Duration</div>
                                    <div className="text-sm text-gray-600 font-semibold">15 to 25 Days</div>
                                </div>
                            </div>

                            <div className="flex gap-3 font-Roboto items-center">
                                <div className="flex justify-center items-center bg-slate-100 w-auto rounded-xl p-2 h-auto border border-gray-500"><BiDollar className='text-2xl text-greenmix' /></div>
                                <div className="">
                                    <div className="text-base font-semibold">Price</div>
                                    <div className="text-sm text-gray-600 font-semibold">$1699</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex gap-3 w-44 font-Roboto items-center">
                                <div className="flex justify-center items-center bg-slate-100 w-auto rounded-xl p-2 h-auto border border-gray-500"><MdFoodBank className='text-2xl text-orangemix' /></div>
                                <div className="">
                                    <div className="text-base font-semibold">Breakfast</div>
                                    <div className="text-sm text-gray-600 font-semibold">Included</div>
                                </div>
                            </div>

                            <div className="flex gap-3 font-Roboto items-center">
                                <div className="flex justify-center items-center bg-slate-100 w-auto rounded-xl p-2 h-auto border border-gray-500"><RiHotelFill className='text-2xl text-blue-500' /></div>
                                <div className="">
                                    <div className="text-base font-semibold">Hotels</div>
                                    <div className="text-sm text-gray-600 font-semibold">All Category</div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="lg:p-4 max-lg:p-2">
                        <div className=" font-Roboto text-3xl font-semibold lg:p-4">About this Tour</div>
                        <div className=" font-Poppins lg:pl-4 max-lg:text-sm lg:text-base lg:text-gray-600">
                            This is the detailed and suggested itinerary of the best of North India. India will surprise you with new experiences. a different flavor, a new adventure and its culture. Travel to the heart of the country and see the best places in India.
                        </div>
                    </div>
                    <div className=" max-lg:p-2 lg:p-4">

                        <div className=" font-Roboto text-3xl font-semibold lg:p-4">Included/Excluded</div>
                        <div className="grid lg:grid-cols-2 max-lg:grid-cols-1 text-gray-600 text-sm">
                            <div className=" font-Poppins lg:pl-4">
                                <ul className=" list-none leading-8">
                                    <li className="flex gap-1 items-center">
                                        <div><AiFillCheckCircle className="text-green-600 text-lg" /></div>
                                        <div >Welcome and reception at the airport and briefing.</div>
                                    </li>
                                    <li className="flex gap-1 items-center"><div><AiFillCheckCircle className="text-green-600 text-lg" /></div>
                                        <div>The daily breakfast in the mentioned hotels.</div></li>
                                    <li className="flex gap-1 items-center">
                                        <div><AiFillCheckCircle className="text-green-600 text-lg" /></div>
                                        <div>The English-speaking guide in all cities.</div></li>
                                    <li className="flex gap-1 items-center">
                                        <div><AiFillCheckCircle className="text-green-600 text-lg" /></div>
                                        <div>Accommodation in the hotels.</div></li>
                                    <li className="flex gap-1 items-center">
                                        <div><AiFillCheckCircle className="text-green-600 text-lg" /></div>
                                        <div>The well-educated driver for the entire trip.</div></li>
                                    <li className="flex gap-1 items-center">
                                        <div><AiFillCheckCircle className="text-green-600 text-lg" /></div>
                                        <div>Air-conditioned private vehicle.</div></li>
                                    <li className="flex gap-1 items-center">
                                        <div><AiFillCheckCircle className="text-green-600 text-lg" /></div>
                                        <div>Receive at each airport on arrival and departure.</div></li>
                                    <li className="flex gap-1 items-center">
                                        <div><AiFillCheckCircle className="text-green-600 text-lg" /></div>
                                        <div>A Rikshaw ride in Old Delhi.</div></li>
                                    <li className="flex gap-1 items-center">
                                        <div><AiFillCheckCircle className="text-green-600 text-lg" /></div>
                                        <div>Enjoy an elephant ride in Jaipur city.</div></li>
                                    <li className="flex gap-1 items-center">
                                        <div><AiFillCheckCircle className="text-green-600 text-lg" /></div>
                                        <div>Sunrise, a boat ride on holy river Ganges in Varanasi.</div></li>
                                    <li className="flex gap-1 items-center">
                                        <div><AiFillCheckCircle className="text-green-600 text-lg" /></div>
                                        <div>Night ceremony of holy river Ganges in Varanasi.</div></li>
                                    <li className="flex gap-1 items-center">
                                        <div><AiFillCheckCircle className="text-green-600 text-lg" /></div>
                                        <div>Government Service Tax.</div></li>
                                </ul>
                            </div>
                            <div className=" font-Poppins lg:pl-4">
                                <ul className=" list-none leading-8">
                                    <li className="flex gap-1 items-center"><div><AiFillCloseCircle className="text-red-500 text-lg" /></div>
                                        <div>International Flights are not included in the package.</div></li>
                                    <li className="flex gap-1 items-center"><div><AiFillCloseCircle className="text-red-500 text-lg" /></div>
                                        <div>The monuments entrances and Tips for guide.</div></li>
                                    <li className="flex gap-1 items-center">
                                        <div><AiFillCloseCircle className="text-red-500 text-lg" /></div>
                                        <div>Laundry, telephone calls, table drinks.</div></li>
                                    <li className="flex gap-1 items-center">
                                        <div><AiFillCloseCircle className="text-red-500 text-lg" /></div>
                                        <div>any other expense of a personal nature.</div></li>

                                    <li className="flex gap-1 items-center">
                                        <div><AiFillCloseCircle className="text-red-500 text-lg" /></div>
                                        <div>Visa not included in the package.</div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 max-lg:p-2">
                        <div className='flex flex-col  border border-gray-400 rounded-xl font-Roboto'>
                            <div className='flex justify-between items-center p-4'>
                                <div className='flex items-center gap-4'><div className=" text-white max-lg:text-sm rounded-md p-2 bg-purple-700 ">Day - 01</div><div className="max-lg:text-sm max-lg:text-left max-lg:overflow-hidden max-lg:w-52">NEW DELHI - Welcome to Zeelan Tours</div></div>
                                <div className='flex items-center'>{(!showDay1) ? <button onClick={() => setshowDay1(!showDay1)}><AiOutlinePlusCircle className='max-lg:text-2xl lg:text-3xl text-gray-700' /></button> : <></>}
                                    {(showDay1) ? <button onClick={() => setshowDay1(!showDay1)}><AiFillMinusCircle className=' max-lg:text-2xl lg:text-3xl text-redmix' /></button> : <></>}
                                </div>
                            </div>
                            <div>
                                {(showDay1) ?
                                    <div className='text-justify font-Poppins p-4 transition duration-150 ease-in-out leading-8'>On your arrival, you will be meet to our representative at the airport and transferred via private vehicle to your hotel. This city is the modern capital of India. Delhi is the main gateway to the country. A first-time visitor to the city would find a bewildering variety and diversity of culture, religion, people and of course the food. We will deliver all the documents to you related to the trip. Over Night stay at the Hotel.</div> : <></>}
                            </div>
                        </div>

                        <div className='flex flex-col  border border-gray-400 rounded-xl font-Roboto'>
                            <div className='flex justify-between items-center p-4'>
                                <div className='flex items-center gap-4'><div className="text-white max-lg:text-sm rounded-md p-2 bg-purple-700 ">Day - 02</div><div className="max-lg:text-sm max-lg:text-left max-lg:overflow-hidden max-lg:w-52">Visit Old and New Delhi</div></div>
                                <div className='flex items-center'>{(!showDay2) ? <button onClick={() => setshowDay2(!showDay2)}><AiOutlinePlusCircle className='max-lg:text-2xl lg:text-3xl text-gray-700' /></button> : <></>}
                                    {(showDay2) ? <button onClick={() => setshowDay2(!showDay2)}><AiFillMinusCircle className=' max-lg:text-2xl lg:text-3xl text-redmix' /></button> : <></>}
                                </div>
                            </div>
                            <div>
                                {(showDay2) ?
                                    <div className='text-justify font-Poppins p-4 transition duration-150 ease-in-out leading-8'>After Breakfast, In the morning explore Old Delhi narrow streets and colourful Market during a rickshaw ride. Then we will visit Jama Masjid, the largest mosque in India in Old Delhi. Visit Raj Ghat, the cremation site of Mahatma Gandhi. Go through Rajpath, it is the ceremonial boulevard in front of the President House. Qutub Minar, The Qutb Minar is made of red sandstone and marble a UNESCO site in Delhi. Visit the Gurudwara Bangla Sahiba a religious of the religion Sikh. Over Night stay at the Hotel.</div> : <></>}
                            </div>
                        </div>


                        <div className='flex flex-col  border border-gray-400 rounded-xl font-Roboto'>
                            <div className='flex justify-between items-center p-4'>
                                <div className='flex items-center gap-4'><div className="text-white max-lg:text-sm rounded-md p-2 bg-purple-700 ">Day - 03</div><div className="max-lg:text-sm max-lg:text-left max-lg:overflow-hidden max-lg:w-52">NEW DELHI- JAIPUR</div></div>
                                <div className='flex items-center'>{(!showDay3) ? <button onClick={() => setshowDay3(!showDay3)}><AiOutlinePlusCircle className='max-lg:text-2xl lg:text-3xl text-gray-700' /></button> : <></>}
                                    {(showDay3) ? <button onClick={() => setshowDay3(!showDay3)}><AiFillMinusCircle className=' max-lg:text-2xl lg:text-3xl text-redmix' /></button> : <></>}
                                </div>
                            </div>
                            <div>
                                {(showDay3) ?
                                    <div className='text-justify font-Poppins p-4 transition duration-150 ease-in-out leading-8'>After Breakfast, In the morning departure to Jaipur in the private car, On the route from Delhi to Jaipur we will see the rural life of India and the fields. Jaipur is known as the Pink City of India, the traditional color of Welcome. Apart from its extravagant Rajput architecture, Jaipur has one of the largest Markets in the country, known above all for its handicrafts. Jaipur is one of the cities in India with the most historical and one of the most visited. Arrive at Jaipur and check-in at the hotel. In the afternoon we will visit the Birla temple and go through the Albert Hall Museum to take beautiful photos. Over Night stay at the Hotel.</div> : <></>}
                            </div>
                        </div>


                        <div className='flex flex-col  border border-gray-400 rounded-xl font-Roboto'>
                            <div className='flex justify-between items-center p-4'>
                                <div className='flex items-center gap-4'><div className="text-white max-lg:text-sm rounded-md p-2 bg-purple-700 ">Day - 04</div><div className="max-lg:text-sm max-lg:text-left max-lg:overflow-hidden max-lg:w-52">Visit the City JAIPUR and AMBER</div></div>
                                <div className='flex items-center'>{(!showDay4) ? <button onClick={() => setshowDay4(!showDay4)}><AiOutlinePlusCircle className='max-lg:text-2xl lg:text-3xl text-gray-700' /></button> : <></>}
                                    {(showDay4) ? <button onClick={() => setshowDay4(!showDay4)}><AiFillMinusCircle className=' max-lg:text-2xl lg:text-3xl text-redmix' /></button> : <></>}
                                </div>
                            </div>
                            <div>
                                {(showDay4) ?
                                    <div className='text-justify font-Poppins p-4 transition duration-150 ease-in-out leading-8'>After Breakfast, In the morning driver for Amber fort and on the route take beautiful pictures of Hawa Mahal The Palace of Winds, Its pink five-floor high facade studded with a series of 953 windows. Then drive for Amber Fort, enjoy the elephant ride and visit the beautiful palaces of Amber Fort like Sabha Niwas, Sheesh Mahal, Ganesh Pol, Sukh Niwas and Man Singh Palace. Photo shoot on Jal Mahal Water Palace, In the afternoon visit City Palace Museuem and Jantar Mantar, is the largest stone and marble observatory in the world. After the sightseeing visit the market of handicraft, The town offers traditional shops perfect for buying antiques, jewelry, handicrafts, cloths, pashmina, carpets and metal. Over Night stay at the Hotel.
                                    </div> : <></>}
                            </div>
                        </div>

                        <div className='flex flex-col  border border-gray-400 rounded-xl font-Roboto'>
                            <div className='flex justify-between items-center p-4'>
                                <div className='flex items-center gap-4'><div className="text-white max-lg:text-sm rounded-md p-2 bg-purple-700 ">Day - 05</div><div className="max-lg:text-sm max-lg:text-left max-lg:overflow-hidden max-lg:w-52">JAIPUR - ABHANERI - AGRA</div></div>
                                <div className='flex items-center'>{(!showDay5) ? <button onClick={() => setshowDay5(!showDay5)}><AiOutlinePlusCircle className='max-lg:text-2xl lg:text-3xl text-gray-700' /></button> : <></>}
                                    {(showDay5) ? <button onClick={() => setshowDay5(!showDay5)}><AiFillMinusCircle className=' max-lg:text-2xl lg:text-3xl text-redmix' /></button> : <></>}
                                </div>
                            </div>
                            <div>
                                {(showDay5) ?
                                    <div className='text-justify font-Poppins p-4 transition duration-150 ease-in-out leading-8'>After Breakfast. in the morning, Departure To Agra. On the Way We Will Visit Abhaneri, Is A Small Village and is Popular for The Chand Baori Step Well and Harshat Mata Temple. Visit Chand Baori Built in 08th Century By a Local Ruler Raja Chanda, Chand Baori Consists Of 3,500 Narrow Steps Over 13 Stories. Harshat Mata Temple is A Hindu Temple, Dedicated to A Goddess Called Harshta Mata. Arrive in Agra and Check-in At The Hotel. In The Afternoon Visit The Garden Mehtab Bagh, It is a Very Famous Garden to See a Beautiful View Of Taj Mahal and Take Photos of Taj Mahal.Over Night Stay at The Hotel.</div> : <></>}
                            </div>
                        </div>

                        <div className='flex flex-col  border border-gray-400 rounded-xl font-Roboto'>
                            <div className='flex justify-between items-center p-4'>
                                <div className='flex items-center gap-4'><div className="text-white max-lg:text-sm rounded-md p-2 bg-purple-700 ">Day - 06</div><div className="max-lg:text-sm max-lg:text-left max-lg:overflow-hidden max-lg:w-52">VISIT AGRA CITY </div></div>
                                <div className='flex items-center'>{(!showDay6) ? <button onClick={() => setshowDay6(!showDay6)}><AiOutlinePlusCircle className='max-lg:text-2xl lg:text-3xl text-gray-700' /></button> : <></>}
                                    {(showDay6) ? <button onClick={() => setshowDay6(!showDay6)}><AiFillMinusCircle className=' max-lg:text-2xl lg:text-3xl text-redmix' /></button> : <></>}
                                </div>
                            </div>
                            <div>
                                {(showDay6) ?
                                    <div className='text-justify font-Poppins p-4 transition duration-150 ease-in-out leading-8'>After Breakfast. Visit the famous Taj Mahal, the legendary monument of love. The Taj Mahal is widely recognized as the jewel of Muslim art in India, and remains one of the most famous structures in the world and a symbol of India rich history. It was built by Emperor Shah Jehan in 1630 with marble, to remember his beloved Mumtaz Mahal (closed on every Friday). Visit the Red Fort a UNESCO site and it is a historical fort which remained the main residence of the Mughal emperors until 1638. You can also visit the Agra souvenir market. Visit the tomb of Etmad Ud daula also known as Bay Taj Mahal in Agra. Over Night stay at the Hotel.</div> : <></>}
                            </div>
                        </div>

                        <div className='flex flex-col  border border-gray-400 rounded-xl font-Roboto'>
                            <div className='flex justify-between items-center p-4'>
                                <div className='flex items-center gap-4'><div className="text-white max-lg:text-sm rounded-md p-2 bg-purple-700 ">Day - 07</div><div className="max-lg:text-sm max-lg:text-left max-lg:overflow-hidden max-lg:w-52">AGRA - JHANSI - ORCHHA - KHAJURAHO</div></div>
                                <div className='flex items-center'>{(!showDay7) ? <button onClick={() => setshowDay7(!showDay7)}><AiOutlinePlusCircle className='max-lg:text-2xl lg:text-3xl text-gray-700' /></button> : <></>}
                                    {(showDay7) ? <button onClick={() => setshowDay7(!showDay7)}><AiFillMinusCircle className=' max-lg:text-2xl lg:text-3xl text-redmix' /></button> : <></>}
                                </div>
                            </div>
                            <div>
                                {(showDay7) ?
                                    <div className='text-justify font-Poppins p-4 transition duration-150 ease-in-out leading-8'>After Breakfast, In the morning transfer to Railway station to take the train for Jhansi. Arrival at Jhansi you will be received by the representative of Zeelan Tours. On the way we will Visiting the cities Jhansi and Orchha. Orchha is a historical town, it has a richly illustrated history that spans several centuries. We will visit the Fort of Orchha and the temple of Ram Raja. In the afternoon, Arrived at Khajuraho and This city is known for the temples that display the creative Hindu architecture. The temples also known as Kamasutra temple. The temples were built between the 10th and 11th centuries. Over Night stay at the Hotel.</div> : <></>}
                            </div>
                        </div>


                        <div className='flex flex-col  border border-gray-400 rounded-xl font-Roboto'>
                            <div className='flex justify-between items-center p-4'>
                                <div className='flex items-center gap-4'><div className="text-white max-lg:text-sm rounded-md p-2 bg-purple-700 ">Day - 08</div><div className="max-lg:text-sm max-lg:text-left max-lg:overflow-hidden max-lg:w-52">KHAJURAHO  VARANASI (THE SACRED RIVER GANGES) </div></div>
                                <div className='flex items-center'>{(!showDay8) ? <button onClick={() => setshowDay8(!showDay8)}><AiOutlinePlusCircle className='max-lg:text-2xl lg:text-3xl text-gray-700' /></button> : <></>}
                                    {(showDay8) ? <button onClick={() => setshowDay8(!showDay8)}><AiFillMinusCircle className=' max-lg:text-2xl lg:text-3xl text-redmix' /></button> : <></>}
                                </div>
                            </div>
                            <div>
                                {(showDay8) ?
                                    <div className='text-justify font-Poppins p-4 transition duration-150 ease-in-out leading-8'>After Breakfast, In the morning Visit the group of famous Chandela Dynasty temples, which are renowned for their exquisite erotic sculptures and carvings. Head to the Western Group of Temples that are dedicated to Hindu God Shiva and God Vishnu. Afternoon departure for the flight to Varanasi. It is an oldest city in the world. Varanasi or Benares and also known as Kashi (City of Life). Arrive in Varanasi and check-in at the hotel. Over Night stay at the Hotel.</div> : <></>}
                            </div>
                        </div>


                        <div className='flex flex-col  border border-gray-400 rounded-xl font-Roboto'>
                            <div className='flex justify-between items-center p-4'>
                                <div className='flex items-center gap-4'><div className="text-white max-lg:text-sm rounded-md p-2 bg-purple-700 ">Day - 09</div><div className="max-lg:text-sm max-lg:text-left max-lg:overflow-hidden max-lg:w-52">Visit the City VARANASI</div></div>
                                <div className='flex items-center'>{(!showDay9) ? <button onClick={() => setshowDay9(!showDay9)}><AiOutlinePlusCircle className='max-lg:text-2xl lg:text-3xl text-gray-700' /></button> : <></>}
                                    {(showDay9) ? <button onClick={() => setshowDay9(!showDay9)}><AiFillMinusCircle className=' max-lg:text-2xl lg:text-3xl text-redmix' /></button> : <></>}
                                </div>
                            </div>
                            <div>
                                {(showDay9) ?
                                    <div className='text-justify font-Poppins p-4 transition duration-150 ease-in-out leading-8'>After Breakfast, In the morning we will visit Sarnath, it is one of the four holy cities of Buddhism. It has a good collection of Buddhist sculptures and relics. The Kashi Vishwanath temple is dedicated to Lord Shiva. It is one of the most famous Hindu temples. The Bharat Mata temple (meaning mother of India) is the national personification of India. In the afternoon we will visit the holy river Ganges to attend the evening ceremony of the Ganges. The Ghats in Varanasi built along the river banks for different religious activities attract many travellers far from and wide.
                                        Over Night stay at the Hotel.</div> : <></>}
                            </div>
                        </div>


                        <div className='flex flex-col  border border-gray-400 rounded-xl font-Roboto'>
                            <div className='flex justify-between items-center p-4'>
                                <div className='flex items-center gap-4'><div className="text-white max-lg:text-sm rounded-md p-2 bg-purple-700 ">Day - 10</div><div className="max-lg:text-sm max-lg:text-left max-lg:overflow-hidden max-lg:w-52">VARANASI - NEW DELHI</div></div>
                                <div className='flex items-center'>{(!showDay10) ? <button onClick={() => setshowDay10(!showDay10)}><AiOutlinePlusCircle className='max-lg:text-2xl lg:text-3xl text-gray-700' /></button> : <></>}
                                    {(showDay10) ? <button onClick={() => setshowDay10(!showDay10)}><AiFillMinusCircle className=' max-lg:text-2xl lg:text-3xl text-redmix' /></button> : <></>}
                                </div>
                            </div>
                            <div>
                                {(showDay10) ?
                                    <div className='text-justify font-Poppins p-4 transition duration-150 ease-in-out leading-8'>In the early morning, sunrise boat ride on the holy river Ganges in Varanasi. The ancient city of Varanasi, is located on the banks of the Ganges River and the Ghats of the holy Ganges River. The ghats are centres of a large number of religious activities.  This experience is very mystical and peaceful, it is exciting to see people offering their prayers and taking a bath in the river. Return to the hotel for breakfast. In the afternoon, departure for the flight to Delhi. Arrival in Delhi and check-in at the hotel. Over Night stay at the Hotel.</div> : <></>}
                            </div>
                        </div>


                        <div className='flex flex-col  border border-gray-400 rounded-xl font-Roboto'>
                            <div className='flex justify-between items-center p-4'>
                                <div className='flex items-center gap-4'><div className="text-white max-lg:text-sm rounded-md p-2 bg-purple-700 ">Day - 11</div><div className="max-lg:text-sm max-lg:text-left max-lg:overflow-hidden max-lg:w-52">NEW DELHI - Return to Your Country</div></div>
                                <div className='flex items-center'>{(!showDay11) ? <button onClick={() => setshowDay11(!showDay11)}><AiOutlinePlusCircle className='max-lg:text-2xl lg:text-3xl text-gray-700' /></button> : <></>}
                                    {(showDay11) ? <button onClick={() => setshowDay11(!showDay11)}><AiFillMinusCircle className=' max-lg:text-2xl lg:text-3xl text-redmix' /></button> : <></>}
                                </div>
                            </div>
                            <div>
                                {(showDay11) ?
                                    <div className='text-justify font-Poppins p-4 transition duration-150 ease-in-out leading-8'>After Breakfast. In the morning Transfer to the airport, Flight from New Delhi to your country.
                                        We are sure that you will have these unforgettable memories forever. Namaste & Greetings!!!!!
                                    </div> : <></>}
                            </div>
                        </div>



                    </div>

                    <div className="mt-4 max-lg:py-4 lg:p-4 lg:hidden w-screen">
                        <iframe className=" w-fit mx-auto" src="https://www.google.com/maps/d/embed?mid=1JdH7ivTV97OOIh3N3CRVP2_WlS8XTY8&ehbc=2E312F" width="800" height="480"></iframe>
                    </div>
                </div>
                <div className="lg:col-span-2 max-lg:row-span-1 lg:p-1 max-lg:px-4 max-lg:pt-11">
                    <div className=" lg:sticky lg:top-16 ">
                        <div className='w-fit p-4 border border-gray-400 rounded-xl'>
                            <div className='text-orangemix font-serif font-semibold text-3xl mb-2'>Request a Quote</div>
                            <div className='grid grid-cols-2 gap-2 w-fit font-Roboto'>
                                <div className='grid grid-cols-1 gap-2'>
                                    <div className='flex flex-col gap-1'>
                                        <label className=' text-gray-800 '>Name</label>
                                        <input className='px-1 py-2 border border-gray-400' placeholder='enter your name' />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <label className=' text-gray-800 '>Email</label>
                                        <input className='px-1 py-2 border border-gray-400' placeholder='enter your email' />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <label className=' text-gray-800'>Contact No.</label>
                                        <input className='px-1 py-2 border border-gray-400' placeholder='enter your contact no.' />
                                    </div>

                                </div>


                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor="name">Your Country</label>
                                        <select className='border  border-gray-400  px-2 py-2' name="cars" id="cars" >
                                            <option value="opel">select country</option>
                                            <option value="opel">Australia</option>
                                            <option value="saab">Argentina</option>
                                            <option value="audi">Afghanistan</option>
                                            <option value="audi">Albania</option>
                                            <option value="audi">Algeria</option>
                                            <option value="audi">Andorra</option>
                                            <option value="audi">Angola</option>
                                            <option value="audi">Antigua</option>
                                            <option value="audi">Armenia</option>
                                            <option value="audi">Austria</option>
                                            <option value="audi">Azerbaijan</option>
                                            <option value="audi">Bahamas</option>
                                            <option value="audi">Bahrain</option>
                                            <option value="audi">Bangladesh</option>
                                            <option value="audi">Barbados</option>
                                            <option value="audi">Belarus</option>
                                            <option value="audi">Belgium</option>
                                            <option value="audi">Belize</option>
                                            <option value="audi">Benin</option>
                                            <option value="audi">Bhutan</option>
                                            <option value="audi">Bolivia</option>
                                            <option value="audi">Bosnia</option>
                                            <option value="audi">Botswana</option>
                                            <option value="audi">Brazil</option>
                                            <option value="audi">Brunei</option>
                                            <option value="audi">Bulgaria</option>
                                            <option value="audi">Burkina Faso</option>
                                            <option value="audi">Burundi</option>
                                            <option value="audi">Cabo Verde</option>
                                            <option value="audi">Cambodia</option>
                                            <option value="audi">Cameroon</option>
                                            <option value="audi">Canada</option>
                                            <option value="audi">Chad</option>
                                            <option value="audi">Chile</option>
                                            <option value="audi">China</option>
                                            <option value="audi">Colombia</option>
                                            <option value="audi">Comoros</option>
                                            <option value="audi">Congo</option>
                                            <option value="audi">Croatia</option>
                                            <option value="audi">Cuba</option>
                                            <option value="audi">Cyprus</option>
                                            <option value="audi">Czechia</option>
                                            <option value="audi">Denmark</option>
                                            <option value="audi">Djibouti</option>
                                            <option value="audi">Dominica</option>
                                            <option value="audi">Dominican Republic</option>
                                            <option value="audi">Ecuador</option>
                                            <option value="audi">Egypt</option>
                                            <option value="audi">El Salvador</option>
                                            <option value="audi">Equatorial Guinea</option>
                                            <option value="audi">Eritrea</option>
                                            <option value="audi">Estonia</option>
                                            <option value="audi">Eswatini</option>
                                            <option value="audi">Ethiopia</option>
                                            <option value="audi">Fiji</option>
                                            <option value="audi">Finland</option>
                                            <option value="audi">France</option>
                                            <option value="audi">Gabon</option>
                                            <option value="audi">Gambia</option>
                                            <option value="audi">Georgia</option>
                                            <option value="audi">Germany</option>
                                            <option value="audi">Greece</option>
                                            <option value="audi">Ghana</option>
                                            <option value="audi">Grenada</option>
                                            <option value="audi">Guatemala</option>
                                            <option value="audi">Guinea</option>
                                            <option value="audi">Guinea-Bissau</option>
                                            <option value="audi">Guyana</option>
                                            <option value="audi">Haiti</option>
                                            <option value="audi">Holy See</option>
                                            <option value="audi">Honduras</option>
                                            <option value="audi">Hungary</option>
                                            <option value="audi">Iceland</option>
                                            <option value="audi">Indonesia</option>
                                            <option value="audi">Iran</option>
                                            <option value="audi">Iraq</option>
                                            <option value="audi">Ireland</option>
                                            <option value="audi">Israel</option>
                                            <option value="audi">Italy</option>
                                            <option value="audi">Jamaica</option>
                                            <option value="audi">Japan</option>
                                            <option value="audi">Jordan</option>
                                            <option value="audi">Kazakhstan</option>
                                            <option value="audi">Kenya</option>
                                            <option value="audi">Kiribati</option>
                                            <option value="audi">Kuwait</option>
                                            <option value="audi">Kyrgyzstan</option>
                                            <option value="audi">Laos</option>
                                            <option value="audi">Latvia</option>
                                            <option value="audi">Lebanon</option>
                                            <option value="audi">Lesotho</option>
                                            <option value="audi">Liberia</option>
                                            <option value="audi">Libya</option>
                                            <option value="audi">Liechtenstein</option>
                                            <option value="audi">Lithuania</option>
                                            <option value="audi">Luxembourg</option>
                                            <option value="audi">Madagascar</option>
                                            <option value="audi">Malawi</option>
                                            <option value="audi">Malaysia</option>
                                            <option value="audi">Maldives</option>
                                            <option value="audi">Mali</option>
                                            <option value="audi">Malta</option>
                                            <option value="audi">Marshall Islands</option>
                                            <option value="audi">Mauritania</option>
                                            <option value="audi">Mauritius</option>
                                            <option value="audi">Mexico</option>
                                            <option value="audi">Micronesia</option>
                                            <option value="audi">Moldova</option>
                                            <option value="audi">Monaco</option>
                                            <option value="audi">Mongolia</option>
                                            <option value="audi">Montenegro</option>
                                            <option value="audi">Morocco</option>
                                            <option value="audi">Mozambique</option>
                                            <option value="audi">Myanmar</option>
                                            <option value="audi">Namibia</option>
                                            <option value="audi">Nauru</option>
                                            <option value="audi">Nepal</option>
                                            <option value="audi">Netherlands</option>
                                            <option value="audi">New Zealand</option>
                                            <option value="audi">Nicaragua</option>
                                            <option value="audi">Niger</option>
                                            <option value="audi">Nigeria</option>
                                            <option value="audi">North Korea</option>
                                            <option value="audi">North Macedonia</option>
                                            <option value="audi">Norway</option>
                                            <option value="audi">Oman</option>
                                            <option value="audi">Pakistan</option>
                                            <option value="audi">Palau</option>
                                            <option value="audi">Palestine State</option>
                                            <option value="audi">Panama</option>
                                            <option value="audi">Papua New Guinea</option>
                                            <option value="audi">Paraguay</option>
                                            <option value="audi">Peru</option>
                                            <option value="audi">Philippines</option>
                                            <option value="audi">Poland</option>
                                            <option value="audi">Portugal</option>
                                            <option value="audi">Qatar</option>
                                            <option value="audi">Romania</option>
                                            <option value="audi">Russia</option>
                                            <option value="audi">Rwanda</option>
                                            <option value="audi">Saint Kitts</option>
                                            <option value="audi">Saint Lucia</option>
                                            <option value="audi">Saint Vincent</option>
                                            <option value="audi">Samoa</option>
                                            <option value="audi">San Marino</option>
                                            <option value="audi">Sao Tome</option>
                                            <option value="audi">Saudi Arabia</option>
                                            <option value="audi">Senegal</option>
                                            <option value="audi">Serbia</option>
                                            <option value="audi">Seychelles</option>
                                            <option value="audi">Sierra Leone</option>
                                            <option value="audi">Slovakia</option>
                                            <option value="audi">Slovenia</option>
                                            <option value="audi">Solomon Islands</option>
                                            <option value="audi">Somalia</option>
                                            <option value="audi">Singapore</option>
                                            <option value="audi">South Africa</option>
                                            <option value="audi">South Korea</option>
                                            <option value="audi">South Sudan</option>
                                            <option value="audi">Spain</option>
                                            <option value="audi">Sri Lanka</option>
                                            <option value="audi">Sudan</option>
                                            <option value="audi">Suriname</option>
                                            <option value="audi">Sweden</option>
                                            <option value="audi">Switzerland</option>
                                            <option value="audi">Syria</option>
                                            <option value="audi">Tajikistan</option>
                                            <option value="audi">Tanzania</option>
                                            <option value="audi">Thailand</option>
                                            <option value="audi">Timor-Leste</option>
                                            <option value="audi">Togo</option>
                                            <option value="audi">Tonga</option>
                                            <option value="audi">Trinidad</option>
                                            <option value="audi">Tunisia</option>
                                            <option value="audi">Turkey</option>
                                            <option value="audi">Turkmenistan</option>
                                            <option value="audi">Tuvalu</option>
                                            <option value="audi">Uganda</option>
                                            <option value="audi">Ukraine</option>
                                            <option value="audi">UAE</option>
                                            <option value="audi">United Kingdom</option>
                                            <option value="audi">USA</option>
                                            <option value="audi">Uruguay</option>
                                            <option value="audi">Uzbekistan</option>
                                            <option value="audi">Vanuatu</option>
                                            <option value="audi">Venezuela</option>
                                            <option value="audi">Vietnam</option>
                                            <option value="audi">Yemen</option>
                                            <option value="audi">Zambia</option>
                                            <option value="audi">Zimbabwe</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <label className=' text-gray-800 '>Days</label>
                                        <input className='px-1 py-2 border border-gray-400' placeholder='enter your name' />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor="name" className="">Hotel Category</label>
                                        <select className='border  border-gray-400  px-2 py-2' name="cars" id="cars">
                                            <option value="opel">Luxury Hotel</option>
                                            <option value="opel">5 Star Hotel</option>
                                            <option value="saab">4 Star Hotel</option>
                                            <option value="audi">3 Star Hotel</option>
                                        </select>
                                    </div>

                                </div>

                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className=' text-gray-800'>Arrival in India</label>
                                <Example />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className=' text-gray-800 '>Special Requirements</label>
                                <textarea className="border border-gray-500 resize-none" cols={3} rows={3} placeholder='enter your requirements'></textarea>
                                <div className='flex mx-auto mt-3'>

                                    <button className='bg-orange-600 px-8 py-3 text-white flex gap-1 items-center'><BsTelephoneForward />Contact Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" relative grid grid-cols-1 gap-1 max-lg:p-2 lg:p-8 ">
                <div className='mx-auto text-4xl p-2 font-Nunito'>Explore Similar Tours</div>
                <div className='flex items-center mx-auto text-sm font-semibold text-red-500 hover:text-cyan-700 hover:cursor-pointer'>View all Popular Tours<AiOutlineArrowRight /></div>
            </div>
            <div className='lg:mb-11 max-lg:p-2'>  <Swiper
                // spaceBetween={50}

                // slidesPerView={1}
                autoplay={{
                    delay: 4000
                }}

                breakpoints={{
                    320: {
                        slidesPerView: 1,

                    },

                    768: {
                        // width: 768,
                        slidesPerView: 3,
                    },
                }}
            // onSlideChange={() => console.log('slide change')}
            //  onSwiper={(swiper) => console.log(swiper)}
            >
                <div className="grid grid-cols-1 lg:p-11">
                    <SwiperSlide>
                        <div className=" flex flex-col gap-1 bg-white shadow-lg w-96 relative mx-auto hover:cursor-pointer">
                            <div className='bg-orange-600 absolute text-white w-fit p-1 top-60 left-8 z-50'>Best Seller</div>
                            <div className=' group relative flex overflow-hidden'>

                                <Image className="w-full group-hover:ease-in-out group-hover:scale-125 group-hover:transition-all group-hover:duration-200 group-hover:overflow-hidden"
                                    alt='s'
                                    src={'/asset/image/taj.webp'}
                                    width={400}
                                    height={200}
                                />
                            </div>
                            <div className='p-2'>
                                <div className="flex items-center font-serif font-bold text-xl mt-1 w-fit h-20 p-1  hover:text-blue-800">The golden triangle trip to India</div>
                                <div className='flex  items-center gap-1  text-gray-600 font-semibold pl-1 pt-1'><AiOutlineFieldTime className='text-2xl text-green-500' /> <div className='text-lg'>04 to 07 Days</div></div>
                                <div className='flex items-center gap-1 pt-2'>
                                    <div className='flex items-center  text-orange-400'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><BsStarHalf /></div>
                                    <div>(7 Reviews)</div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 h-20'>
                                <div className='flex-col'>
                                    <div className='text-sm text-gray-500'>From</div>
                                    <div className='text-green-600 font-sans font-bold text-2xl'>$1699</div>
                                </div>
                                <div className='flex items-center  justify-end text-sm font-semibold text-red-600 hover:text-cyan-700 hover:cursor-pointer'>View all Information<AiOutlineArrowRight /></div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="flex flex-col gap-1 bg-white shadow-lg w-96 relative  mx-auto hover:cursor-pointer">
                            <div className='bg-orange-600 absolute text-white w-fit p-1 top-60 left-8 z-50'>Best Seller</div>
                            <div className='group relative flex overflow-hidden'>

                                <Image className="w-full group-hover:ease-in-out group-hover:scale-125 group-hover:transition-all group-hover:duration-200 group-hover:overflow-hidden"
                                    alt='s'
                                    src={'/asset/image/tours-2.webp'}
                                    width={400}
                                    height={260}
                                />
                            </div>
                            <div className='p-2'>
                                <div className="flex items-center font-serif font-bold text-xl  mt-1  p-1 w-fit h-20 hover:text-blue-800">Best of North India Tour</div>
                                <div className='flex  items-center gap-1  text-gray-600 font-semibold pl-1 pt-1'><AiOutlineFieldTime className='text-2xl text-green-500' /> <div className='text-lg'>15 to 25 Days</div></div>
                                <div className='flex items-center gap-1 pt-2'>
                                    <div className='flex items-center  text-orange-400'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><BsStarHalf /></div>
                                    <div>(7 Reviews)</div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 h-20'>
                                <div className='flex-col'>
                                    <div className='text-sm text-gray-500'>From</div>
                                    <div className='text-green-600 font-sans font-bold text-2xl'>$1899</div>
                                </div>
                                <div className='flex items-center  justify-end text-sm font-semibold text-red-600 hover:text-cyan-700 hover:cursor-pointer'>View all Information<AiOutlineArrowRight /></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-1 bg-white shadow-lg w-96 relative mx-auto hover:cursor-pointer">
                            <div className='bg-orange-600 absolute text-white w-fit p-1 top-60 left-8 z-50'>Best Seller</div>
                            <div className='group relative flex overflow-hidden'>

                                <Image className="w-full group-hover:ease-in-out group-hover:scale-125 group-hover:transition-all group-hover:duration-200 group-hover:overflow-hidden"
                                    alt='s'
                                    src={'/asset/image/tours-3.webp'}
                                    width={400}
                                    height={260}
                                />
                            </div>
                            <div className='p-2'>
                                <div className="flex items-center font-serif font-bold text-xl  mt-1 p-1 w-fit h-20 hover:text-blue-800">The golden triangle with beaches of Goa Tour</div>
                                <div className='flex  items-center gap-1  text-gray-600 font-semibold pl-1 pt-1'><AiOutlineFieldTime className='text-2xl text-green-500' /> <div className='text-lg'>04 to 07 Days</div></div>
                                <div className='flex items-center gap-1 pt-2'>
                                    <div className='flex items-center  text-orange-400'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><BsStarHalf /></div>
                                    <div>(7 Reviews)</div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 p-2 h-20'>
                                <div className='flex-col'>
                                    <div className='text-sm text-gray-500'>From</div>
                                    <div className='text-green-600 font-sans font-bold text-2xl'>$1499</div>
                                </div>
                                <div className='flex items-center  justify-end text-sm font-semibold text-red-600 hover:text-cyan-700 hover:cursor-pointer'>View all Information<AiOutlineArrowRight /></div>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex flex-col gap-1 bg-white shadow-lg w-96 relative mx-auto hover:cursor-pointer">
                            <div className='bg-orange-600 absolute text-white w-fit p-1 top-60 left-8 z-50'>Best Seller</div>
                            <div className=' group relative flex overflow-hidden'>

                                <Image className="w-full group-hover:ease-in-out group-hover:scale-125 group-hover:transition-all group-hover:duration-200 group-hover:overflow-hidden"
                                    alt='s'
                                    src={'/asset/image/tourr-4.webp'}
                                    width={400}
                                    height={200}
                                />
                            </div>
                            <div className='p-2'>
                                <div className="flex items-center font-serif font-bold text-xl mt-1 w-fit h-20 p-1  hover:text-blue-800">The golden triangle India with Nepal Tour</div>
                                <div className='flex  items-center gap-1  text-gray-600 font-semibold pl-1 pt-1'><AiOutlineFieldTime className='text-2xl text-green-500' /> <div className='text-lg'>10 to 11 Days</div></div>
                                <div className='flex items-center gap-1 pt-2'>
                                    <div className='flex items-center  text-orange-400'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><BsStarHalf /></div>
                                    <div>(7 Reviews)</div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 h-20'>
                                <div className='flex-col'>
                                    <div className='text-sm text-gray-500'>From</div>
                                    <div className='text-green-600 font-sans font-bold text-2xl'>$21099</div>
                                </div>
                                <div className='flex items-center  justify-end text-sm font-semibold text-red-600 hover:text-cyan-700 hover:cursor-pointer'>View all Information<AiOutlineArrowRight /></div>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide> <div className="flex flex-col gap-1 bg-white shadow-lg w-96 relative  mx-auto hover:cursor-pointer">
                        <div className='bg-orange-600 absolute text-white w-fit p-1 top-60 left-8 z-50'>Best Seller</div>
                        <div className='group relative flex overflow-hidden'>

                            <Image className="w-full group-hover:ease-in-out group-hover:scale-125 group-hover:transition-all group-hover:duration-200 group-hover:overflow-hidden"
                                alt='s'
                                src={'/asset/image/tour-5.webp'}
                                width={400}
                                height={260}
                            />
                        </div>
                        <div className='p-2'>
                            <div className="flex items-center font-serif font-bold text-xl  mt-1  p-1 w-fit h-20 hover:text-blue-800">The Golden Triangle with Golden Temple Tour</div>
                            <div className='flex  items-center gap-1  text-gray-600 font-semibold pl-1 pt-1'><AiOutlineFieldTime className='text-2xl text-green-500' /> <div className='text-lg'>15 to 25 Days</div></div>
                            <div className='flex items-center gap-1 pt-2'>
                                <div className='flex items-center  text-orange-400'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><BsStarHalf /></div>
                                <div>(7 Reviews)</div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 h-20'>
                            <div className='flex-col'>
                                <div className='text-sm text-gray-500'>From</div>
                                <div className='text-green-600 font-sans font-bold text-2xl'>$1899</div>
                            </div>
                            <div className='flex items-center  justify-end text-sm font-semibold text-red-600 hover:text-cyan-700 hover:cursor-pointer'>View all Information<AiOutlineArrowRight /></div>
                        </div>

                    </div>  </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex flex-col gap-1 bg-white shadow-lg w-96 relative mx-auto hover:cursor-pointer">
                            <div className='bg-orange-600 absolute text-white w-fit p-1 top-60 left-8 z-50'>Best Seller</div>
                            <div className='group relative flex overflow-hidden'>

                                <Image className="w-full group-hover:ease-in-out group-hover:scale-125 group-hover:transition-all group-hover:duration-200 group-hover:overflow-hidden"
                                    alt='s'
                                    src={'/asset/image/tour-6.webp'}
                                    width={400}
                                    height={260}
                                />
                            </div>
                            <div className='p-2'>
                                <div className="flex items-center font-serif font-bold text-xl  mt-1 p-1 w-fit h-20 hover:text-blue-800">The golden triangle tour with Yoga</div>
                                <div className='flex  items-center gap-1  text-gray-600 font-semibold pl-1 pt-1'><AiOutlineFieldTime className='text-2xl text-green-500' /> <div className='text-lg'>04 to 07 Days</div></div>
                                <div className='flex items-center gap-1 pt-2'>
                                    <div className='flex items-center  text-orange-400'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><BsStarHalf /></div>
                                    <div>(7 Reviews)</div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 p-2 h-20'>
                                <div className='flex-col'>
                                    <div className='text-sm text-gray-500'>From</div>
                                    <div className='text-green-600 font-sans font-bold text-2xl'>$1499</div>
                                </div>
                                <div className='flex items-center  justify-end text-sm font-semibold text-red-600 hover:text-cyan-700 hover:cursor-pointer'>View all Information<AiOutlineArrowRight /></div>
                            </div>

                        </div>
                    </SwiperSlide>
                </div>

            </Swiper></div>
            <Footer />
        </div>
    )
}

export default NorthIndiaTour
