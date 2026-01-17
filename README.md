# Personal Portfolio Website

A modern, responsive portfolio website for **Ayesha Shabbir** - Computer Science Student | Web & Software Enthusiast.

## 🎨 Features

- **Dark Theme** with blue accent colors
- **Multi-page Navigation** with smooth transitions
- **Fully Responsive** design (Mobile, Tablet, Desktop)
- **Smooth Animations** and scroll effects
- **Interactive Contact Form**
- **Modern UI/UX** design inspired by professional portfolios
- **Photo Section** placeholder for profile image
- **Decorative Patterns** and visual elements

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Home/Hero page
├── about.html          # About Me page
├── skills.html         # Skills & Technologies page
├── projects.html       # Projects showcase
├── education.html      # Education & Certifications
├── contact.html        # Contact form & information
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Optional: A local web server (for best experience)

### Installation

1. **Clone or Download** this repository
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Open the Project**
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance

### Using a Local Server (Recommended)

#### Option 1: Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open: `http://localhost:8000`

#### Option 2: Node.js (http-server)
```bash
npx http-server -p 8000
```

#### Option 3: VS Code Live Server
- Install "Live Server" extension
- Right-click on `index.html` → "Open with Live Server"

## 📝 Customization Guide

### 1. Add Your Photo

Replace the placeholder in `index.html`:
```html
<!-- Find this section -->
<div class="placeholder-image">
    <i class="fas fa-user"></i>
</div>

<!-- Replace with -->
<img src="assets/profile-photo.jpg" alt="Ayesha Shabbir">
```

Create an `assets` folder and add your photo there.

### 2. Update Social Media Links

In `index.html`, update the social media links:
```html
<a href="YOUR_FACEBOOK_URL" class="social-icon">
<a href="YOUR_INSTAGRAM_URL" class="social-icon">
<a href="YOUR_TWITTER_URL" class="social-icon">
<a href="YOUR_GITHUB_URL" class="social-icon dribbble">
```

### 3. Add Resume/CV

1. Place your resume PDF in the project folder
2. Update the link in `index.html`:
```html
<a href="assets/resume.pdf" class="download-cv" download>
```

### 4. Update Contact Information

Edit contact details in `contact.html`:
- Location
- Phone number
- Email address
- Social media links

### 5. Customize Colors

In `styles.css`, modify the CSS variables:
```css
:root {
    --accent-blue: #4a9eff;        /* Main accent color */
    --accent-blue-dark: #357abd;   /* Darker shade */
    --accent-blue-light: #6bb0ff;  /* Lighter shade */
    --bg-primary: #0a0a0a;         /* Background color */
    /* ... more variables */
}
```

### 6. Update Projects

Edit `projects.html` to add/remove projects:
- Update project titles, descriptions
- Add tech stack tags
- Link to GitHub repositories or live demos

### 7. Connect Contact Form

The contact form currently simulates submission. To connect it to a backend:

1. **Using Formspree** (Easy):
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Using EmailJS**:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Add their script and configure

3. **Custom Backend**:
   - Create an API endpoint
   - Update the form submission in `script.js`

## 🎯 Pages Overview

### 🏠 Home (index.html)
- Hero section with introduction
- Call-to-action buttons
- Social media links
- Profile photo section
- Quick about section

### 👤 About (about.html)
- Personal introduction
- Statistics cards
- Languages section

### 💻 Skills (skills.html)
- Programming languages with progress bars
- Web technologies
- Databases
- Core concepts

### 🚀 Projects (projects.html)
- Project cards with descriptions
- Technology tags
- Links to code/demos

### 🎓 Education (education.html)
- Educational timeline
- Certifications & achievements

### 📧 Contact (contact.html)
- Contact information
- Interactive contact form
- Social media links

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔧 Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with animations
- **JavaScript (Vanilla)** - Interactivity
- **Font Awesome** - Icons (CDN)

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

**Ayesha Shabbir**
- 📧 Email: ayeshashabbir8970@gmail.com
- 📞 Phone: 0311 5482701
- 📍 Location: Bhota, Kharian, Gujrat

## 🎨 Design Credits

Design inspired by modern portfolio layouts with a focus on:
- Clean, minimal aesthetics
- Dark theme for reduced eye strain
- Blue accent colors for a professional look
- Smooth animations for better UX

---

**Made with ❤️ for showcasing your skills and projects!**
