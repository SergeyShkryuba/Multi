# Multi - Personal Website

## Development Workflow

### Branches
- `main` - production code
- `develop` - development branch
- `feature/*` - feature branches

### Working with Pull Requests

1. Create feature branch:
```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

2. Make changes and commit:
```bash
git add .
git commit -m "description"
```

3. Push and create PR:
```bash
git push origin feature/your-feature-name
```

4. Create PR on GitHub: `develop` ← `feature/your-feature-name`

5. After review and merge, delete feature branch:
```bash
git checkout develop
git pull origin develop
git branch -d feature/your-feature-name
```

## Tech Stack
- Vite 8.0.12
- Tailwind CSS v4.3.0
- TypeScript
- SCSS

## Commands
- `npm run dev` - start dev server
- `npm run build` - build for production
- `npm run preview` - preview production build
