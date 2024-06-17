import Image from 'next/image'
import SearchIcon from './searchicon';
import DustbinIcon from './dustbin';
import Upload from './uploadbutton';
import {DatePickerDemo} from './calendarinput';
const Content2 = () => {
  return(
    <div className="w-[90vw]">
        <div className='look  color w-[500] h-[100] p-[1rem] bg-black text-white p  justify-end rounded-md' >
        <div className=' py-[2rem] px-[2rem] w-[80vw] rounded-lg bg-[#1B1B1B] mx-[5vw] my-[3vh] flex flex-col space-y-[1 rem] '>
            {/* start of grey div 1 */}

            {/* first row */}
            <div className="flex flex-row justify-start space-x-[4rem]" >
                {/* Qualifications Section */}

                <div className="flex flex-col space-y-[2em]">
                    <label htmlFor="Qualification Level">Qualification Level</label>
                    <input type="text" className='bg-[#1E1F22]' placeholder='Bachelors of Science' />
                </div>

                {/* Certifications Section */}
                <div className='flex flex-col j my-[1rem] space-y-[.5rem] relative left-[20.5vw]'>
                    <label htmlFor="Certifications">Certifications</label>
                    <p className='text-stone-600'>Any professional certificates with details on the certifying body and <br />dates</p>
                    <div className='flex flex-row space-x-[1rem]'>
                        {/* Certificate Name and upload button */}
                             <input type="text" className="w-[10em] h-[1.4em] bg-[#1E1F22]" placeholder='Certificate' />
                             <Upload></Upload>
                    </div>
                </div>
            </div>
            {/* end of first row */}

            {/* second row */}
            <div className="flex flex-row">
                    
                    {/* first column for input field(s) Institions Attended */}
                    <div className='flex flex-col justify-start space-y-[2rem]'>
                        <label htmlFor="Institutions">Institution(s) Attended</label>
                        {/* first input field of Search and Add Button */}
                        <div className='flex flex-row'>
                            <input type="text" placeholder='Search' className='bg-[#1E1F22]' />
                                <SearchIcon></SearchIcon>
                        </div>
                        {/* end of  first input field */}

                        {/* begin second input field- school */}
                        <div className='flex flex-row'>
                            <input type="text" placeholder='Carmel High School' className='bg-[#1E1F22]' />
                        </div>
                        {/* end of second input field */}
                        
                        {/* begin third input field- college */}
                        <div className='flex flex-row'>
                            <input type="text" placeholder='VIT Vellore' className='bg-[#1E1F22]' />
                        </div>
                        {/* end of third input field */}
                    </div>
                {/* end of first column */}

                {/* start of second column=> Graduation Date field*/}
                    <div className='mx-[3rem] my-[3.5rem] flex flex-col space-y-[2rem]'>
                        <label htmlFor="Graduation">Graduation Date</label>
                        <DatePickerDemo/>
                        <DatePickerDemo/>
                        {/* <input type="text" placeholder='Starting Date' className='bg-[#1E1F22]' />
                        <input type="text" placeholder='Ending Date' className='bg-[#1E1F22]'/> */}
                    
                    </div>
                {/* end of second column */}

                {/* start of third column=> Data Analysis*/}
                    {/* start */}
                    <table className='text-sm relative left-[5rem] top-[1rem]'>
                        <thead>
                        <tr className=''>
                            <th className='w-[200px] pr-[4em] text-left'>Data Analysis IMB</th>
                            <th className='50px'><DustbinIcon></DustbinIcon></th>
                        </tr>
                        
                        </thead>

                        <tbody className='relative bottom-[6rem]'>
                        <tr>
                        <th className='w-[200px] pr-[4em] text-left'>Data Analysis IMB</th>
                        <th className='w-[50px]'><DustbinIcon></DustbinIcon></th>
                        </tr>

                        </tbody>

                    </table>
                    {/* end */}

                {/* end of third column */}
            
            </div>
        </div>    

        {/* end of grey div 1 */}

        {/* start of grey div 2 */}
        <div className=' py-[2rem] px-[2rem] w-[80vw] rounded-lg bg-[#1B1B1B] mx-[5vw] my-[3vh] flex flex-col space-y-[1 rem] '>
            
            {/* first row */}
            <div className="flex flex-row justify-start space-x-[4rem]" >

                {/* Technical Skills section=> start */}
                <div className="flex flex-col space-y-[2em]">
                    <label htmlFor="Qualification Level">Technical Skills</label>
                    <div className="flex flex-row">
                        <input className='bg-[#1E1F22]' placeholder='Skill(ex:React)' />
                        <div className='relative top-[.5rem] left-[.5rem]'>{/* div for Skills */}
                       <div className='bg-[#1E1F22] '>
                            <SearchIcon></SearchIcon>
                       </div>

                        </div>
                        <button className='bg-[#1E1F22] p-2 mx-[1rem]'>Add</button>
                    </div>
                    {/* making a table for the entries of all skills selected */}
                    <table className=''>
                        <thead>
                        <tr className=''>
                            <th className='pr-[4em] text-left'>React</th>
                            <th className='50px'><DustbinIcon></DustbinIcon></th>
                        </tr>
                        
                        </thead>

                        <tbody>
                        <tr>
                        <th className='w-[200px] pr-[4em] text-left'>Figma</th>
                        <th className='w-[50px]'><DustbinIcon></DustbinIcon></th>
                        </tr>

                        <tr>
                        <th className='w-[200px] pr-[4em] text-left'>Frontend Design</th>
                        <th className='w-[50px]'><DustbinIcon></DustbinIcon></th>
                        </tr>

                        <tr>
                        <th className='w-[200px] pr-[4em] text-left'>Backend Design</th>
                        <th className='w-[50px]'><DustbinIcon></DustbinIcon></th>
                        </tr>
                        </tbody>


                    </table>


                </div>

                {/* Soft Skills section=> start */}
                <div className='flex flex-col  space-y-[.5rem] relative left-[13rem] '>
                        <label htmlFor="Soft Skills">Soft Skills</label>
                        
                        <div className='flex flex-row space-x-[1rem] '>
                            {/* Certificate Name and upload button */}
                                <input type="text" className="bg-[#1E1F22] h-[1.2rem] w-[18rem] relative left-[1rem] top-[1rem]" placeholder='Skill(ex: Team Management)'/>
                                <div className='my-[1rem] bg-[#1E1F22]'>
                                <SearchIcon></SearchIcon>
                                </div>

                                <button className='p-3 bg-[#1E1F22]'>Add</button>
                        </div>

                        {/* table containing all the soft skills */}
                        
                        <table className='relative top-[2rem]'>
                        <thead>
                        <tr className=''>
                            <th className='pr-[4em] text-left'>Communication</th>
                            <th className='50px'><DustbinIcon></DustbinIcon></th>
                        </tr>
                        
                        </thead>

                        <tbody>
                        <tr>
                        <th className='w-[200px] pr-[4em] text-left'>Teamwork</th>
                        <th className='w-[50px]'><DustbinIcon></DustbinIcon></th>
                        </tr>

                        <tr>
                        <th className='w-[200px] pr-[4em] text-left'>Frontend Design</th>
                        <th className='w-[50px]'><DustbinIcon></DustbinIcon></th>
                        </tr>

                        </tbody>


                    </table>
                </div>
            </div>
            {/* end of first row */}

            {/* start of 2nd row=>Language */}
            <div className="flex flow-col my-[2rem] relative left-[2rem]"></div>
            <div className="flex flex-row">
                <label htmlFor="Language">Language</label>
                <button className='p-3 bg-[#1E1F22] relative left-[1rem] bottom-[.5rem]'>Add</button>
            </div>
            <label htmlFor="English">English</label>
            <p className='text-[#5D5D5D] font-bold'>Professional working proficiency</p>
            <label htmlFor="Hindi">Hindi</label>
            <p className='text-[#5D5D5D] font-bold'>Native or bilingual proficiency</p>


            {/* end of 2nd row=>  */}



        </div>    


        {/* end of grey div 2 */}
    </div>
    </div>
  )
}

export default Content2;