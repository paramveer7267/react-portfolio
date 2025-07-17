const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center gap-y-8 max-w-5xl mx-auto py-15"
    >
      <h1 className="text-5xl font-semibold">Contact Me</h1>
      <p className="text-md text-gray-600">Get in Touch</p>
      <div className="flex justify-center gap-100">
        <div>
          <h1>Call me</h1>
          <p>u1432u4932u32sdfklsdfsdmklfs</p>
        </div>
        <div>
          <h1>inteerners</h1>
          <form action="" >
            <div>
              <input type="text" placeholder="ndsfkjsn" />
              <input type="email" placeholder="ndsgjsdsd" />
            </div>
            <div >
              <input type="text" placeholder="sdkfndfjksd" className="w-full"/>
            </div>
            <textarea type="text" placeholder="dskvndskjdsnk" className="w-full h-30"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
