



export default function Home() {
  return (
    <>

      <main className="flex-grow flex flex-col justify-center px-8 md:px-16">
        <div className="max-w-4xl">
          <h1 className="text-8xl md:text-9xl font-bold tracking-tighter">
            Hello.
          </h1>
          <h1 className="text-8xl md:text-9xl font-bold tracking-tighter">
            I am Lenin
          </h1>
        </div>

        <div className="flex items-center mt-8 md:mt-16">
          <svg
            className="w-12 h-12 md:w-16 md:h-16 mr-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            ></path>
          </svg>
          <div>
            <p className="text-lg md:text-xl">Developer</p>
            <p className="text-lg md:text-xl">UX/UI Designer</p>
            <p className="text-lg md:text-xl">Marketing Specialist</p>
          </div>
        </div>
      </main>

      

      <footer className="w-full p-8 flex justify-between items-end">
        <div className="text-lg">
          {/* <p>SHOW</p>
          <p>CREATIVITY</p> */}
        </div>
        <div className="text-right">
          <p className="text-6xl md:text-8xl font-mono">
            {Date().split(" ")[2]}
          </p>
          <p className="text-lg md:text-xl">
            {Date().split(" ")[1]}
          </p>
          <p className="text-sm">NOICE!</p>
          {/* <p className="text-sm">available for work</p> */}
        </div>
      </footer>
    </>
  );
}
