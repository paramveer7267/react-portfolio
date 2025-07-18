import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { Phone, MessageSquare, MapPinHouse } from "lucide-react";
const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center gap-y-8 mx-auto py-15"
    >
      <h1 className="text-5xl font-semibold">Contact Me</h1>
      <p className="text-md text-gray-600">Get in Touch</p>
      <div className="flex justify-center gap-90">
        <div className="py-8 flex flex-col gap-y-8">
          <div className="flex gap-x-4">
            <Phone size={28} color="#634ADE" />
            <div className="space-y-2">
              <h1 className="text-lg">Call me</h1>
              <a
                href="tel:9541528256"
                className="text-[#634ade] hover:underline"
              >
                954-152-8256
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <MessageSquare size={28} color="#634ADE" />
            <div className="space-y-2">
              <h1 className="text-lg">E-Mail</h1>
              <a
                href="mailto:paramveer7267@gmail.com"
                className="text-[#634ade] hover:underline"
              >
                paramveer7267@gmail.com
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <MapPinHouse size={28} color="#634ADE" />
            <div className="space-y-2">
              <h1 className="text-lg">Address</h1>
              <p className="text-gray-500">West Delhi, New Delhi - India</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-xl">Interested to work together? - Let's talk</h1>
          <form action="" className="flex-col flex gap-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 px-2 py-1 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 px-2 py-1 rounded"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 px-2 py-1 rounded"
              />
            </div>
            <textarea
              type="text"
              placeholder="Your Message "
              className="w-full h-30 border border-gray-300 px-2 py-1 rounded resize-none"
            />
            <button className="cursor-pointer bg-[#634ade] text-white px-16 items-center py-2 rounded-lg flex mx-auto hover:bg-[#5139C6] hover:scale-110 transition-all transform">
              <p className="pr-2">Send Message</p>
              <FontAwesomeIcon icon={faPaperPlane} bounce />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
