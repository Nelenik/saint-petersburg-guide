# Saint Petersburg Guide

A comprehensive, responsive web guide showcasing the beauty and cultural richness of Saint Petersburg, Russia. This project is a modern single-page application featuring interactive elements, smooth animations, and detailed information about the city's most iconic attractions.

## 🏛️ About the Project

Saint Petersburg Guide is an informative and visually engaging website designed to help tourists and curious travelers discover:
- **Rich History**: A detailed timeline spanning from the city's founding in 1703 to modern times
- **Famous Attractions**: In-depth information about the Hermitage, Winter Palace, Peterhof, St. Isaac's Cathedral, and Palace Square
- **Travel Planning**: Budget estimates and practical travel information
- **Interactive Map**: Yandex Maps integration for navigation and location discovery

## 🎯 Key Features

✨ **Responsive Design** - Optimized for desktop, tablet, and mobile devices

🎬 **Smooth Animations** - WOW.js integration for scroll-triggered animations that create an engaging visual experience

📸 **Image Sliders** - Swiper.js powered carousels for viewing attractions and city descriptions

🗺️ **Interactive Map** - Yandex Maps API integration for exploring Petersburg's locations

📱 **Modern Tech Stack**:
- Gulp 4 for task automation
- SCSS for advanced styling
- Webpack + Babel for JavaScript bundling
- SVG sprites for optimized icons

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Gulp 4** | Task automation and build pipeline |
| **SCSS** | Advanced CSS with variables, mixins, and nesting |
| **Webpack 5** | Module bundling and code splitting |
| **Babel** | ES6+ JavaScript transpilation |
| **Swiper.js** | Touch slider library for carousels |
| **WOW.js** | Scroll animation triggers |
| **Yandex Maps API** | Interactive mapping |
| **SVG Sprites** | Optimized icon management |

## 📁 Project Structure

<details>
<summary><b>Expand Directory Tree</b></summary>

```
├── src/
│   ├── index.html                 # Main HTML file
│   ├── html-parts/                # Modular HTML components
│   │   ├── head.html
│   │   ├── header.html
│   │   ├── hero.html
│   │   ├── about-town.html
│   │   ├── history.html
│   │   ├── sights.html
│   │   ├── budget.html
│   │   ├── map.html
│   │   └── footer.html
│   ├── js/
│   │   ├── index.js
│   │   └── components/
│   │       ├── paginator.js
│   │       ├── modal-constructor.js
│   │       ├── move-block.js
│   │       └── set-focus.js
│   ├── scss/
│   │   ├── index.scss
│   │   └── scss-parts/            # SCSS modules
│   │       ├── _variables.scss
│   │       ├── _mixins.scss
│   │       ├── _fonts.scss
│   │       ├── _base.scss
│   │       ├── _common.scss
│   │       └── site-parts/        # Section-specific styles
│   ├── img/                       # Image assets
│   ├── resources/fonts/           # Custom fonts
│   └── spriteicons/               # SVG icons for sprite
├── gulp/
│   ├── tasks/                     # Gulp task definitions
│   │   ├── html.js
│   │   ├── scss.js
│   │   ├── js.js
│   │   ├── images.js
│   │   ├── sprite.js
│   │   ├── copy.js
│   │   ├── reset.js
│   │   └── test-server.js
│   └── configs/
│       ├── pathes.js              # Path configuration
│       └── plugins.js             # Gulp plugins config
├── webpack.config.js              # Webpack configuration
├── gulpfile.js                    # Gulp entry point
└── package.json                   # Project dependencies
```

</details>

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd saint-petersburg-guide

# Install dependencies
npm install

# or with yarn
yarn install
```

### Development

```bash
# Start development server with live reload
npm run dev

# Runs Gulp default task which:
# - Compiles SCSS
# - Bundles JavaScript with Webpack
# - Copies assets
# - Serves on local dev server
```

### Production Build

```bash
# Build optimized production files
npm run build

# Generates minified CSS, JS, and optimized images
# Output in dist/ directory
```

### Code Quality

```bash
# Lint JavaScript
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

## 📝 Gulp Tasks

| Task | Purpose |
|------|---------|
| `html` | Compiles HTML partials and includes |
| `scss` | Compiles SCSS with autoprefixing and media query grouping |
| `js` | Bundles JavaScript with Webpack and Babel |
| `images` | Optimizes and converts images to WebP format |
| `sprite` | Generates SVG sprite from icon files |
| `copy` | Copies static assets to build directory |
| `reset` | Cleans build directory |
| `test-server` | Starts development server with BrowserSync |

## 🎨 Design Features

- **Responsive Layout** - Mobile-first approach with breakpoints for all devices
- **Smooth Scrolling** - WOW.js animations trigger as users scroll
- **Image Optimization** - WebP format with fallbacks for older browsers
- **Accessibility** - Semantic HTML, ARIA labels, and keyboard navigation
- **Performance** - CSS minification, JS bundling, and image compression

## 🔧 Configuration

### Yandex Maps API
To use the interactive map feature, the project includes a pre-configured Yandex Maps API key bound to:
- localhost (development)
- petersburgguide.netlify.app (production)

To use on your own domain, update in [src/html-parts/head.html](src/html-parts/head.html):
```html
<script src="https://api-maps.yandex.ru/3.0/?apikey=YOUR_API_KEY&lang=en_US"></script>
```

## 📦 Key Dependencies

```json
{
  "main": "Gulp 4.0.2",
  "styling": "Sass 1.57.1",
  "javascript": "Webpack 5.75.0 + Babel",
  "bundling": "webpack-stream 7.0.0",
  "animations": "WOW.js",
  "carousels": "Swiper.js",
  "linting": "ESLint + Prettier"
}
```

## 🌐 Deployment

The project is ready to deploy on any static hosting:
- **Netlify** - Recommended (pre-configured domain)
- **Vercel**
- **GitHub Pages**
- **Traditional hosting** (FTP/SSH)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 👨‍💻 Development Notes

- HTML is modularized using Gulp file-include for easy maintenance
- SCSS is organized by functionality within `scss-parts/`
- JavaScript components are self-contained and reusable
- Build process automatically handles asset optimization

## 🔗 Resources

- [Gulp Documentation](https://gulpjs.com/)
- [SCSS Guide](https://sass-lang.com/documentation)
- [Webpack Documentation](https://webpack.js.org/)
- [Swiper.js Documentation](https://swiperjs.com/)
- [Yandex Maps API](https://yandex.ru/dev/maps/)

## 📧 Questions or Issues?

For questions about the build process, see the detailed documentation in the [gulp/README.MD](gulp/README.MD) file.
