"use client"
import { ReactNode, useEffect, useState } from "react";
import { LoaderFour } from "./ui/loader";

type Dimensions = {
  width: number;
  height: number;
};



const LazyWrapper = ({ children, dimensions }: { children: ReactNode, dimensions: Dimensions }) => {

// Simular carga con x segundos.
const [isLoaded, setIsLoaded] = useState(false);

// Asignar un timer para simular la carga.
useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoaded(true);
  }, 3000);

  return () => clearTimeout(timer);
}, []);

// Si no está cargado, mostrar un indicador de carga.
if (!isLoaded) {
    return (
      <div
        className="relative animate-pulse bg-white/5 border border-white/10 rounded-md overflow-hidden"
        style={{ minHeight: dimensions.height }} // O usa h-[valor] si conoces altura
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <LoaderFour />
        </div>
        {/* Optional: espacio fantasma para mantener tamaño */}
        <div className="opacity-0">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default LazyWrapper;