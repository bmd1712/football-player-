import React from 'react'
import mu from '../../../../assets/web/manchester-united (1).png'
import real from '../../../../assets/web/real-madrid.png'
import psg from '../../../../assets/web/paris-saint-germain.png'
import logoc1 from '../../../../assets/web/championleague.png'
import location from '../../../../assets/web/location.png'
import lineup from '../../../../assets/web/lineup.png'
import ticket from '../../../../assets/web/tickets.png'

const Banner = () => {
  return (
    <div className=' bg-sky-500/10 py-6 ms:py-12 px-6'>
        <div>
            <div
                data-aos="slide-up"
                data-aos-duration="300"
            >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* image section */}
                    <div className='flex items-center xl:py-16 '>
                        <img src={logoc1}
                        alt="" 
                        className='max-w-[250px] w-full mx-auto drop-shadow-amber-100'/>
                    </div>
                    {/* content section  */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className='text-3xl sm:text-4xl font-bold text-blue-950'>UEFA Champions League</h1>
                        <p className='max-w-[700px] text-lg text-gray-500 tracking-wide leading-5 line-clamp-15'>UEFA Champions League (viết tắt là UCL, còn được biết đến với tên gọi Cúp C1 châu Âu) là một giải đấu bóng đá cấp câu lạc bộ thường niên được tổ chức bởi Liên đoàn bóng đá châu Âu (UEFA) dành cho các câu lạc bộ có thứ hạng cao tại các giải vô địch quốc gia châu Âu. <br/>Đây là một trong những giải đấu bóng đá danh giá nhất trên thế giới và là giải đấu cấp câu lạc bộ danh giá nhất của bóng đá châu Âu, bao gồm các nhà vô địch của các giải vô địch quốc gia (đối với một số quốc gia còn có thêm một hoặc nhiều đội á quân) của các hiệp hội quốc gia.
                        </p>
                        <div className='flex gap-6 '>
                            <div className='mx-2 hover:scale-120 duration-300'>
                                <img src={lineup} 
                                alt="" 
                                className='max-h-[40px]'/>
                            </div>
                            <div className='mx-2 hover:scale-120 duration-300'>
                                <img src={ticket} 
                                alt="" 
                                className='max-h-[40px]'/>
                            </div>
                            <div className='mx-2 hover:scale-120 duration-300'>
                                <img src={location} 
                                alt="" 
                                className='max-h-[40px]'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner