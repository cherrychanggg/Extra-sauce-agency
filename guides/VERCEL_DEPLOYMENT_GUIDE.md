# Vercel Deployment Guide for Extra Sauce Agency

This guide explains how Vercel automatically deploys your website when you push changes to GitHub, and how to manage custom domains.

## Table of Contents
1. [Understanding Vercel Deployment](#understanding-vercel-deployment)
2. [Managing Custom Domains in Vercel](#managing-custom-domains-in-vercel)
3. [Troubleshooting Deployment Issues](#troubleshooting-deployment-issues)
4. [Quick Reference](#quick-reference)

## Understanding Vercel Deployment

### What is Vercel?

Vercel is a platform that automatically builds and deploys websites. When you push changes to GitHub, Vercel automatically:

1. **Detects the changes** you pushed to GitHub
2. **Builds the website** with your new changes
3. **Deploys it live** so people can see the updates
4. **Provides a live URL** where the website can be accessed

### How the Automatic Deployment Works

1. **You push changes** to the GitHub repository (see GitHub & VS Code Guide)
2. **Vercel receives a notification** from GitHub (called a webhook)
3. **Vercel starts building** your website with the new changes
4. **Build process completes** (usually takes 1-3 minutes)
5. **Website goes live** with your updates automatically
6. **You get a notification** (if configured) when deployment completes

### Monitoring Deployments

1. **Visit your Vercel dashboard**: https://vercel.com/dashboard
2. **Find your project** in the list
3. **Click on it** to see deployment history
4. **Check the status**:
   - ✅ **Ready**: Deployment successful, changes are live
   - ⏳ **Building**: Currently deploying your changes
   - ❌ **Error**: Something went wrong (check the logs)

### Deployment Timeline

- **Typical deployment time**: 1-3 minutes
- **What happens during deployment**:
  - Vercel downloads your code from GitHub
  - Installs dependencies (like npm packages)
  - Builds the website files
  - Deploys to their global network (CDN)
- **When changes go live**: Immediately after build completes

### Understanding Build Logs

When a deployment fails, you can check the build logs:

1. **Go to your Vercel dashboard**
2. **Click on the failed deployment** (marked with ❌)
3. **Click "View Build Logs"**
4. **Look for error messages** (usually in red text)
5. **Common errors**:
   - Syntax errors in your code
   - Missing files or dependencies
   - Build command failures

## Managing Custom Domains in Vercel

### Adding a Custom Domain

1. **Log into Vercel**: Go to https://vercel.com and sign in
2. **Select your project** from the dashboard
3. **Go to Settings**: Click on your project, then click "Settings"
4. **Navigate to Domains**: Click "Domains" in the left sidebar
5. **Add Domain**: Click "Add" and enter your custom domain (e.g., `www.yoursite.com`)
6. **Configure DNS**: Vercel will show you DNS settings to configure

### DNS Configuration

You'll need to update your domain's DNS settings (usually done where you bought the domain):

#### For Apex Domain (yoursite.com):
- **Type**: A Record
- **Name**: @ (or leave blank)
- **Value**: 76.76.19.61

#### For Subdomain (www.yoursite.com):
- **Type**: CNAME
- **Name**: www
- **Value**: cname.vercel-dns.com

### Where to Configure DNS

DNS settings are typically managed where you purchased your domain:

- **GoDaddy**: Domain management → DNS → Records
- **Namecheap**: Domain List → Manage → Advanced DNS
- **Cloudflare**: DNS → Records
- **Google Domains**: DNS → Custom records

### Changing an Existing Domain

1. **Go to your project settings** in Vercel
2. **Click "Domains"**
3. **Find the domain** you want to change
4. **Click the three dots** (⋯) next to it
5. **Select "Remove"** to remove the old domain
6. **Follow the "Adding a Custom Domain" steps** above for the new domain

### Domain Verification

1. **After adding the domain**, Vercel will verify it automatically
2. **This can take up to 48 hours** for DNS changes to propagate
3. **Check status** in the Domains section:
   - ✅ **Valid Configuration**: Domain is working
   - ⚠️ **Invalid Configuration**: DNS needs to be fixed
   - ⏳ **Pending**: Still checking/propagating

### SSL Certificates

- **Automatic SSL**: Vercel automatically provides SSL certificates for all domains
- **Certificate renewal**: Happens automatically every 90 days
- **HTTPS redirect**: Automatically redirects HTTP to HTTPS
- **No action required**: SSL is completely managed by Vercel

## Troubleshooting Deployment Issues

### Build Failed

#### "Build failed"
- **Check the logs**: Go to Vercel dashboard → Your project → Failed deployment → View logs
- **Common causes**: 
  - Syntax errors in code
  - Missing files
  - Build command errors
  - Node.js version conflicts
- **Solution**: Fix the errors and push again to GitHub

#### "Command not found" errors
- **Cause**: Missing dependencies or wrong build commands
- **Solution**: Check `package.json` for correct scripts and dependencies

#### "Out of memory" errors
- **Cause**: Build process using too much memory
- **Solution**: Contact your developer to optimize the build process

### Domain Issues

#### "Domain not working"
- **Check DNS settings**: Ensure they match Vercel's requirements exactly
- **Wait for propagation**: DNS changes can take up to 48 hours
- **Verify in Vercel**: Check the Domains section for status
- **Use DNS checker**: Try tools like whatsmydns.net to check propagation

#### "SSL certificate errors"
- **Usually resolves automatically**: Wait 24-48 hours
- **Check domain status**: Ensure domain verification is complete
- **Contact Vercel support**: If issues persist after 48 hours

### Website Issues

#### "Changes not showing up"
- **Check deployment status**: Make sure the latest deployment completed successfully
- **Clear browser cache**: Try hard refresh (`Ctrl + F5`) or incognito mode
- **Check the right URL**: Ensure you're visiting the correct domain
- **Check deployment time**: Make sure enough time has passed (2-3 minutes)

#### "404 errors on custom pages"
- **Cause**: Routing configuration issues
- **Solution**: Check with your developer about routing setup

#### "Slow loading times"
- **Cause**: Large images or files
- **Solution**: Optimize images and assets (ask your developer)

## Quick Reference

### Vercel Dashboard URLs
- **Main Dashboard**: https://vercel.com/dashboard
- **Project Settings**: Dashboard → Select Project → Settings
- **Domain Management**: Project Settings → Domains
- **Deployment History**: Dashboard → Select Project (main view)

### DNS Record Types
```
A Record (for apex domain):
Name: @ or blank
Value: 76.76.19.61

CNAME Record (for subdomain):
Name: www
Value: cname.vercel-dns.com
```

### Deployment Status Meanings
- ✅ **Ready**: Live and working
- ⏳ **Building**: Currently deploying
- ❌ **Error**: Failed, check logs
- 🚀 **Queued**: Waiting to start

### Common Build Times
- **Simple static site**: 30 seconds - 1 minute
- **React/Vue app**: 1-3 minutes
- **Large projects**: 3-5 minutes

## Getting Help

### When Deployments Fail

1. **Check build logs first** in Vercel dashboard
2. **Look for obvious errors** (red text in logs)
3. **Ask your developer** if you see technical errors
4. **Check GitHub** to make sure your changes were pushed successfully

### When Domains Don't Work

1. **Wait 24-48 hours** for DNS propagation
2. **Double-check DNS settings** against Vercel's requirements
3. **Use incognito mode** to avoid cache issues
4. **Contact domain registrar** if DNS settings won't save

### Useful Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/help
- **DNS Propagation Checker**: https://whatsmydns.net/

## Integration with GitHub

Remember: Vercel deployments are triggered by GitHub pushes. The workflow is:

1. **Make changes** in VS Code (see GitHub & VS Code Guide)
2. **Push to GitHub** using the Git workflow
3. **Vercel automatically deploys** your changes
4. **Check Vercel dashboard** for deployment status
5. **Visit your website** to see the changes live

This seamless integration means you only need to focus on making your changes and pushing to GitHub - Vercel handles the rest automatically!
