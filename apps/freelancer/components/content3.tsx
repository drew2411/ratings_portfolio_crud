import Image from 'next/image'
import SearchIcon from './searchicon';
import DustbinIcon from './dustbin';
import {DatePickerDemo} from './calendarinput';
{/* importing for Dialog Box-start */}
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
{/* importing for Dialog Box-end */}
const Content3 = () => {
  return(
    <div className="w-[90vw] bg-black text-white">
        {/* start of grey div 1 */}
        <div className=' py-[2rem] px-[2rem] w-[80vw] rounded-lg bg-[#1B1B1B] mx-[5vw] my-[3vh] flex flex-col space-y-[1 rem] '>
            
            {/* first row */}     
            <div className="flex flex-row">
                {/* experience */}
                <div className="flex flex-col">
                    <label htmlFor="Experience">Experience</label>
                    <br />
                    <br />
                    <label htmlFor="Project/Company Name">Project/Company Name</label>
                    <br />
                    <input className="bg-[#1E1F22]" type="text" placeholder="Project/Company Name" />
                    <br />
                    <label htmlFor="Job Title">Job Title</label>
                    <input type="text" className='bg-[#1E1F22]' placeholder='Job Title' />
                    <br /><br />
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            {/* Start Date */}
                            <label htmlFor="Start Date">Start Date</label>
                            <br />
                            <DatePickerDemo />
                        </div>
                        <div className="flex flex-col mx-[4rem]">
                            {/* End Date */}
                            <label htmlFor="End Date">End Date</label>
                            <br />
                            <DatePickerDemo />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mx-[5rem] ">
                <label htmlFor="Description">Description</label>
                <p className='my-[1rem]'>Description of responsibility and achievements regarding the job position or project work</p>
                <textarea name="" id="" className='bg-[#1E1F22] relative top-[2rem]  h-[26vh]' rows={2} cols={4}></textarea>
                </div>
                {/* descirption */}

            </div>
            {/* end of first row */}
        </div>
        {/* end of grey div 1 */}

        {/* start of grey div 2 */}

        <div className=' py-[2rem] px-[2rem] w-[80vw] rounded-lg bg-[#1B1B1B] mx-[5vw] my-[3vh] flex flex-col space-y-[1 rem] '>
            
            {/* first row */}     

                <div className="flex flex-col">
                    <label htmlFor="Resume">Resume</label>
                    <br />
                    <br />
                    {/* creating the dialog box */}
                    <div className="rounded-md bg-[#1E1F22] w-[20%] p-[2rem] flex flex-col items-center space-y-[1rem]">
                        <div className="p-3 bg-[#343333] rounded-md flex flex-col items-center  ">
                                <div className=" my-[1rem] flex flex-col items-center" >
                                    {/* file icon start */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 16L14.9968 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V16ZM19 15V4H5V20H14V15H19Z" fill="white"/>
                                    </svg>
                                    {/*file icon end */}
                                    <p>Choose or drag file here</p>
                                </div>

                                {/* start */}
                                {/* end */}
                        </div>

                        <button className="bg-[#4E5058] p-2 text-[.8rem]">Upload from local</button>                            




                    </div>
                    <button className='bg-[#4E5058] p-2 my-[1rem] rounded-md w-[10rem] mx-[2.5rem]'>
                            <div className="flex flex-row items-center space-x-[.8rem] text-[.8rem]">
                            <Image src={'/drive.png'} width={20} height={20} alt='Lol!!'></Image>
                            <p>Use Google Drive</p>
                            </div>
                        </button>
                            {/* Onedrive button */}
                            <button className='bg-[#4E5058] p-2 my-[] rounded-md w-[10rem] mx-[2.5rem]'>
                            <div className="flex flex-row items-center space-x-[.8rem] text-[.8rem]">
                            <Image src={'/onedrive.png'} width={20} height={20} alt='Lol!!'></Image>
                            <p>Use OneDrive</p>
                            </div>
                        </button>

                </div>




            {/* end of first row */}
        </div>
    </div>
  )
}

export default Content3;