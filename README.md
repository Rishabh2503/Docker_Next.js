# Next.js Login Application 🚀

A modern login application built with Next.js, TypeScript, and Tailwind CSS, containerized with Docker.

## 📋 Table of Contents
- [Project Setup](#-project-setup)
- [Development Guide](#-development-guide)
- [Docker Explanation](#-docker-explanation)
- [Project Structure](#-project-structure)
- [Images](#-images)

## 🚀 Project Setup

### Prerequisites
```bash
Node.js (>= 18.0.0)
npm or yarn
Docker
```

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd next-js-login-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 💻 Development Guide

### Available Scripts

- **Development mode**
  ```bash
  npm run dev
  ```

- **Build application**
  ```bash
  npm run build
  ```

- **Start production server**
  ```bash
  npm start
  ```

- **Lint code**
  ```bash
  npm run lint
  ```

## 🐳 Docker Explanation

### Dockerfile Breakdown

Our Dockerfile uses a multi-stage build process for optimization:

#### Stage 1: Builder
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
```
- Uses `node:18-alpine` for a lightweight base image
- Copies package files first to leverage Docker cache
- Installs dependencies
- Builds the application

#### Stage 2: Runner
```dockerfile
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/standalone ./
```
- Fresh Alpine image for running the app
- Copies only necessary files from builder
- Sets up production environment

### 🚫 .dockerignore Explained

The `.dockerignore` file prevents unnecessary files from being copied into the Docker image:

```plaintext
node_modules        # Excludes local dependencies
.next              # Excludes local build files
.git               # Excludes version control
README.md          # Excludes documentation
.env*              # Excludes environment files
.dockerignore      # Excludes Docker files
Dockerfile
```

**Benefits:**
- 🚀 Faster build times
- 📦 Smaller image size
- 🔒 Enhanced security
- 🛠 Prevents conflicts

### Docker Commands

**Build the image:**
```bash
docker build -t next-js-login-app . --no-cache
```

**Run the container:**
```bash
docker run -p 3000:3000 next-js-login-app
```

## 📁 Project Structure

```
next-js-login-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       └── auth/
│           ├── LoginPage.tsx
│           └── LoginForm.tsx
├── public/
├── Dockerfile
├── .dockerignore
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Container**: Docker
- **Development**: ESLint, Prettier

## 📝 Additional Notes

- The application uses Next.js App Router
- Built with TypeScript for type safety
- Uses Tailwind CSS for styling
- Optimized Docker build process
- Production-ready configuration

## 🔗️ Images

### Application Architecture
![Application Architecture](./images/docker1.webp)

### Docker Workflow
![Docker Workflow](./images/docker.webp)

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Docker Documentation](https://docs.docker.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)