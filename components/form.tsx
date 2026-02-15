import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsFillTelephoneFill, BsTelephoneForward } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

import Example from './calender'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from "react-datepicker";
import { SlCalender } from "react-icons/sl";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Country, setCountry] = useState("");
  const [Hotel, setHotel] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [Day, setDay] = useState("");
  const [startDate, setStartDate] = useState(new Date());


  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const response = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, Contact, Country, Hotel, Day, startDate, subject, message }),
    });

    if (response.ok) {
      toast.success('🦄Thank You!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
<div>
<ToastContainer
 position="top-right"
 autoClose={5000}
 hideProgressBar={false}
 newestOnTop={false}
 closeOnClick
 rtl={false}
 pauseOnFocusLoss
 draggable
 pauseOnHover
 theme="light"
 />

    <div className='grid grid-cols-2 p-4 bg-white w-max font-Montserrat'>
    
      <div className=' grid grid-cols-1 w-fit font-Roboto'>
        <div className='flex mx-auto font-Roboto font-semibold text-gray-600 text-4xl'>How It Works</div>
        <div className='flex flex-col w-96  p-6'>
          <ul className='flex flex-col list-disc marker:text-redmix marker:text-xl gap-1'>
            <li>Enter Your Details and Submit The Form.</li>
            <li className=' text-justify '>After you submit the form, one of our travel experts will get back to you with customised holiday package based on your requirement, within 24 hours.</li>
            <li>Confirm the Tour Package.</li>
          </ul>
        </div>
        <hr className="w-48 py-0.5 mx-auto  bg-gray-400  " />
        <div className='flex flex-col mx-auto gap-1'>
          <div className='text-lg '>Whatsapp for Details</div>
          <div className='flex gap-2 items-center text-orange-600 font-bold text-lg'><IoLogoWhatsapp className='text-xl text-green-600' /><div>+91-7976693878</div></div>
          <div className='text-lg '>Email us at</div>
          <div className='flex gap-2 items-center text-orange-600  font-bold text-lg'><IoLogoWhatsapp className='text-xl text-green-600' /><div>tourszeelan@gmail.com</div></div>
        </div>
      </div>
      <form className='w-fit' onSubmit={handleSubmit}>
        <div className='text-redmix font-Poppins font-bold text-3xl mb-2'>Request a Quote</div>
        <div className='grid grid-cols-2 gap-2 w-fit font-Roboto'>
          <div className='grid grid-cols-1 gap-2'>
            <div className='flex flex-col gap-1'>
              <label className=' text-gray-800 '>Name</label>
              <input className='px-1 py-2 border border-gray-400' placeholder='enter your name' type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className=' text-gray-800 '>Email</label>
              <input className='px-1 py-2 border border-gray-400' placeholder='enter your email' 
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div className='flex flex-col gap-1'>
              <label className=' text-gray-800'>Contact No.</label>
              <input className='px-1 py-2 border border-gray-400' placeholder='enter your contact no.'
               value={Contact}
               onChange={(e) => setContact(e.target.value)}
                />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name">Your Country</label>
              <select className='border  border-gray-400  px-8 py-2' name="cars" id="cars" 
               value={'select country'}
               onChange={(e) => setCountry(e.target.value)}
               >
                <option value="select country">select country</option>
                <option value="Australia">Australia</option>
                <option value="Argentina">Argentina</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Antigua">Antigua</option>
                <option value="Armenia">Armenia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia">Bosnia</option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cabo Verde">Cabo Verde</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czechia">Czechia</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Eswatini">Eswatini</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Greece">Greece</option>
                <option value="Ghana">Ghana</option>
                <option value="Grenada">Grenada</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Holy See">Holy See</option>
                <option value="Honduras">Honduras</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia">Micronesia</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="North Korea">North Korea</option>
                <option value="North Macedonia">North Macedonia</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestine State">Palestine State</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Qatar">Qatar</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Kitts">Saint Kitts</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Vincent">Saint Vincent</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome">Sao Tome</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="Singapore">Singapore</option>
                <option value="South Africa">South Africa</option>
                <option value="South Korea">South Korea</option>
                <option value="South Sudan">South Sudan</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syria</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-Leste">Timor-Leste</option>
                <option value="Togo">Togo</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad">Trinidad</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="UAE">UAE</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="USA">USA</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
              <label className=' text-gray-800'>Arrival in India</label>
              <div className="px-2 items-center flex py-2 rounded-lg border-2 border-gray-400">  <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} /><SlCalender className="font-bold text-2xl"/></div>
            </div>
            <div className='flex flex-col gap-1'>
              <label className=' text-gray-800 '>Days</label>
              <input className='px-1 py-2 border border-gray-400' placeholder='enter days' type='text'
              value={Day}
              onChange={(e) => setDay(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name" className="">Hotel Category</label>
              <select className='border  border-gray-400  px-8 py-2' name="cars" id="cars"
              onChange={(e) => setHotel(e.target.value)}>
              <option value="Select Hotel Category"  className='text-gray-500'
              >Select Hotel Category</option>
                <option value="Luxury Hotel">Luxury Hotel</option>
                <option value="5 Star Hotel">5 Star Hotel</option>
                <option value="4 Star Hotel">4 Star Hotel</option>
                <option value="3 Star Hotel">3 Star Hotel</option>
              </select>
            </div>

          </div>

        </div>
        <div className='flex flex-col gap-1'>
          <label className=' font-Roboto   text-gray-800'>Special Requirements</label>
          <textarea className="border border-gray-500 resize-none" cols={3} rows={3} placeholder='enter your requirements'
           value={message}
           onChange={(e) => setMessage(e.target.value)}
         />
          <div className='flex mx-auto mt-3'>

            <button type="submit" className='bg-redmix px-8 py-3 text-white flex gap-1 items-center hover:bg-cyan-600'><BsTelephoneForward />Contact Now</button>
          </div>
        </div>
        </form>
    </div>
    </div>
  )
}

export default Form
