# Elite Fit Circle - Men's Fitness Group Website

A modern, responsive static HTML website for Elite Fit Circle, a men's fitness community originally organized through WhatsApp.

## Features

- **Fully Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fitness Theme**: Bold color scheme with orange/red accents on dark background
- **Interactive Elements**: Smooth scrolling, animated counters, and hover effects
- **Sections Include**:
  - Hero section with call-to-action
  - About the group with statistics
  - Founder profile with image and highlights
  - YouTube podcast playlist (embedded)
  - Activities showcase (6 main activities)
  - Benefits of joining (6 key benefits)
  - Join section with prominent CTAs
  - Footer with navigation links

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, animations
- **JavaScript**: Interactive features and smooth scrolling
- **Google Fonts**: Montserrat and Open Sans

## Color Scheme

- Primary: `#ff6b35` (Orange)
- Secondary: `#f7931e` (Golden Orange)
- Dark Background: `#1a1a1a`
- Darker Background: `#0f0f0f`
- Light Background: `#2a2a2a`
- Text Light: `#ffffff`
- Text Gray: `#b0b0b0`

## File Structure

```
elitefitcircle/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript for interactivity
├── founder.jpg         # Founder's image (add your own)
├── founder.jpg.txt     # Instructions for adding founder image
└── README.md           # Documentation
```

## Getting Started

1. Simply open `index.html` in your web browser
2. No build process or dependencies required
3. All assets are self-contained

## Customization

### Add Founder Image (YouTube Thumbnail)
The website is configured to use a YouTube video thumbnail as the founder's image.

**To set up:**
1. Go to your YouTube playlist and click on a video
2. Copy the video ID from the URL (the part after `v=`)
3. Open `index.html` and find line 74
4. Replace `VIDEO_ID_HERE` with your actual video ID (appears twice)
5. Example: `https://img.youtube.com/vi/ABC123XYZ/maxresdefault.jpg`

**YouTube thumbnail URLs:**
- `maxresdefault.jpg` - Highest quality (1280x720)
- `hqdefault.jpg` - High quality (480x360) - fallback
- See `founder.jpg.txt` for detailed instructions

**Alternative - Use a regular image file:**
1. Save your image as `founder.jpg` in the root directory
2. Update line 74 to: `<img src="founder.jpg" alt="Founder of Elite Fit Circle" class="founder-image">`

### Update Founder Info
Edit the founder section in `index.html` (lines 76-93) to customize:
- Bio text
- Highlights (Certified Fitness Expert, Content Creator, etc.)

### YouTube Playlist
The playlist is already embedded (lines 108-115 in `index.html`). To change it:
```html
<iframe src="https://www.youtube.com/embed/videoseries?list=YOUR_PLAYLIST_ID">
```

### Update WhatsApp Link
Edit the "Join WhatsApp Group" button in `index.html` (around line 206):
```html
<a href="YOUR_WHATSAPP_GROUP_LINK" class="btn btn-primary btn-large">Join WhatsApp Group</a>
```

### Modify Statistics
Update the numbers in the stats section (lines 49-60 in index.html)

### Change Colors
Modify the CSS variables in `styles.css` (lines 9-18)

### Add Social Media Links
Update footer links with your actual social media URLs (lines 235-239 in index.html)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

This is a static website and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any web hosting service

## License

Free to use and modify for your fitness group.
