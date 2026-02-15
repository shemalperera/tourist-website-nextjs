import Footer from "../components/footer"
import Header from "../components/header"

const ContactUs = () => {
    return (
      <div>
          <div className="bg-white lg:fixed lg:top-0 lg:z-50">
                <Header />
            </div>
          <div className='grid grid-rows-1 mx-11 lg:mt-24 justify-center items-center text-3xl p-2 font-bold font-sans'>Contact Us</div>
        
  <section className="relative z-10 overflow-hidden bg-white ">
    <div className="container mx-auto px-4">
      <div className="-mx-4 flex flex-wrap lg:justify-between">
        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
          <div className="mb-12 max-w-[570px] lg:mb-0">
          
            <h2
              className="text-dark mb-6 lg:text-2xl  max-lg:text-lg font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
            >
              GET IN TOUCH WITH US
            </h2>
            <p className="text-body-color mb-9 text-base leading-relaxed">
            Zeelan Tours is an Indian company specializing in travel tourism.
 that organizes Holidays & sightseeing trips in India, Nepal, Tibet and Bhutan.
            </p>
            <div className="mb-8 flex w-full max-w-[370px]">
             
              <div className="w-full">
                <h4 className="text-dark mb-1 text-xl font-bold">Our Location</h4>
                <p className="text-body-color text-base">
                WARD NO. 06 BAL VIKASH SCHOOL NOHAR: 335523
                </p>
              </div>
            </div>
            <div className="mb-8 flex w-full max-w-[370px]">
            
              <div className="w-full">
                <h4 className="text-dark mb-1 text-xl font-bold">Phone Number</h4>
                <p className="text-body-color text-base">+91 7976693878</p>
              </div>
            </div>
            <div className="mb-8 flex w-full max-w-[370px]">
              
              <div className="w-full">
                <h4 className="text-dark mb-1 text-xl font-bold">Email Address</h4>
                <p className="text-body-color text-base">tourszeelan@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
          <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="text-body-color border-2 border-gray-400 focus:border-primary w-full rounded  py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="text-body-color border-2 border-gray-400 focus:border-primary w-full rounded py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="text-body-color border-2 border-gray-400 focus:border-primary w-full rounded  py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                />
              </div>
              <div className="mb-6">
                <textarea rows={6}
                  
                  placeholder="Your Message"
                  className="text-body-color border-2 border-gray-400 focus:border-primary w-full resize-none rounded  py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-primary border-primary w-full bg-blue-900 rounded border p-3 text-white transition hover:bg-opacity-90"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div>
             
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <Footer/>
      </div>
    )
  }
  
  export default ContactUs