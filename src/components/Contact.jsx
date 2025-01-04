// import React, { useState } from "react";
// import { MdEmail, MdLocationOn } from "react-icons/md";
// import { FaWhatsapp } from "react-icons/fa";
// import emailjs from "emailjs-com";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     from_email: "",
//     message: "",
//   });
//   const [isSending, setIsSending] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSending(true);

//     emailjs
//       .send(
//         "service_84gsdhl", // Your Service ID
//         "template_syla2hi", // Your Template ID
//         {
//           to_name: "Mostafiz",
//           from_email: formData.from_email,
//           message: formData.message,
//         },
//         "nyoaPudcifItz_hmG" // Your Public Key
//       )
//       .then(
//         (response) => {
//           setIsSending(false);
//           setSuccessMessage("Message sent successfully!");
//           setFormData({ from_email: "", message: "" });
//         },
//         (error) => {
//           setIsSending(false);
//           setSuccessMessage("Failed to send message.");
//           console.error("Failed to send email:", error);
//         }
//       );
//   };

//   return (
//     <div className="bg-[#111111] text-white py-16 px-6 md:px-24">
//       <h2 className="text-4xl md:text-5xl text-center font-bold mb-12">
//         Get in <span className="text-[#ff5c8d]">Touch</span>
//       </h2>

//       <div className="flex flex-col md:flex-row gap-12 items-start">
//         {/* Left: Form */}
//         <div className="md:w-1/2 bg-[#1a1a1d] p-6 rounded-2xl shadow-md">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label
//                 htmlFor="from_email"
//                 className="block text-sm font-medium mb-2"
//               >
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 id="from_email"
//                 name="from_email"
//                 value={formData.from_email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 bg-[#333] text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff5c8d]"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium mb-2"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows="6"
//                 className="w-full px-4 py-3 bg-[#333] text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff5c8d]"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               disabled={isSending}
//               className={`w-full px-6 py-3 rounded-2xl shadow-md ${
//                 isSending
//                   ? "bg-gray-500 cursor-not-allowed"
//                   : "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 hover:from-[#c772f0] hover:to-[#ff5c8d] transition"
//               } text-white font-semibold`}
//             >
//               {isSending ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//           {successMessage && (
//             <p className="text-sm mt-4 text-center text-green-400">
//               {successMessage}
//             </p>
//           )}
//         </div>

//         {/* Right: Contact Details */}
//         <div className="md:w-1/2 space-y-8 flex flex-col items-center border-2">
//           <div className="flex items-center  gap-6">
//             <MdEmail className="text-4xl text-[#ff5c8d]" />
//             <div>
//               <p className="text-lg font-medium">Email</p>
//               <p className="text-sm text-gray-300">
//                 mrahman202003@bscse.uiu.ac.bd
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center gap-6">
//             <FaWhatsapp className="text-4xl text-[#ff5c8d]" />
//             <div>
//               <p className="text-lg font-medium">WhatsApp</p>
//               <p className="text-sm text-gray-300">01791604420</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-6">
//             <MdLocationOn className="text-4xl text-[#ff5c8d]" />
//             <div>
//               <p className="text-lg font-medium">Location</p>
//               <p className="text-sm text-gray-300">Dhaka, Bangladesh</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import Lottie from "lottie-react";
import contactAnimation from "../../public/contact.json"; // Replace with your Lottie file

const Contact = () => {
  const [formData, setFormData] = useState({
    from_email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_84gsdhl",
        "template_syla2hi",
        {
          to_name: "Mostafiz",
          from_email: formData.from_email,
          message: formData.message,
        },
        "nyoaPudcifItz_hmG"
      )
      .then(
        () => {
          setIsSending(false);
          setSuccessMessage("Message sent successfully!");
          setFormData({ from_email: "", message: "" });
        },
        (error) => {
          setIsSending(false);
          setSuccessMessage("Failed to send message.");
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <div className="bg-[#111111] text-white py-16 px-6 md:px-24">
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-12">
        Get in <span className="text-[#ff5c8d]">Touch</span>
      </h2>

      <div className="grid grid-col-1 md:grid md:grid-cols-2 gap-12 ">
        {/* Left: Form */}
        <div className=" bg-[#1a1a1d] p-6 rounded-2xl shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="from_email"
                className="block text-sm font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#333] text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff5c8d]"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-[#333] text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff5c8d]"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSending}
              className={`w-full px-6 py-3 rounded-2xl shadow-md ${
                isSending
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 hover:from-[#c772f0] hover:to-[#ff5c8d] transition"
              } text-white font-semibold`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
          {successMessage && (
            <p className="text-sm mt-4 text-center text-green-400">
              {successMessage}
            </p>
          )}
        </div>

        {/* Right: Contact Details */}
        
        <div className=" flex flex-col justify-end    border-2">
            <div>
            <div className="mt-12 flex justify-center items-start border-2">
                <Lottie animationData={contactAnimation} loop={true} className="w-80" />
                </div>

                <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-6 cursor-pointer">
                    <MdEmail
                    className="text-4xl text-[#ff5c8d]"
                    onClick={() =>
                        window.open("mailto:mrahman202003@bscse.uiu.ac.bd", "_blank")
                    }
                    />
                    <div>
                    <p className="text-lg font-medium">Email</p>
                    <p className="text-sm text-gray-300">
                        mrahman202003@bscse.uiu.ac.bd
                    </p>
                    </div>
                </div>
                <div className="flex items-center gap-6 cursor-pointer">
                    <FaWhatsapp
                    className="text-4xl text-[#ff5c8d]"
                    onClick={() =>
                        window.open("https://wa.me/+8801791604420", "_blank")
                    }
                    />
                    <div>
                    <p className="text-lg font-medium">WhatsApp</p>
                    <p className="text-sm text-gray-300">01791604420</p>
                    </div>
                </div>
                <div className="flex items-center gap-6 cursor-pointer">
                    <MdLocationOn
                    className="text-4xl text-[#ff5c8d]"
                    onClick={() =>
                        window.open(
                        "https://www.google.com/maps?q=Dhaka,+Bangladesh",
                        "_blank"
                        )
                    }
                    />
                    <div>
                    <p className="text-lg font-medium">Location</p>
                    <p className="text-sm text-gray-300">Dhaka, Bangladesh</p>
                    </div>
                </div>
                </div>
            </div>
          </div>


      </div>

      {/* Optional: Lottie Animation */}
     
    </div>
  );
};

export default Contact;
