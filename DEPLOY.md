# Deployment Instructions

## Deploying to Vercel

This project is optimized for deployment on [Vercel](https://vercel.com/), the creators of Next.js.

### Prerequisites

- A GitHub account
- A Vercel account

### Steps

1.  **Push to GitHub**
    - Ensure your code is pushed to a GitHub repository.

2.  **Import Project in Vercel**
    - Go to your Vercel dashboard.
    - Click "Add New..." -> "Project".
    - Import the GitHub repository you just pushed.

3.  **Configure Project**
    - **Framework Preset**: Next.js (should be detected automatically).
    - **Root Directory**: `./` (default).
    - **Build Command**: `next build` (default).
    - **Output Directory**: `.next` (default).
    - **Install Command**: `npm install` (default).

4.  **Environment Variables**
    - If you have any environment variables (e.g., for analytics or API keys), add them in the "Environment Variables" section.
    - For this initial version, no specific environment variables are required.

5.  **Deploy**
    - Click "Deploy".
    - Vercel will build and deploy your application.

### Verification

- Once deployed, Vercel will provide a URL (e.g., `https://reliable-ai.vercel.app`).
- Visit the URL to verify the site is live and functioning.
- Check the "Deployments" tab in Vercel for build logs if any issues arise.

## Local Development

To run the project locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
