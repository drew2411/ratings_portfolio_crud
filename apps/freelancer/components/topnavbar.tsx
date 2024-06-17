import Image from 'next/image'

const TopNavbar = () => {
  return(
    <div className="w-[90vw] bg-black">
        <div className='flex flex-row space-x-[1rem] color w-[500] h-[100] p-[1rem] bg-black text-white p  justify-end'>
            <Image src="/ellipse_top.png" width={70} height={70} alt="BS"/>   
            <p className='py-[20px]'>Name appears here</p>
            {/* svg code begins */}
            <div className='my-[1.5rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="18" viewBox="0 0 27 18" fill="none">
                <g filter="url(#filter0_d_3002_3405)">
                    <path d="M3.67578 4L12.1758 12L21.1758 4" stroke="white" stroke-width="2"/>
                </g>
                <defs>
                    <filter id="filter0_d_3002_3405" x="0.692188" y="0.952441" width="25.4477" height="16.7025" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="1" dy="1"/>
                    <feGaussianBlur stdDeviation="1.65"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3002_3405"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3002_3405" result="shape"/>
                    </filter>
                </defs>
                </svg>
            </div>

            {/* svg code ends*/}
        </div>    
    </div>
  )
}

export default TopNavbar;