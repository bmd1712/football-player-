import React from 'react'

const Comments = () => {
  return (
    <div className='py-10 bg-sky-500/10'>
        <div className=''>
            {/* header section */}
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p className='text-black font-bold text-lg'>NHẬN XÉT</p>
                <h1 className='text-red-500 font-bold text-4xl '>VIỆT NAM VÔ ĐỊCH</h1>
                <p className='italic '>Trẻ con sa mạc truyền tai nhau bài đồng dao <br/>
                "Xương rồng đơm lá đơm hoa,<br/> 
                nước đong đầy trên cao nguyên đá, <br/>
                là ngày hoàng đế trở về nhà" người dân Shurima luôn mơ về thời khắc tái sinh của nhà vua và cuối cùng... <br/>
                ngày đó đã trở thành sự thật</p>
            </div>
            {/* comments section */}
            <div className='grid grid-cols-1 max-w-[600px] mx-auto gap 6'>
                
            </div>
        </div>
    </div>
  )
}

export default Comments