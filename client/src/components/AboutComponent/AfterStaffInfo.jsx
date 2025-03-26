// import React, { useState } from "react";
// import img from "../../assets/images/storeImages/img81.png";

// const AfterStaffInfo = () => {
//   const [show, setShow] = useState(null);
//   const handleShow = (id) => {
//     if (show === id) {
//       setShow(null);
//     } else {
//       setShow(id);
//     }
//   };
//   const accordionData = [
//     {
//       id: 1,
//       data: "CONNECTING PEOPLE",
//       info: "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!",
//     },
//     {
//       id: 2,
//       data: "WE BUILD YOUR DREAM",
//       info: "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!",
//     },
//     {
//       id: 3,
//       data: "NOTHING TO FEAR",
//       info: "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!",
//     },
//     {
//       id: 4,
//       data: "MAKE THE WORLD BETTER",
//       info: "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!",
//     },
//   ];
//   return (
//     <div>
//       <div className="flex-col flex md:flex-row gap-10">
//         <div className="image w-full md:w-[50%]">
//           <img src={img} className="object-cover w-full" alt="" />
//         </div>
//         <div className="w-full md:w-[50%] space-y-3 flex flex-col justify-center">
//           {accordionData.map((accordion) => (
//             <div className="border p-4 ">
//               <div
//                 className="flex items-center justify-between  opacity-80 cursor-pointer"
//                 onClick={() => handleShow(accordion.id)}
//               >
//                 <h1 className="font-semibold">{accordion.data}</h1>
//                 <span>{show === accordion.id ? "➖" : "➕"}</span>
//               </div>
//               {show === accordion.id && (
//                 <p className="pt-4 transition-all duration-500">
//                   {accordion.info}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AfterStaffInfo;

// ChatGPT code...

import React, { useState, useRef } from "react";
import img from "../../assets/images/storeImages/img81.png";

const AfterStaffInfo = () => {
  const [show, setShow] = useState(1); // Set default to the first item
  const contentRefs = useRef({}); // Stores refs for each accordion

  const handleShow = (id) => {
    setShow((prev) => (prev === id ? null : id));
  };

  const accordionData = [
    {
      id: 1,
      data: "CONNECTING PEOPLE",
      info: "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!.",
    },
    {
      id: 2,
      data: "WE BUILD YOUR DREAM",
      info: "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!.",
    },
    {
      id: 3,
      data: "NOTHING TO FEAR",
      info: "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!.",
    },
    {
      id: 4,
      data: "MAKE THE WORLD BETTER",
      info: "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!.",
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="image w-full md:w-[50%]">
          <img src={img} className="object-cover w-full" alt="" />
        </div>
        <div className="w-full md:w-[50%] space-y-3 flex flex-col justify-center">
          {accordionData.map((accordion) => (
            <div className="border border-gray-400 p-4" key={accordion.id}>
              <div
                className="flex items-center justify-between opacity-80 cursor-pointer"
                onClick={() => handleShow(accordion.id)}
              >
                <h1 className="font-semibold">{accordion.data}</h1>
                <span>{show === accordion.id ? "➖" : "➕"}</span>
              </div>

              {/* Smooth transition using dynamic height */}
              <div
                ref={(el) => (contentRefs.current[accordion.id] = el)}
                className="overflow-hidden transition-all duration-500"
                style={{
                  height:
                    show === accordion.id
                      ? contentRefs.current[accordion.id]?.scrollHeight
                      : 0,
                  opacity: show === accordion.id ? 1 : 0,
                }}
              >
                <p className="pt-4">{accordion.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfterStaffInfo;
