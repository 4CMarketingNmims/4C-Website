This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

<<<<<<< HEAD
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
```
4cweb/
├── public/              # Static assets
│   ├── events/         # Event images
│   ├── sponsors/       # Sponsor logos
│   └── team/           # Team member photos
│       ├── Advisory/   # Advisory board photos
│       ├── Core/       # Core team photos
│       ├── SuperCore/  # Super core member photos
│       └── Crew/       # Crew member photos
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── about/      # About page
│   │   ├── events/     # Events pages
│   │   ├── team/       # Team page
│   │   └── api/        # API routes
│   ├── components/     # React components
│   │   ├── layout/     # Layout components (header, footer)
│   │   ├── sections/   # Page sections
│   │   └── ui/         # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utilities and data
│       ├── data.ts     # Static data (team, events, sponsors)
│       └── utils.ts    # Helper functions
├── components.json     # shadcn/ui configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Key Features Breakdown 

### Pages

- **Home (`/`)**: Hero section, what we do, events, sponsors
- **Events (`/events`)**: Grid view of all events
- **Event Details (`/events/[slug]`)**: Detailed event pages
- **Team (`/team`)**: Advisory, Super Core, Core Team, and Crew
- **About (`/about`)**: About 4C Marketing Cell

### Components

- **3D Cards**: Interactive hover effects for team members
- **Image Carousels**: Auto-playing image galleries
- **Draggable Galleries**: Interactive drag-to-explore images
- **Aurora Background**: Animated gradient backgrounds
- **Timeline**: Event timeline display
- **Tracing Beam**: Animated scroll indicator

## 🖼️ Image Management

### Background Removal Tool

We include a Python script to remove backgrounds from team photos:

```bash
# Install dependencies
pip install -r requirements-bg-removal.txt

# Run the script
python remove_backgrounds.py
```

See `BACKGROUND_REMOVAL_README.md` for detailed instructions.

## 🔧 Configuration

### Tailwind CSS

Custom animations and utilities are configured in `tailwind.config.ts`:
- Aurora effect
- Moving borders
- Custom color schemes
- Responsive breakpoints

### TypeScript

Strict type checking enabled with path aliases:
- `@/*` maps to `src/*`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Docker

Build command: `npm run build`
Start command: `npm run start`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Data Management

Team members, events, and sponsors are managed in `src/lib/data.ts`. To add new content:

1. Add images to respective folders in `public/`
2. Update the data arrays in `data.ts`
3. Rebuild the application

## 🐛 Troubleshooting

### Development server won't start
- Check if port 9002 is available
- Delete `.next` folder and `node_modules`, then reinstall

### Type errors
- Run `npm run typecheck` to identify issues
- Ensure all dependencies are up to date

### Build failures
- Clear Next.js cache: `rm -rf .next`
- Verify environment variables are set

## 📄 License

This project is private and proprietary to 4C Marketing Cell, NMIMS.

## 📞 Contact

For questions or support, contact the 4C Marketing Cell team:
- Website: [Your Website URL]
- Email: [Contact Email]

## 🙏 Acknowledgments

- NMIMS Management
- All 4C Marketing Cell members
- Open-source community

---

**Made with ❤️ by the 4C Marketing Cell Tech Team** 
>>>>>>> c8c3b7a2db5258e1f87347db22462cdd7a26689b
