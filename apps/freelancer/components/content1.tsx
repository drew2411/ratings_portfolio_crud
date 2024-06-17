import Image from 'next/image'
import Linkedin from './linkedinlogo'
import LinkChain from './linkchain'
const Content1 = () => {
  return(
    <div className="w-[90vw] text-white bg-black"  >{/* beginning of content1 div */}
        <div className='look flex flex-row space-x-[1rem] color w-[500] h-[100] p-[1rem]
         bg-[#5263FF] text-white p  justify-end rounded-lg' >
            <p className='py-[20px] invisible'>Name appears here</p>
        </div> 
        {/* the blue stuff is done noww*/}

        <Image src="/ellipse_top.png" width={70} height={70} alt="BS" className='relative bottom-[50px] left-[30px] '/>
        <div className='flex flex-row justify-start mx-[10rem] relative bottom-[3rem] right-[1rem] space-x-[54vw]'>
            <p>Vanshika</p>
            <button className="p-2 bg-[#4E5058] text-white text-base relative left-[8rem]">Edit User Profile</button>
        </div>
        {/* user-image above */}
        {/* user-details(Vanshika) */}

        <div className='w-[80vw] rounded-lg bg-[#1B1B1B] mx-[5vw] relative bottom-[5vh] h-[105vh] '>{/* grey div */}
            <div className='mx-[2rem] my-[2rem] flex flex-col space-y-[2rem]'>{/* for margin b/w text and box border */}
            {/* first row */}
            <div className="flex flex-row justify-start space-x-[11rem] my-[5rem] relative bottom-[5vh]" >
            <p>First Name: <br /><br /> Vanshika</p>
            <p>Last Name:<br /><br /> Singh </p>
            <p>Age:  <br /> <br />19</p>
            </div>
            {/* second row */}
            <div className="flex flex-row justify-start space-x-[30rem] relative bottom-[12vh]" >
            <label htmlFor="Email">Email</label>
            <label htmlFor="Phone Number">Phone Number</label>
            </div>
            {/* third row */}
            <div className="flex flex-row justify-start space-x-[19rem] relative bottom-[12vh]" >
                <input type="email" className="bg-[#1E1F22] w-[23vw]" placeholder='Enter email'/>
                <input type="number" className='bg-[#1E1F22] relative right-[9vw]' placeholder='Enter phone number' />
            </div>
            {/* fourth row */}
            <div className="flex flex-row justify-start space-x-[28.5rem] relative bottom-[12vh]" >
            <label htmlFor="Address">Location</label>
            <label htmlFor="Zip Code">Available</label>
            </div>
            {/* fifth row */}
            <div className="flex flex-row justify-start space-x-[19rem] relative bottom-[12vh]" >
                <input type="text" className='bg-[#1E1F22]' placeholder='Enter location'/>
                {/* <input type="text" className='bg-[#1E1F22] ' placeholder='Yes/No' /> */}
                <select name="" id="" className='bg-[#1E1F22]'>
                    <option value="Yes">
                        {/* svg for green circle starting */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="#277E08">
                        <circle cx="5" cy="5.89941" r="5" fill="#277E08"/>
                        </svg>
                        {/* svg for green circle ending */}
                        Available
                    </option>

                    <option value="No">
                        {/* svg for green circle starting */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="#277E08">
                                <circle cx="5" cy="5.89941" r="5" fill="#277E08"/>
                                </svg>
                        {/* svg for green circle ending */}
                        Unavailable
                    </option>
                </select>
            </div>
            {/* sixth row */}
            <div className="flex flex-row justify-start space-x-[5rem] relative bottom-[12vh]" >
                <div className='flex flex-col space-y-[2rem] '>
                    <div className='flex flex-col space-y-[1rem]'> 
                        <label htmlFor="Website/Portfolio">Website/Portfolio</label>
                        <input type="text" className="bg-[#1E1F22] w-[22rem]" placeholder='link plz!!' />
                    </div>
                    {/* div for the website links */}
                    <div className='flex flex-col space-y-[1.5rem]'>
                        <label htmlFor="Social Media">Website Links</label>
                        <div className='flex flex-row space-x-[2rem] '>
                        <Linkedin></Linkedin>
                            <button className='p-1 px-5 bg-[#1E1F22]'>Linkedin Profile</button>
                        </div>
                        <div className='flex flex-row space-x-[1.5rem] text-[.8rem]'>
                            <LinkChain></LinkChain>
                            <button className='p-1 bg-[#1E1F22] px-4'>Link to social profile</button>
                        </div>
                        <div className='flex flex-row space-x-[1.5rem] text-[.8rem]'>
                            <LinkChain></LinkChain>
                            <button className='p-1 bg-[#1E1F22] px-4'>Link to social profile</button>
                        </div>
                    </div>
                </div>
                {/* contains About Me*/}
                <div className='flex flex-col my-[5.5rem] space-y-[1rem] relative bottom-[5vh] right-[9rem]' >
                    <label className='mx-[14rem]' htmlFor="About Me">About Me</label>
                    <p className='text-stone-600 mx-[14rem] '>
                        A short paragraph including themselves, highlighting their key <br /> 
                        skills and what they can offer client
                    </p>
                    <textarea className="bg-[#1E1F22] h-[20vh] w-[35vw] mx-[14.5vw]" name="aboutme" id="aboutme" cols={4} rows={10} placeholder='Write something about yourself'></textarea>
                </div>
            </div>
            {/* end of content */}
        </div>

        </div>
    </div>


  )
}

export default Content1;