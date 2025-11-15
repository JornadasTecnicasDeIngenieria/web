# Imagen de Node LTS con Alpine
FROM node:lts-alpine AS builder

# Establece el entorno a producción
ENV NODE_ENV=production

# Establece el directorio de trabajo DENTRO del contenedor
WORKDIR /app

# Copia los archivos de manifiesto del proyecto
COPY package.json package-lock.json* ./

# Instala TODAS las dependencias
RUN npm ci

# Copia el RESTO del código fuente
COPY . .

# Ejecuta el script de build
RUN npm run build

# Empieza DE CERO con una imagen alpina súper ligera
FROM node:lts-alpine AS runner

WORKDIR /app

# Establece el entorno a producción
ENV NODE_ENV=production

# Copia SÓLO la carpeta 'standalone'
COPY --from=builder /app/.next/standalone ./

# Copia SÓLO las carpetas 'public' y '.next/static'
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Expone el puerto en el que Next.js corre por defecto
EXPOSE 3000

# El comando para arrancar la app
CMD ["node", "server.js"]