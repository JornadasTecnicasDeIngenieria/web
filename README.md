# Sitio Web JTI

Este repositorio contiene el sitio web oficial de las "Jornadas Técnicas de Ingeniería" (JTI), el mayor evento de ingeniería universitaria en Canarias. El sitio sirve como centro de información para el evento.

## Sobre las JTI

Las JTI son un evento anual organizado por y para estudiantes de ingeniería, que incluye:

- Stands de empresas y oportunidades de networking
- Actividades y competiciones (Escape Room, Competición Arcade, Torneos de Gaming, y más)
- Sorteos y premios

El evento reúne a estudiantes de cuatro disciplinas de ingeniería: Ingeniería Informática, Ingeniería Mecánica, Ingeniería Electrónica e Ingeniería Química Industrial.

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/) - Framework de React
- [React](https://reactjs.org/) - Librería JavaScript
- [Material UI](https://mui.com/) - Librería de componentes React
- [Emotion](https://emotion.sh/) - Estilos CSS-in-JS
- [Docker](https://www.docker.com/) - Plataforma de contenedorización

## Guía de Inicio

Este proyecto está diseñado para ser ejecutado **exclusivamente con Docker Compose**. No es necesario instalar Node.js ni npm en tu máquina local.

### Requisitos Previos

- Docker y Docker Compose instalados en tu sistema.

### Instalación y Ejecución

1. Clona el repositorio:

```bash
git clone git@github.com:JornadasTecnicasDeIngenieria/web.git
cd web
```

2. Arranca el entorno de desarrollo:

```bash
docker compose up
```

Este comando se encargará automáticamente de:
- Descargar la imagen de Docker necesaria.
- Instalar las dependencias del proyecto (`npm install`).
- Iniciar el servidor de desarrollo.

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000). El contenedor soporta "hot-reloading", por lo que los cambios que hagas en los archivos se reflejarán automáticamente.

### Ejecución de Comandos (npm, npx, etc.)

Dado que no necesitamos Node.js en local, cualquier comando que normalmente ejecutarías con `npm` o `npx` debe ejecutarse a través del contenedor usando `docker compose run`.

La sintaxis general es:

```bash
docker compose run --rm web <comando>
```

#### Ejemplos Comunes

**Instalar una nueva dependencia:**

```bash
docker compose run --rm web npm install nombre-del-paquete
```

**Ejecutar un script del package.json (ej. lint):**

```bash
docker compose run --rm web npm run lint
```

**Ejecutar un comando npx:**

```bash
docker compose run --rm web npx create-next-app
```

**Generar build de producción:**

```bash
docker compose run --rm web npm run build
```

## Estructura del Proyecto

```
/
├── components/           # Componentes UI reutilizables
│   ├── home/             # Componentes específicos de la página de inicio
│   └── layouts/          # Componentes de estructura (layouts)
├── data/                 # Archivos JS con datos para contenido dinámico
├── pages/                # Páginas de Next.js y rutas API
├── public/               # Archivos estáticos (imágenes, fuentes)
├── styles/               # Estilos globales y configuración del tema
└── .next/                # Directorio de salida del build
```

## Contribuir

Si eres parte del equipo organizador de las JTI y quieres contribuir a este sitio web, por favor contacta con el líder del equipo de desarrollo para obtener derechos de acceso y guías de contribución.

## Licencia

Este proyecto es propietario y pertenece al comité organizador de las JTI.
