import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { Phone, MessageSquare, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center gap-y-8 px-8 py-10 max-w-6xl mx-auto"
    >
      <h1 className="text-4xl md:text-5xl font-semibold text-center">
        Contact Me
      </h1>
      <p className="text-md text-gray-600 text-center">Get in Touch</p>

      <div className="flex flex-col md:flex-row gap-10 w-full justify-between">
        {/* Contact Info */}
        <div className="flex flex-col gap-8 md:w-1/2">
          <div className="flex gap-4 items-start">
            <Phone size={28} color="#634ADE" />
            <div>
              <h1 className="text-lg">Call Me</h1>
              <a
                href="tel:9541528256"
                className="text-[#634ade] hover:underline"
              >
                954-152-8256
              </a>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <MessageSquare size={28} color="#634ADE" />
            <div>
              <h1 className="text-lg">E-Mail</h1>
              <a
                href="mailto:paramveer7267@gmail.com"
                className="text-[#634ade] hover:underline"
              >
                paramveer7267@gmail.com
              </a>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <MapPin size={28} color="#634ADE" />
            <div>
              <h1 className="text-lg">Address</h1>
              <p className="text-gray-500">West Delhi, New Delhi - India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h1 className="text-xl text-center md:text-left">
            Interested to work together? Let’s talk
          </h1>
          <form action="" className="flex flex-col gap-y-4 w-full">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 border border-gray-300 px-4 py-2 rounded w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 border border-gray-300 px-4 py-2 rounded w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full h-32 border border-gray-300 px-4 py-2 rounded resize-none"
            />
            <button className="bg-[#634ade] cursor-pointer text-white px-10 py-3 rounded-lg flex items-center justify-center gap-2 mx-auto hover:bg-[#5139C6] hover:scale-110 transition-all">
              <span>Send Message</span>
              <FontAwesomeIcon icon={faPaperPlane} bounce />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
