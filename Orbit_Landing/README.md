# Orbit Mobiles Landing Page

A premium, interactive, and responsive static landing page built for **Orbit Mobiles** in Syston, Leicester.

## Project Structure
* `index.html` - The main markup file, structured semantically.
* `style.css` - Custom styling with design tokens, responsive grid/flex systems, background orbit rings, glassmorphic card overlays, and modal transition animations.
* `app.js` - Client-side interactive scripts for the Repair Calculator, Pre-Owned Stock filter, and the native booking modal.
* `assets/` - Image assets generated for the storefront.
  * `hero_phone_orbit.png` - Futuristic smartphone floating with glowing orbits.
  * `repair_tech_station.png` - High-tech repair workbench illustration.

## Features
1. **Interactive Repair Calculator**: Instant estimates for popular Apple, Samsung, and Google devices.
2. **Pre-Owned Stock Grid**: Category filters for active stock catalog list.
3. **Native Dialog Booking**: Uses HTML5 `<dialog>` for fast, modern popup forms with local validation.
4. **Fluid Space Theme**: Elegant dark layout featuring glow paths, neon accents, and smooth hover scales.

## Running Locally

To launch this landing page on your machine, run a local web server from your terminal:

```bash
# Using Python
python -m http.server 8000 --directory "Orbit_Landing"
```

Then visit [http://127.0.0.1:8000](http://127.0.0.1:8000) in your web browser.
