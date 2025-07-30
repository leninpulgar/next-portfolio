export default function ContactForm() {
  return (
    <form className="space-y-8">
      <div>
        <label htmlFor="name" className="block text-lg font-medium">Name</label>
        <input type="text" id="name" name="name" className="mt-1 block w-full bg-transparent border-b-2 border-white focus:border-gray-400 focus:outline-none" />
      </div>
      <div>
        <label htmlFor="email" className="block text-lg font-medium">Email</label>
        <input type="email" id="email" name="email" className="mt-1 block w-full bg-transparent border-b-2 border-white focus:border-gray-400 focus:outline-none" />
      </div>
      <div>
        <label htmlFor="message" className="block text-lg font-medium">Message</label>
        <textarea id="message" name="message" rows={4} className="mt-1 block w-full bg-transparent border-b-2 border-white focus:border-gray-400 focus:outline-none"></textarea>
      </div>
      <button type="submit" className="text-lg font-medium hover:underline">Send</button>
    </form>
  );
}