# E-commerce PWA

A modern progressive web application for online shopping with real-time search, category filtering, and responsive design.

## Features

- **Product Catalog**: Browse through a diverse collection of products across multiple categories
- **Real-time Search**: Instant product search as you type
- **Category Navigation**: Filter products by Electronics, Clothing, Home, Sports, and Books
- **Responsive Design**: Seamless experience across mobile, tablet, and desktop devices
- **Progressive Web App**: Installable on devices with offline capabilities
- **Optimized Performance**: Fast loading with intelligent caching and lazy loading
- **Modern UI**: Clean and attractive interface built with Tailwind CSS

## Tech Stack

- **[React Router 7](https://reactrouter.com/)** - Modern routing and SSR framework
- **[TanStack Query](https://tanstack.com/query)** - Async state management and caching
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[Workbox](https://developer.chrome.com/docs/workbox/)** - Service workers for PWA functionality

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ecommerce-pwa

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
app/
├── components/          # React components
│   ├── Header.tsx      # Navigation and search header
│   ├── ProductCard.tsx # Individual product display
│   └── ProductGrid.tsx # Product grid layout
├── routes/             # Route components
│   └── home.tsx        # Main shop page
├── services/           # API and data services
│   └── products.ts     # Product data service (mock)
├── types/              # TypeScript type definitions
│   └── product.ts      # Product and Category interfaces
└── root.tsx            # App root with providers
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm typecheck` - Run TypeScript type checking

## Features in Detail

### Product Display
- Grid layout adapting from 1 to 4 columns based on screen size
- Product cards showing image, name, description, rating, price, and stock
- Low stock indicators for products with less than 10 units

### Search & Filtering
- Real-time search across product names and descriptions
- Category-based filtering with 6 categories
- Automatic query debouncing for optimal performance

### State Management
- React Query for server state with 5-minute cache
- Automatic refetching on category or search changes
- Loading states with skeleton screens

### PWA Capabilities
- Installable on mobile and desktop
- Offline support with service workers
- Update notifications for new versions

## Future Enhancements

- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Product details page
- [ ] Checkout process
- [ ] Order history
- [ ] Product reviews
- [ ] Wishlist
- [ ] Real backend integration

## Deployment

The application can be deployed to any platform that supports Node.js applications:

- Vercel
- Netlify
- Fly.io
- Railway
- AWS
- Google Cloud
- Azure

Make sure to deploy the output of `pnpm build`:

```
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## License

MIT

---

Built with React Router 7 and TanStack Query
