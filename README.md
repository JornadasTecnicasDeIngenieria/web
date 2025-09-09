# JTI Website

This repository contains the official website for "Jornadas Técnicas de Ingeniería" (JTI) - the largest university engineering event in the Canary Islands. The website serves as an information hub for the event taking place on December 10th and 11th, 2024.

## About JTI

JTI is an annual event organized by and for engineering students, showcasing:

- Company stands and networking opportunities
- Activities and competitions
- Raffles and prizes
- Talks and presentations
- Information about the organizing team and sponsors

The event brings together students from four engineering disciplines: Computer Engineering, Mechanical Engineering, Electronic Engineering, and Chemical Engineering.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Material UI](https://mui.com/) - React component library
- [Styled Components](https://styled-components.com/) - CSS-in-JS styling
- [Emotion](https://emotion.sh/) - CSS-in-JS styling
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

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

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

## Project Structure

```
/
├── components/           # Reusable UI components
│   ├── home/             # Homepage-specific components
│   └── layouts/          # Layout components
├── data/                 # JSON/JS data files for content
├── lib/                  # Utility functions
├── pages/                # Next.js pages
├── public/               # Static assets
│   └── images/           # Image files
└── styles/               # Global styles
```

## Build and Deployment

To build the project for production:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## Contributing

If you're part of the JTI organizing team and want to contribute to this website, please contact the development team lead for access rights and contribution guidelines.

## License

This project is proprietary and belongs to the JTI organizing committee.
