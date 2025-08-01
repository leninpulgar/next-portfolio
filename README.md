This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Configuración del Formulario de Contacto

El formulario de contacto está configurado para enviar correos electrónicos utilizando Nodemailer. Para que funcione correctamente, debes seguir estos pasos:

### 1. Configurar las variables de entorno

Edita el archivo `.env.local` en la raíz del proyecto y configura las siguientes variables:

```
EMAIL_USER=tu_correo@gmail.com
EMAIL_PASSWORD=tu_contraseña_o_contraseña_de_aplicacion
EMAIL_RECIPIENT=tu_correo@gmail.com
```

### 2. Configuración para Gmail

Si estás utilizando Gmail, debes generar una "contraseña de aplicación" en lugar de usar tu contraseña normal:

1. Ve a tu cuenta de Google
2. Selecciona "Seguridad"
3. En "Acceso a Google", selecciona "Verificación en dos pasos"
4. En la parte inferior, selecciona "Contraseñas de aplicaciones"
5. Genera una nueva contraseña para la aplicación
6. Usa esta contraseña en la variable `EMAIL_PASSWORD`

### 3. Otros proveedores de correo

Si deseas utilizar otro proveedor de correo electrónico, edita el archivo `src/app/api/contact/route.ts` y modifica la configuración del transporte de Nodemailer según sea necesario.

```typescript
const transporter = nodemailer.createTransport({
  service: 'gmail', // Cambia a 'outlook', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
