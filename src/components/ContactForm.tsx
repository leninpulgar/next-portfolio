"use client";

import { useState, FormEvent } from 'react';
import { Button } from './ui/stateful-button';

export default function ContactForm({ className }: { className?: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'sending' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Por favor, completa todos los campos.'
      });
      return;
    }

    try {
      setStatus({
        type: 'sending',
        message: 'Enviando mensaje...'
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Mensaje enviado correctamente. ¡Gracias por contactarme!'
        });
        // Limpiar el formulario después de un envío exitoso
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
        });
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
      });
    }
  };

  return (
    <form className={`space-y-8 ${className}`} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-lg font-medium">Nombre</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full bg-transparent border-b-2 border-white focus:border-gray-400 focus:outline-none" 
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-lg font-medium">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full bg-transparent border-b-2 border-white focus:border-gray-400 focus:outline-none" 
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-lg font-medium">Mensaje</label>
        <textarea 
          id="message" 
          name="message" 
          rows={4} 
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full bg-transparent border-b-2 border-white focus:border-gray-400 focus:outline-none"
        ></textarea>
      </div>
      
      {/* {status.message && (
        <div className={`text-sm ${status.type === 'error' ? 'text-red-500' : status.type === 'success' ? 'text-green-500' : 'text-blue-500'}`}>
          {status.message}
        </div>
      )} */}
      
      {/* <button 
        type="submit" 
        className="text-lg font-medium hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={status.type === 'sending'}
      >
        {status.type === 'sending' ? 'Enviando...' : 'Enviar'}
      </button> */}

      <Button type="submit" disabled={status.type === 'sending'}>
        {status.type === 'sending' ? 'Enviando...' : 'Enviar'}
      </Button>
    </form>
  );
}