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
                <a href="mailto:your.email@example.com" className="hover:underline">your.email@example.com</a>
              </p>
              <p className="text-lg">+1 234 567 890</p>
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