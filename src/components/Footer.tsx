import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <div>

      <div className="preview flex min-h-[350px] w-full items-center justify-center p-2 sm:p-10">
        <div className="relative w-full overflow-hidden border-t border-black bg-black px-8 py-20 dark:border-white/[0.1] dark:bg-neutral-950">
          <p className="inset-x-0 mt-20 bg-gradient-to-b from-neutral-950 to-neutral-800 bg-clip-text text-center font-bold text-5xl text-transparent dark:from-neutral-950 dark:to-neutral-800 md:text-9xl lg:text-[12rem] xl:text-[13rem] pb-8">
            Let&apos;s Connect
          </p>


          <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-3 gap-16">
            {/* 1/3 (col 1 de 3) */}
            <div className="md:col-span-1">
                <div className="mb-4 mr-0 md:mr-4">
                <h2 className="text-4xl">Contact</h2>
                </div>
                <div className="ml-2 mt-2">
                <ul>
                    <li>Email: lenindpulgar@gmail.com</li>
                    {/* <li>Phone: +1 (800) 123-4567</li> */}
                    <li>LinkedIn: https://www.linkedin.com/in/lenin-pb</li>
                    <li>Github: https://github.com/leninpulgar</li>
                </ul>
                </div>
            </div>

            {/* 2/3 (col 2 y 3 de 3) */}
            <div className="md:col-span-2">
                <ContactForm className="w-full" />
            </div>
            </div>


          
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
