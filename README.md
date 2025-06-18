# Fork and Feast

A modern recipe sharing and collaboration platform inspired by GitHub's fork system. Share, fork, and improve recipes with the community.

## Features

- 🍳 Recipe sharing and discovery
- 🔄 Fork and modify existing recipes
- ⭐ Star and save favorite recipes
- 💬 Comment and discuss recipes
- 📸 Share recipe attempts with photos and reviews
- 👥 User profiles and activity tracking
- 🏷️ Recipe tagging and categorization
- ⏱️ Cooking time and difficulty indicators
- 🔍 Advanced filtering and search

## Recipe Attempts Feature

Users can now share their cooking experiences by uploading photos and writing reviews of their recipe attempts. This feature includes:

- **Photo Upload**: Multiple photo uploads to showcase cooking results
- **Star Rating**: Rate recipes from 1-5 stars
- **Difficulty Assessment**: Share how difficult the recipe was for you
- **Time Tracking**: Record how long the recipe took to make
- **Detailed Reviews**: Write comprehensive reviews with tips and modifications
- **Community Interaction**: Like and comment on other users' attempts
- **Recipe Statistics**: View success rates, average ratings, and total attempts

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Package Manager**: pnpm
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Charts**: Recharts
- **Notifications**: Sonner
- **File Upload**: Native HTML5 File API with FormData

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/fork-and-feast.git
cd fork-and-feast
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Create a production build
- `pnpm start` - Run the production build
- `pnpm lint` - Run the linter

## Project Structure

```
fork-and-feast/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── attempts/      # Recipe attempts API
│   ├── user/              # User profile pages
│   ├── recipe/            # Recipe pages
│   ├── fork/              # Fork functionality
│   ├── pull/              # Pull request system
│   └── pulls/             # Pull requests listing
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   └── recipe-attempts.tsx # Recipe attempts component
├── lib/                   # Utility functions and configurations
├── hooks/                 # Custom React hooks
├── public/               # Static assets
└── styles/               # Global styles
```

## API Endpoints

### Recipe Attempts

- `POST /api/attempts` - Submit a new recipe attempt with photos and review
- `GET /api/attempts?recipeId=1` - Get attempts for a specific recipe

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by GitHub's fork system
- Built with modern web technologies
- Community-driven development
