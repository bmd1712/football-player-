import React from 'react'
import mu from '../../assets/web/manchester-united (1).png'
import real from '../../assets/web/real-madrid.png'
import psg from '../../assets/web/paris-saint-germain.png'

const ServicesData = [
    {
        id: 1,
        img: real,
        name:"Real Madrid CF",
        hover:"hover:bg-amber-300",
        description:"Real Madrid còn được biết đến biệt danh là nhà vua Châu Âu khi sở hữu đến 15 chiếc cup Champion League"
    },
    {
        id: 2,
        img: mu,
        name:"Manchester United",
        hover:"hover:bg-red-600",
        description:"Dù hiện tại quỷ đỏ không có thường xuyên được góp mặt trên đấu trường danh giá nhất cấp câu lạc bộ nhưng quá khứ Manchester United cũng đã từng dành 3 Champion League"
    },
    {
        id: 3,
        img: psg,
        name:"Paris Saint-Germain F.C.",
        hover:"hover:bg-sky-900",
        description:"Sau bao nhiêu năm được ông chủ người Qata rót hàng tỷ đô thì PSG đã nâng cao chức vô địch của Champion League mùa 2024-2025 khi hủy diệt Inter Milan 5-0. "
    }
]
const Services = () => {
  return (
    <>
    <div className="py-10 dark:bg-gray-700">
        <div className="">
          {/* header section */}
          <div className="text-center mb-20 max-w-[500px] mx-auto">
            <p className="text-sm sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-600">UEFA</p>
            <h1 className="text-5xl font-bold">CHAMPION LEAGUE</h1>
            <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">UEFA Champions League là một giải đấu bóng đá cấp câu lạc bộ thường niên <br/> 
            được tổ chức bởi Liên đoàn bóng đá châu Âu (UEFA) dành cho các câu lạc bộ <br/> 
            có thứ hạng cao tại các giải vô địch quốc gia châu Âu.</p>
          </div>
          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-5 place-items-center mx-12">
            {ServicesData.map(({id, img, name, hover, description})=>{
              return(
                <div key={id} className={`${hover} mt-12 h-[180px] font-medium group rounded-2xl bg-white shadow-2xl dark:bg-zinc-800 dark:text-white duration-300`}>
                  <div className='h-[60px]'>
                    <img 
                    src={img} 
                    alt="" 
                    className='max-h-[100px] mx-auto block transition -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300'/>
                  </div>
                  <div className='mx-3 hover:text-white'>
                    <h1 className='text-xl font-bold text-center'>{name}</h1>
                    <p className='text-gray-400 text-sm line-clamp-3'>{description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    </div>
    </>
  )
}

export default Services