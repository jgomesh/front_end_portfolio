import React from 'react';

function Contact() {
  return (
    <div name="contact" className="w-full h-screen  flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/d0f36b73-31da-48d6-8f96-40bf1d3c760d" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-white">Contact</p>
          <p className="text-white py-4">Submit the form below or shoot me and email - joao.gomeshugill@gmail.com</p>
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
        <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" />
        <textarea className="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder="Message"></textarea>
        <button type="submit" className="text-white border-2 hover:bg-[#4dc251] hover:border-[#4CAF50] px-4 py-3 my-8 mx-auto flex items-center transition">Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact;
