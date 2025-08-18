import React from 'react'
import AppStoreImg from '../../../../assets/web/appstore.png'
import PlayStoreImg from '../../../../assets/web/playstore.png'
import GIFTicket from '../../../../assets/web/ticket.gif'

const AppStore = () => {
  return (
    <>
    <div className='py-14 px-6 dark:bg-gray-700 '>
        <div className=''>
            <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'> 
                <div className='space-y-6 max-w-xl mx-auto'>
                    <div>
                        <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold  dark:text-gray-400'>TẢI XUỐNG VÀ ĐẶT VÉ NGAY</h1>
                    </div>
                    <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                        <a href="#">
                            <img src={AppStoreImg} alt="AppStore" 
                            className='sm:ml-4 max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                        </a>
                        <a href="#">
                            <img src={PlayStoreImg} alt="Playstore" 
                            className='sm:ml-4 max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                        </a>
                    </div>
                </div>
                <div>
                    <img src={GIFTicket} alt="gif" 
                    className='max-w-[300px] mx-auto'/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AppStore