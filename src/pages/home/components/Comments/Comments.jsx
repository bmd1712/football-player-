import React from 'react'
import Slider from 'react-slick';

const commentData = [
  {
    id: 1,
    name: "Cristiano Ronaldo",
    text: "Nếu tôi được sinh ra ở Việt Nam có lẽ giờ tôi đã dành được 2 chức vô địch World Cup.",
    img: "https://i.pinimg.com/736x/25/c8/82/25c88270a5ad16b7a6cc45b4c828b974.jpg",
  },
  {
    id: 2,
    name: "Lionel Messi",
    text: "Tôi cảm thấy thật may mắn vì nếu Việt Nam tham dự World Cup 2022 chắc có lẽ Argentina sẽ không thể dành được chức vô địch.",
    img: "https://i.pinimg.com/1200x/43/61/b7/4361b79d957ec9ba2cc1582b7c163378.jpg",
  },
  {
    id: 3,
    name: "Supachok Sarachat",
    text: "Tôi đúng là không ra gì khi đã ghi một bàn thắng không fairplay vào lưới đội tuyển Việt Nam.",
    img: "https://cdn.giaoducthoidai.vn/images/e68bd0ae7e0a4d2e84e451c6db68f2d4b451e845174ca19b2b16a6bbb5870ff49fdeb1f1ce41734a525e266f367394c9d6b88dae59b3e576e921bb1b47390aae6d82755ba60f47910c8ea9698ed4bfbd/supa-1736166059-1708-1736166313.jpg.webp",
  }
]

const Comments = () => {
  var settings= {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slideToScroll:1,
    autoplay: true,
    autoplaySpeed:5000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <div className='py-10 bg-sky-500/10'>
        <div className=''>
            {/* header section */}
            <div className='text-center mb-5 max-w-[400px] mx-auto'>
                <p className='text-black font-bold text-lg'>NHẬN XÉT</p>
                <h1 className='text-red-500 font-bold text-4xl '>VIỆT NAM VÔ ĐỊCH</h1>
                <p className='italic '>Trẻ con sa mạc truyền tai nhau bài đồng dao <br/>
                "Xương rồng đơm lá đơm hoa,<br/> 
                nước đong đầy trên cao nguyên đá, <br/>
                là ngày hoàng đế trở về nhà" người dân Shurima luôn mơ về thời khắc tái sinh của nhà vua và cuối cùng... <br/>
                ngày đó đã trở thành sự thật</p>
            </div>
            {/* comments section */}
            <div className='grid grid-cols-1 max-w-[800px] mx-auto gap-6'>
                <Slider {...settings}>
                  {commentData.map(({id, name, text, img}) =>{
                    return (
                      <div key={id} className='my-6'>
                        <div className='flex flex-col py-6 justifly-center items-center gap-4 text-center shadow-lg mx-4 rounded-xl dark:bg-gray-700 dark:text-white bg-lime-400/10 relative'>
                          <img src={img} alt="" className='w-30 aspect-square object-cover object-top rounded-full block mx-auto'/>
                          <h1 className='text-xl font-bold'>"{text}"</h1>
                          <p className='text-gray-500 text-sm'>-{name}-</p>
                        </div>
                      </div>
                    )
                  })}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Comments