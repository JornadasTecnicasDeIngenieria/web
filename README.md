# JTI Website

This repository contains the official website for "Jornadas Técnicas de Ingeniería" (JTI) - the largest university engineering event in the Canary Islands. The website serves as an information hub for the event taking place on December 10th and 11th, 2025.

## About JTI

JTI is an annual event organized by and for engineering students, showcasing:

- Company stands and networking opportunities
- Activities and competitions (Escape Room, Arcade Competition, Gaming Tournaments, and more)
- Raffles and prizes
- Talks and presentations
- Information about the organizing team and sponsors

The event brings together students from four engineering disciplines: Computer Engineering, Mechanical Engineering, Electronic Engineering, and Industrial Chemical Engineering.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - JavaScript library
- [Material UI](https://mui.com/) - React component library
- [Emotion](https://emotion.sh/) - CSS-in-JS styling
- [Docker](https://www.docker.com/) - Containerization platform

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Docker and Docker Compose (for containerized setup)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-organization/JTI-web.git
cd JTI-web
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

### Running the Development Server

You can run the development server in two ways:

#### 1. Locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

#### 2. Using Docker

This method uses Docker Compose to set up a development environment in a container.

```bash
docker-compose up
```

The application will be available at [http://localhost:3000](http://localhost:3000). The container supports hot-reloading.

## Project Structure

```
/
├── components/           # Reusable UI components
│   ├── home/             # Homepage-specific components
│   └── layouts/          # Layout components
├── data/                 # JS data files for dynamic content
├── pages/                # Next.js pages and API routes
├── public/               # Static assets (images, fonts)
├── styles/               # Global styles and theme configuration
└── .next/                # Build output directory
```

## Build and Deployment

### Building for Production

To create a production-ready build:

```bash
npm run build
```

### Running in Production

#### 1. Locally

To start the production server after building:

```bash
npm run start
```

#### 2. Using Docker

The provided `Dockerfile` creates an optimized, multi-stage production build.

1. Build the Docker image:

```bash
docker build -t jti-website .
```

2. Run the container:

```bash
docker run -p 3000:3000 jti-website
```

The application will be running in production mode on [http://localhost:3000](http://localhost:3000).

## Contributing

If you're part of the JTI organizing team and want to contribute to this website, please contact the development team lead for access rights and contribution guidelines.

## License

This project is proprietary and belongs to the JTI organizing committee.
