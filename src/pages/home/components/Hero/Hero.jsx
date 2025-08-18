import React from 'react'
import logo from '../../../../assets/web/football.png';
import mu from '../../../../assets/web/manchester-united (1).png'
import real from '../../../../assets/web/real-madrid.png'
import psg from '../../../../assets/web/paris-saint-germain.png'
import { useNavigate } from "react-router-dom";

const ImageList = [
    {
        id: 1,
        image: real,
    },
    {
        id: 2,
        image: mu,
    },
    {
        id: 3,
        image: psg,
    }
]

const bgImage={
    backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/003/098/572/non_2x/stadium-football-background-at-night-free-vector.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
};

const Hero = () => {
    const [imageId, setImageId] = React.useState(real);
    const navigate = useNavigate();
  return (<>
  <div
  style={bgImage}
  className="min-h-[700px] sm:min-h-[800px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center"
  >
    <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text */}
            <div className="flex flex-col justify-center gap-4 mx-6 pt-12 sm:pt-0 items-center sm:items-start order-2 sm:order-1">
                <h1 className="text-lime-400 text-4xl sm:text-6xl xl:text-7xl font-bold">FOOTBALL PLAYER</h1>
                <p className="text-lg font-semibold italic text-amber-50"> 
                    TONI KROOS SUÝT GIA NHẬP MU<br />
                    Toni đã rất gần với MU và cứ ngỡ rằng anh sẽ mang trong mình máu quỷ<br />
                    Nhưng không anh chọn Real Madrid và trở thành Tám Nghiệp<br />
                </p>
                <div>
                    <button className="bg-gradient-to-r from-lime-400 to-sky-600 text-white px-4 py-1 rounded-2xl hover:scale-110 duration-300 flex items-center gap-2"
                            onClick={() => navigate("/lineup")}>
                        LINEUP BUILD
                    </button>
                </div>
            </div>
            {/* Ảnh */}
            <div className="order-1 sm:order-2 min-h-[350px] sm:min-h-[450px] flex justify-center items-center relative ">
                <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                    <img 
                    src={imageId} alt="" 
                    className="w-[150px] sm:w-[250px] mx-auto spin"
                    />
                </div>
                {/* image list section */}
                <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 p-2 rounded-full">
                    {ImageList.map((item)=>(
                        <img
                            key={item.id}
                            src={item.image}
                            className="max-w-[60px] h-[60px] object-contain inline-block hover:scale-105 duration-200"
                            onClick={()=>{
                                setImageId(
                                    item.id === 1? real : item.id === 2? mu : psg
                                );
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
  </div>
  </>)
}

export default Hero