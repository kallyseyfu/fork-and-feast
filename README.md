# Fork and Feast

A modern recipe sharing and collaboration platform inspired by GitHub's fork system. Share, fork, and improve recipes with the community.

## Features

- 🍳 Recipe sharing and discovery
- 🔄 Fork and modify existing recipes
- ⭐ Star and save favorite recipes
- 💬 Comment and discuss recipes
- 👥 User profiles and activity tracking
- 🏷️ Recipe tagging and categorization
- ⏱️ Cooking time and difficulty indicators
- 🔍 Advanced filtering and search

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
│   ├── user/              # User profile pages
│   ├── recipe/            # Recipe pages
│   ├── fork/              # Fork functionality
│   ├── pull/              # Pull request system
│   └── pulls/             # Pull requests listing
├── components/            # Reusable UI components
├── lib/                   # Utility functions and configurations
├── hooks/                 # Custom React hooks
├── public/               # Static assets
└── styles/               # Global styles
```

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
