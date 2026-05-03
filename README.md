# Personal Portfolio Website

A modern, responsive personal website and portfolio built with vanilla HTML, CSS, and JavaScript, bundled using Webpack. No heavy frameworks (like React) were used—just clean, lightweight, and performant code.

## 🚀 Features

- **Premium Design:** Modern UI with glassmorphism effects, smooth gradients, and micro-animations.
- **Multiple Pages:** Includes Home, About, and Contact pages.
- **AJAX Contact Form:** Functional contact form powered by [Formspree](https://formspree.io/) with a custom success modal pop-up (no page redirects).
- **Click-to-copy Email:** Securely copy the email address to the clipboard with visual feedback.
- **Optimized Build Process:** Configured Webpack to handle CSS extraction (preventing Flash of Unstyled Content), minification, and hot module replacement for development.

## 🛠️ Technologies Used

- **HTML5** (Semantic structure)
- **CSS3** (Variables, Flexbox, Animations, MiniCssExtractPlugin)
- **Vanilla JavaScript** (ES6+, Fetch API, Clipboard API)
- **Webpack 5** (Module bundling & development server)

## 💻 Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Saka-CS/my_website.git
   cd my_website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the Webpack development server with live-reloading:
```bash
npm start
```
The website will open automatically in your default browser at `http://localhost:3000`.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
This will compile and minify the files into the `dist/` directory, which can then be deployed to any static web host (like GitHub Pages, Vercel, or Netlify).

## 📬 Contact Setup
If you fork this repository to use for yourself, remember to replace the Formspree ID in `src/contact.html` (inside the `<form>` tag's `action` attribute) with your own Formspree endpoint URL to receive emails!

---
*Created by [Saka-CS](https://github.com/Saka-CS)*
