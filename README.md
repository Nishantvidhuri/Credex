# SoftSell - Software License Resale Platform

SoftSell is a modern, responsive marketing website for a fictional software license resale startup. This single-page website showcases the service offerings and provides an interface for potential customers to get valuations for their unused software licenses.

## 🚀 Features Implemented

- **Responsive Design**: Fully optimized for all screen sizes (mobile, tablet, desktop)
- **Modern UI**: Clean, minimal design with smooth animations using Framer Motion
- **Dark/Light Mode**: Theme toggle with automatic system preference detection
- **Interactive Components**:
  - Mobile-friendly navigation with smooth transitions
  - Animated sections with staggered effects
  - Form validation on the contact form
  - Interactive AI chatbot widget with canned responses
- **SEO Optimized**: Comprehensive meta tags for better search engine visibility

## 💻 Technical Details

- **Framework**: React with Vite for fast development
- **Styling**: Tailwind CSS for utility-first styling
- **Animations**: Framer Motion for smooth transitions and interactions
- **Form Validation**: Custom client-side validation logic
- **Component Structure**: Modular, reusable components

### Key Components

1. **Hero Section**: Engaging headline, subheading, and CTA
2. **How It Works**: Three-step process explanation with icons
3. **Why Choose Us**: Benefits display with icons and descriptions
4. **Testimonials**: Customer reviews with avatars
5. **Contact Form**: Lead generation form with validation
6. **AI Chatbot**: The ChatWidget component has been enhanced with Google API integration to provide dynamic responses

## 🎨 Design Decisions

- **Color Scheme**: Primary blue gradient with complementary grays for a professional, trustworthy appearance
- **Typography**: Clean, sans-serif font (Inter) for optimal readability
- **Spacing**: Consistent padding and margins for visual harmony
- **Animations**: Subtle animations to enhance user experience without being distracting
- **Accessibility**: High contrast text, semantic HTML, and keyboard navigation
- **Dark Mode**: Complete dark mode implementation with smooth transitions

## ⏱️ Development Time

- **Research & Planning**: 1 hour
- **Component Design**: 2 hours
- **Development**: 4 hours
- **Testing & Refinement**: 1 hour
- **Total**: 8 hours

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## 📱 Deployment

Ready to be deployed on Vercel with the following command:
```
vercel
```

## 📝 License

This project is intended as a demonstration and is not for commercial use.

## 🔮 Future Enhancements

- Integration with a backend service for form submissions
- Authentication for user accounts
- Dynamic pricing calculator for software licenses
- Blog section with articles about software licensing

## 🤖 AI Integration

The ChatWidget component has been enhanced with Google API integration to provide dynamic responses:

- Replaced static pre-programmed responses with Google's conversational AI API
- Added typing indicators and realistic response delays
- Implemented context-aware conversations that remember previous messages
- Configured domain-specific knowledge about software licensing
- Removed suggested questions UI for a cleaner interface
- Ensured proper theming in both light and dark modes