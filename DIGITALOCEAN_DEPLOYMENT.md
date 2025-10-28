# DigitalOcean Deployment Guide

This guide will help you deploy the GWIN TECH landing page to DigitalOcean App Platform.

## Prerequisites

- GitHub repository: https://github.com/samarato/gwintech
- DigitalOcean account
- Node.js 18+ environment

## Deployment Methods

### Method 1: Using DigitalOcean App Platform (Recommended)

1. **Log in to DigitalOcean**
   - Go to https://cloud.digitalocean.com/

2. **Create a New App**
   - Click "Create" → "Apps"
   - Choose "GitHub" as the source
   - Authorize DigitalOcean to access your GitHub account
   - Select repository: `samarato/gwintech`
   - Select branch: `main`

3. **Configure Build Settings**
   The app spec file (`.do/app.yaml`) is already configured, but you can verify:
   
   - **Build Command:** `npm install && npm run build`
   - **Run Command:** `npm start`
   - **Environment:** Node.js
   - **HTTP Port:** 8080

4. **Configure Environment Variables (Optional)**
   - No environment variables are required for the default setup

5. **Configure Resources**
   - App name: `gwintech-landing`
   - Plan: Basic (512 MB RAM, 1 vCPU) - $5/month
   - Or Professional for production workloads

6. **Deploy**
   - Click "Create Resources"
   - Wait for the build and deployment to complete (3-5 minutes)
   - Your site will be available at: `https://gwintech-landing-xxxxx.ondigitalocean.app`

### Method 2: Using doctl CLI

```bash
# Install doctl
# macOS: brew install doctl
# Windows: Download from https://github.com/digitalocean/doctl/releases

# Authenticate
doctl auth init

# Create app from spec file
doctl apps create --spec .do/app.yaml

# Get app ID and monitor deployment
doctl apps list
doctl apps get <app-id>
```

### Method 3: Static Site (Alternative)

If you prefer to deploy as a static site:

1. Build the project locally:
```bash
npm run build
```

2. Deploy the `dist` folder to DigitalOcean Spaces or use a static site host

## Build Configuration

The app uses the following npm scripts:

- `npm run build` - Builds the production-ready static files to `dist/`
- `npm start` - Serves the built files using `serve` on port 8080
- `npm run dev` - Runs development server on port 40001

## Port Configuration

- **Development:** Port 40001
- **Production:** Port 8080 (configured in `npm start` script)
- DigitalOcean will automatically map this to HTTPS on port 443

## Troubleshooting

### Error: "determine start command: when there is no default process a command is required"

**Solution:** This is fixed by adding the `start` script in `package.json`:
```json
"scripts": {
  "start": "serve -s dist -l 8080"
}
```

### Build Fails

1. Check that all dependencies are in `package.json`
2. Verify Node.js version is 18+
3. Check build logs in DigitalOcean dashboard

### App Doesn't Start

1. Ensure `serve` package is in dependencies (not devDependencies)
2. Verify the build command created the `dist` folder
3. Check that port 8080 is not blocked

### Routing Issues (404 on Refresh)

The `serve -s` flag handles SPA routing automatically. If you still have issues:

1. Check that all routes are client-side (React Router)
2. Verify `index.html` is in the `dist` folder

## Custom Domain Setup

1. Go to your app in DigitalOcean dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `gwintech.co.th`)
4. Update your domain's DNS records:
   - Type: CNAME
   - Name: @ (or www)
   - Value: `gwintech-landing-xxxxx.ondigitalocean.app`
5. Wait for DNS propagation (5-30 minutes)

## Auto-Deploy on Push

Auto-deploy is enabled by default. Every push to the `main` branch will trigger:
1. Build process
2. Deployment
3. Health checks

To disable auto-deploy:
- Go to app settings
- Uncheck "Autodeploy code changes"

## Monitoring and Logs

- **View Logs:** DigitalOcean Dashboard → Apps → Your App → Runtime Logs
- **Build Logs:** Available during deployment
- **Metrics:** CPU, Memory, Bandwidth usage in the dashboard

## Cost Estimation

- **Basic Plan:** $5/month (512 MB RAM)
- **Professional:** $12/month (1 GB RAM)
- **Bandwidth:** 40 GB included, then $0.01/GB

## Environment Variables

Currently, no environment variables are required. If you need to add them:

```yaml
# In .do/app.yaml
envs:
  - key: NODE_ENV
    value: production
  - key: CUSTOM_VAR
    value: your_value
```

Or add them via the DigitalOcean dashboard.

## Production Checklist

- [ ] Build completes successfully
- [ ] App starts and serves on port 8080
- [ ] All routes work (no 404s)
- [ ] Images and assets load correctly
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (automatic with DigitalOcean)
- [ ] Monitoring and alerts set up

## Support

- DigitalOcean Documentation: https://docs.digitalocean.com/products/app-platform/
- Community: https://www.digitalocean.com/community/
- GWIN TECH Support: info@gwintech.co

## Update Deployment

To update your deployment:

```bash
# Make changes to your code
git add .
git commit -m "Your update message"
git push origin main

# DigitalOcean will automatically deploy
```

## Rollback

If a deployment fails:

1. Go to DigitalOcean Dashboard
2. Select your app
3. Go to "Deployments" tab
4. Click "Rollback" on a previous successful deployment
