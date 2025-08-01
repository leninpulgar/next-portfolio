import ContactForm from "@/components/ContactForm";


export default function Contact() {
  return (
    <div>
      <section id="contact" className="py-20 px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-8xl font-bold tracking-tighter mb-8" style={{
              WebkitTextStroke: '2px white',
              WebkitTextFillColor: 'black'
            }}>Contact</h2>
            <div className="space-y-4">
              <p className="text-lg">
                I&apos;m Lenin Pulgar, a Full-Stack Software Engineer with over 9 years of experience passionate about building scalable, intuitive, and high-performance web applications.
                <br />
                Whether you&apos;re looking to discuss a potential project, explore collaboration opportunities, or simply connect about the latest in web development, I&apos;d love to hear from you.
                <br />

                Feel free to reach out directly via email or connect with me on LinkedIn. I&apos;m always eager to leverage my expertise in ReactJS, Next.js, Node.js, and comprehensive UI/UX design to create impactful digital solutions.
                <br />
                <br />
                Email: <a href="mailto:lenindpulgar@gmail.com" className="hover:underline">lenindpulgar@gmail.com</a>
                <br />
                {/* Phone: 
                <br /> */}
                LinkedIn: https://www.linkedin.com/in/lenin-pb
                <br />
                Github: https://github.com/leninpulgar
                <br />
                <br />

                Looking forward to hearing from you!
              </p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}