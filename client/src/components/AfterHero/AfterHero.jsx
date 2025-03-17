import React from "react";
import img1 from "../../assets/images/img1.jpg";
import gamla1 from "../../assets/images/gamla1.png";
import gamla2 from "../../assets/images/gamla2.png";
import gamla3 from "../../assets/images/gamla3.png";

const AfterHero = () => {
  return (
    <div>
      <div className="main flex flex-col [@media(min-width:991px)]:flex-row">
        <div className="leftImage [@media(min-width:991px)]:w-[50%] px-2 object-center borderr">
          <img src={img1} alt="" />
        </div>

        <div className="rightContent w-full [@media(min-width:991px)]:w-[50%] px-3 space-y-6 lg:space-y-13 [@media(max-width:576px)]:space-y-3 borderr">
          <div className="space-y-8">
            <h1 className="font-['Playfair_Display'] relative after:block after:content-[''] after:w-[100px] after:mt-4 after:h-[3px] after:bg-green-500 text-4xl font-semibold">
              Why choose us?
            </h1>
            <p className="opacity-60">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
              impedit assumenda distinctio ipsa, necessitatibus ipsum.
              Praesentium asperiores iste minus accusamus in. Mollitia quae, ea
              dolorum adipisci laboriosam odit. ...{" "}
              <span className="text-green-500 italic">Learn More</span>
            </p>
          </div>
          <div className="space-y-5 lg:space-y-10 [@media(max-width:576px)]:space-y-3">
            <div className="boxPara flex space-x-1">
              <div className="img w-[13%] flex items-center justify-center borderr">
                <img src={gamla1} alt="gamla" />
              </div>
              <div className="para flex-1 space-y-1">
                <h1 className="text-xl font-semibold">Hand Planted</h1>
                <p className="opacity-60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  nisi nulla! Pariatur excepturi dolorum tenetur vel accusantium
                  libero porr.
                </p>
              </div>
            </div>

            <div className="boxPara flex space-x-1">
              <div className="img w-[13%] flex items-center justify-center borderr">
                <img src={gamla2} alt="gamla" />
              </div>
              <div className="para flex-1 space-y-1">
                <h1 className="text-xl font-semibold">Natural Sunlight</h1>
                <p className="opacity-60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  nisi nulla! Pariatur excepturi dolorum tenetur vel accusantium
                  libero porr.
                </p>
              </div>
            </div>

            <div className="boxPara flex space-x-1">
              <div className="img w-[13%] flex items-center justify-center borderr">
                <img src={gamla3} alt="gamla" />
              </div>
              <div className="para flex-1 space-y-1">
                <h1 className="text-xl font-semibold">Clean Air</h1>
                <p className="opacity-60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  nisi nulla! Pariatur excepturi dolorum tenetur vel accusantium
                  libero porr.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterHero;
