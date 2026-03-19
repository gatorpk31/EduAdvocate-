import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;

// PlanVocate branding colors
const navy = '#1B2E4B';
const gold = '#D4920A';
const purple = '#863bff';
const lightPurple = '#ede6ff';
const white = '#ffffff';

// Lightning bolt from favicon (simplified, scaled up)
const lightningBolt = `
  <g transform="translate(85, 175) scale(5.5)">
    <path fill="${purple}" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"/>
  </g>
`;

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${navy};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0f1d33;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${gold};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e8a82e;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Subtle decorative circles -->
  <circle cx="1100" cy="80" r="200" fill="${purple}" opacity="0.08"/>
  <circle cx="1050" cy="550" r="150" fill="${gold}" opacity="0.06"/>
  <circle cx="200" cy="600" r="180" fill="${purple}" opacity="0.05"/>

  <!-- Gold accent line at top -->
  <rect x="0" y="0" width="${WIDTH}" height="5" fill="url(#goldGrad)"/>

  <!-- Lightning bolt icon -->
  ${lightningBolt}

  <!-- PlanVocate text -->
  <text x="370" y="290" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="bold" fill="${white}">
    Plan<tspan fill="${gold}">Vocate</tspan>
  </text>

  <!-- Tagline -->
  <text x="370" y="350" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="${lightPurple}" opacity="0.9">
    Special Education Advocacy Tool
  </text>

  <!-- Divider line -->
  <rect x="370" y="380" width="80" height="3" fill="${gold}" rx="1.5"/>

  <!-- Description -->
  <text x="370" y="425" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="${white}" opacity="0.8">
    Prepare for your child's IEP or 504 meeting
  </text>
  <text x="370" y="458" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="${white}" opacity="0.8">
    with a personalized, research-backed prep guide.
  </text>

  <!-- URL at bottom -->
  <text x="370" y="550" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="${gold}" opacity="0.7">
    planvocate.com
  </text>

  <!-- Bottom gold accent -->
  <rect x="0" y="${HEIGHT - 5}" width="${WIDTH}" height="5" fill="url(#goldGrad)"/>
</svg>
`;

const buffer = Buffer.from(svg);

await sharp(buffer)
  .png()
  .toFile('public/og-image.png');

console.log('OG image created: public/og-image.png (1200x630)');
