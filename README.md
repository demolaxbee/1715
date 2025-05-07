# Party & Clothing Brand Website

A visually striking, animated, and mobile-friendly website for a party and clothing brand. The design is inspired by modern fashion brand websites with bold typography, smooth animations, and a clean, responsive layout.

## 🚀 Features

- Modern design with bold typography and striking visuals
- Animated transitions using Framer Motion
- Fully responsive layout for all device sizes
- Interactive elements and hover effects
- "Coming Soon" shop page with email notification form
- Events section displaying upcoming brand events
- Contact and newsletter subscription
- Performance optimized with Next.js 

## 🔧 Tech Stack

- **Next.js** - React framework with app directory structure
- **TypeScript** - Type safety and improved developer experience
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library for smooth transitions
- **Google Fonts** - Custom typography
- **Vercel** - Recommended for deployment

## 📋 Requirements

- Node.js 18.17.0 or later
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd party-clothing-brand
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 🚀 Deployment

This project is set up to be deployed with Vercel:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

Alternatively, you can connect your GitHub repository to Vercel for automatic deployments.

## 🧪 Environment Variables

For production, you may want to set up environment variables in a `.env.local` file. Example:

```env
NEXT_PUBLIC_SITE_URL=https://your-site-url.com
```

## 📁 Project Structure

```
/
├── public/            # Static assets
│   └── images/        # Image files
├── src/
│   ├── app/           # Next.js app directory
│   │   ├── shop/      # Shop page route
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx # Root layout
│   │   └── page.tsx   # Home page
│   ├── components/    # React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── ...
│   └── styles/        # Additional styles
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project dependencies
```

## 🎨 Customization

- **Colors**: Edit the color scheme in `tailwind.config.js`
- **Fonts**: Change the fonts in `src/app/layout.tsx`
- **Content**: Update the content in each component file

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any questions or suggestions, please reach out to [contact information].
