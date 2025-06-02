# Portfolio Website

This repository contains the source code for my personal portfolio website, built using modern web development tools and practices. The website showcases my skills, projects, and contact information in a visually appealing and responsive design.

## Features
- **React & TypeScript**: Component-based architecture for scalability and maintainability.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **Reusable Components**: Modular UI components like buttons, cards, sliders, and more.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **404 Error Page**: Custom error page for non-existent routes.

## Project Structure
- **`src/components/ui`**: Contains reusable UI components.
- **`src/pages`**: Includes main pages like `Index.tsx` (portfolio page) and `NotFound.tsx` (404 error page).
- **`src/hooks`**: Custom hooks for specific functionalities.
- **`src/lib`**: Utility functions.
- **`public`**: Static assets like favicon and robots.txt.
- **Configuration Files**: Includes `tailwind.config.ts`, `vite.config.ts`, and `eslint.config.js` for project setup.

## Deployment
The website is deployed on Vercel, a platform for frontend frameworks and static sites.

### Steps to Deploy on Vercel
1. **Fork or Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Build the Project**:
   Generate the production build:
   ```bash
   npm run build
   ```

4. **Deploy to Vercel**:
   - Sign in to [Vercel](https://vercel.com/).
   - Create a new project and import your repository.
   - Configure the build settings:
     - Framework Preset: `Vite`
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click **Deploy**.

5. **Access Your Website**:
   Once deployed, Vercel will provide a URL for your live website.

## License
This project is open-source and available under the MIT License.