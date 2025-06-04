import Button from "../components/Button"
import {arrowRight} from "../assets/icons"
import {shoes,statistics} from "../constants"
import { bigShoe1 } from "../assets/images"
import Shoecard from "../components/Shoecard";
import{useState} from "react";

const Hero = () => {
  // console.log(shoes);
  const [bigshoeimg,setbigshoeimg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex lg:flex-row flex-col justify-center min-h-screen gap-10 max-container relative"
    >
      <div
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28"
      >
      <p className="text-xl font-montserrat text-red-400">Our Summer Collection</p>
      <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]"> 
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
        <br />
        <span className="text-red-400 inline-block mt-3">Nike</span> Shoes
      </h1>
      <p className="font-montserrat text-gray-400 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish nike arrivals, quality comfort, and innovation for your active life.</p>
      <Button label="Show now" iconURL={arrowRight}/>
      <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
        {statistics.map((stats,index) => {
          return (
            <div key={stats}>
              <h2 className="text-4xl font-bold font-palanquin">{stats.value}</h2>
              <p className="leading-7 font-montserrat text-gray-400">{stats.label}</p>
            </div>
          )
        })}
      </div>
      </div>

      <div className="relative flex justify-center items-center w-full xl:min-h-screen bg-hero bg-cover bg-center bg-no-repeat">
        <img src={bigshoeimg} alt="big shoe" 
          width={600}
          height={500}
          className="object-center relative z-10"
        />
      </div>

      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[55%] max-sm:px-6">
        {shoes.map((shoe,index) => (
          <div key={shoe}>
            <Shoecard 
              imgurl={{thumbnail:shoe.thumbnail,bigShoe:shoe.bigShoe}}
              changebigshoeimage={(shoe)=>setbigshoeimg(shoe)}
              bigshoeimg={bigshoeimg}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero