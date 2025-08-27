
import clothpic from "../assets/cloth1.jpg";

function Hero(){
    return(
        <div>
            <div className=" bg-yellow-600px-6 py-10 mb=10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
       
        <div className="w-full md:w-1/2">
          <img
            src={clothpic}
            alt="Travel"
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>

   
        <div className="w-full md:w-1/2 flex flex-col justify-between h-full text-center md:text-left gap-6">
        
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-950">
              365 <br /> Buy Now <br /> so you do not regret
            </h1>
          </div>

          <div>
            <p className="text-base text-black max-w-md">
              Every thing you need get it from one place 
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>
    )

}
export default Hero