const ContactForm = () => {
  return (
    <section className="py-6 bg-zinc-950 text-gray-50">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">CONTACT INFO</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#0E7490"
                className="w-8 h-8 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="font-light">
                Plot # 38, Road # 05, Sector # 03, Uttara Model Town,
                Dhaka-1230, Bangladesh.
              </span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#0E7490"
                className="w-8 h-8 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+880 1722 283 001</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#0E7490"
                className="w-8 h-8 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>info@smbtex.com</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#0E7490"
                className="w-8 h-8 mr-2 sm:mr-6"
              >
                <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
              </svg>
              <span>www.smbtex.com</span>
            </p>
          </div>
        </div>
        <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              placeholder="Leroy Jenkins"
              className="p-2 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-800"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              placeholder="leroy@jenkins.com"
              className="p-2 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-800"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea className="block w-full rounded-md focus:ring focus:ri focus:ri bg-gray-800"></textarea>
          </label>
          <button
            type="button"
            className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri bg-cyan-600 text-gray-50 focus:ri hover:ri"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
