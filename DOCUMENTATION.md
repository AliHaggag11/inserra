# INSERA Website Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Key Components](#key-components)
5. [Styling](#styling)
6. [Animations](#animations)
7. [Routing](#routing)
8. [State Management](#state-management)
9. [Third-party Libraries](#third-party-libraries)
10. [Performance Optimization](#performance-optimization)
11. [Accessibility](#accessibility)
12. [Responsive Design](#responsive-design)
13. [Making Amendments](#making-amendments)
14. [Deployment](#deployment)
15. [Troubleshooting](#troubleshooting)

## Project Overview
This website is for INSERA, a company specializing in industrial machinery and solutions. The site showcases the company's services, projects, and expertise in various industries, with a focus on plastic packaging & recycling, food manufacturing, and pharmaceutical solutions.

## Technology Stack
- React.js (v18.2.0) - A JavaScript library for building user interfaces
- Vite (v5.4.8) - Next generation frontend tooling
- Tailwind CSS (v3.4.1) - A utility-first CSS framework
- Framer Motion (v11.9.0) - A production-ready motion library for React
- React Router (v6.22.3) - Declarative routing for React applications

<!-- ## Project Structure -->

inserra/
├── src/
│ ├── assets/
│ │ └── plastic.png
│ ├── components/
│ │ ├── FlipWords.jsx
│ │ ├── Footer.jsx
│ │ └── ... (other components)
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── About.jsx
│ │ ├── Contact.jsx
│ │ ├── Careers.jsx
│ │ ├── Partners.jsx
│ │ └── News.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── public/
├── package.json
├── tailwind.config.js
└── vite.config.js

## Key Components

### Home (src/pages/Home.jsx)
The landing page of the website. It includes:
- Hero section with animated text (using FlipWords component)
- Key strengths section
- Core values section
- Company vision/mission/strategy section
- Partner logos marquee
- Featured projects section
- Testimonials section

### About (src/pages/About.jsx)
Company information page. It includes:
- Company overview
- Mission statement
- Key features
- Services
- Company timeline (with animated timeline)

### FlipWords (src/components/FlipWords.jsx)
A reusable component for animated text rotation, used in the hero section of the Home page.

### Footer (src/components/Footer.jsx)
The website footer, included on all pages. Contains contact information, quick links, and a newsletter subscription form.

## Styling
- Tailwind CSS is used for styling.
- Custom styles are defined in `src/index.css`.
- The color scheme and other design tokens are defined in `tailwind.config.js`.
- The primary color scheme uses shades of blue, with the main colors being:
  - Primary: #1e1b4b
  - Primary Light: #2e2a5c
  - Primary Dark: #14123a

## Animations
- Framer Motion is used for animations throughout the site.
- Key animation variants are defined in individual components.
- The FlipWords component uses custom animation for text rotation.
- Scroll-based animations are implemented using the `useInView` hook from `react-intersection-observer`.

## Routing
React Router is used for navigation. Routes are defined in `App.jsx`.

## State Management
- Local state is managed using React's useState hook.
- For more complex state management, consider implementing Redux or React Context if needed in the future.

## Third-party Libraries
- react-slick: Used for carousels (Featured Projects, Testimonials)
- lucide-react: Used for icons
- react-intersection-observer: Used for scroll-based animations
- react-flip-toolkit: Used for flip animations

## Making Amendments

### Updating Content
1. Text content: Directly edit the text in the respective component files (e.g., `Home.jsx`, `About.jsx`).
2. Images: Replace image files in the `src/assets/` directory and update import statements.

### Adding New Pages
1. Create a new file in `src/pages/`.
2. Add the new route in `App.jsx`.
3. Update the navigation menu in the Header component (if applicable).

### Modifying Styles
1. For component-specific styles, use Tailwind classes directly in the JSX.
2. For global styles or custom utilities, edit `src/index.css`.
3. To change the color scheme or add new design tokens, modify `tailwind.config.js`.

### Adding New Features
1. For new reusable components, add them to the `src/components/` directory.
2. For page-specific features, add them directly to the relevant page component.

### Modifying Animations
1. To change existing animations, modify the Framer Motion variants in the respective components.
2. For adding new animations, use Framer Motion's `motion` components and define appropriate variants.

## Deployment
1. Run `npm run build` to create a production build.
2. The built files will be in the `dist/` directory.
3. Deploy the contents of the `dist/` directory to your hosting platform.

Note: Ensure that your hosting platform is configured for single-page applications, as this is a React-based SPA.

For any further questions or clarifications, please contact the development team.
