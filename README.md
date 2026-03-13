# Harvest Community Church Website

A modern, responsive React website for Harvest Community Church built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Fully optimized for desktop, tablet, and mobile devices. Ready for deployment on Vercel.

## 🚀 Features

✅ **Fully Responsive Design** - Works flawlessly on all devices (mobile, tablet, desktop)  
✅ **TypeScript** - Type-safe development for better code quality  
✅ **Tailwind CSS** - Modern, utility-first styling  
✅ **Next.js App Router** - Latest Next.js features for optimal performance  
✅ **Contact Form** - Functional contact form with API integration  
✅ **SEO Optimized** - Metadata configuration for better search visibility  
✅ **Vercel Ready** - One-click deployment to Vercel  
✅ **Professional Design** - Clean, modern interface matching church branding  

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About page
│   ├── services/page.tsx        # Services/Our Work page
│   ├── contact/page.tsx         # Contact page
│   ├── api/
│   │   └── contact/route.ts     # Contact form API endpoint
│   ├── layout.tsx               # Root layout with Header & Footer
│   └── globals.css              # Global styles
├── components/
│   ├── Header.tsx               # Navigation header with mobile menu
│   ├── Hero.tsx                 # Hero/banner section
│   ├── Mission.tsx              # Mission statement section
│   ├── Services.tsx             # Services/outreach activities
│   ├── ContactForm.tsx          # Contact form component
│   ├── Support.tsx              # Donation/support section
│   └── Footer.tsx               # Footer with contact info
├── public/                      # Static assets
└── package.json                 # Dependencies
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

## 📄 Pages

### Home (`/`)
- Hero banner with church mission statement
- Mission section
- Outreach services overview
- Support/donation section

### About (`/about`)
- Detailed mission and vision statements
- Church values and core principles
- About the organization

### Services (`/services`)
- 6 main outreach activities with descriptions
- "Our Work" in the Philippines
- Donation call-to-action

### Contact (`/contact`)
- Contact form (Name, Email, Phone, Message)
- USA contact information
- Ways to get involved

## 🔧 Configuration & Customization

### Update Contact Information
Edit the contact details in:
- `src/components/Footer.tsx` - Footer contact info
- `src/app/contact/page.tsx` - Contact page info

### Modify Church Information
Update the following files:
- `src/components/Header.tsx` - Church name and branding
- `src/components/Footer.tsx` - Church details and year
- `src/app/layout.tsx` - Page title and description

### Customize Colors
The site uses **red-700/red-800/red-900** for the primary brand color. To change:
1. Open any component file
2. Replace `red-700`, `red-800`, etc. with your preferred Tailwind colors
3. Update the footer background color

### Update Mission & Services
- Mission: `src/components/Mission.tsx`
- Services: `src/components/Services.tsx`

## 📧 Contact Form Setup

The contact form is connected to an API endpoint at `/api/contact`. Currently, it logs submissions to the console.

### To Enable Email Notifications
Replace the `// TODO:` section in `src/app/api/contact/route.ts` with one of these services:

**Option 1: Resend (Recommended)**
```bash
npm install resend
```

**Option 2: SendGrid**
```bash
npm install @sendgrid/mail
```

**Option 3: Nodemailer**
```bash
npm install nodemailer
```

Add your API key to `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
RESEND_API_KEY=your_key_here
```

## 🚀 Deployment on Vercel

### Option 1: Simple Push (Recommended)
```bash
# Ensure you have a Git repository
git add .
git commit -m "Initial commit"
git push

# Go to https://vercel.com and import this repository
```

### Option 2: Command Line
```bash
npm i -g vercel
vercel
```

### Post-Deployment
1. Set up environment variables in Vercel dashboard
2. Configure custom domain if available
3. Enable analytics in Vercel settings

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are tested and optimized for these breakpoints.

## 🔒 Best Practices

- ✅ All components use TypeScript for type safety
- ✅ Forms include validation and error handling
- ✅ Responsive images and lazy loading ready
- ✅ SEO-optimized metadata
- ✅ Accessible HTML structure

## 📚 Technologies Used

- **Next.js 15+** - React framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS
- **React Hooks** - State management
- **ESLint** - Code quality

## 💡 Support & Contributing

For questions or suggestions:
- Email: rogerbc2000@gmail.com
- Phone: (310) 619-0182

## 📄 License

© 2025 Harvest Community Church. A non-profit organization 501(c)(3)

---

Happy serving! May God bless your ministry. 🙏
