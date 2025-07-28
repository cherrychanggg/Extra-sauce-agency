# GitHub & VS Code Guide for Extra Sauce Agency

This guide is designed for team members with no GitHub or VS Code experience who need to work on website projects. We'll walk you through everything step by step.

## Table of Contents
1. [Setting Up Your Development Environment](#setting-up-your-development-environment)
2. [Cloning a Repository](#cloning-a-repository)
3. [Making Changes and Pushing to GitHub](#making-changes-and-pushing-to-github)
4. [Troubleshooting Common Issues](#troubleshooting-common-issues)
5. [Quick Reference](#quick-reference)

## Setting Up Your Development Environment

### Step 1: Download and Install VS Code

1. **Visit the VS Code website**: Go to https://code.visualstudio.com/
2. **Download**: Click the "Download for Windows" button (or your operating system)
3. **Install**: Run the downloaded file and follow the installation wizard
   - Check "Add to PATH" during installation
   - Check "Create a desktop icon" if you want one
4. **Launch VS Code**: Open it after installation completes

### Step 2: Install Git

1. **Download Git**: Go to https://git-scm.com/download/win
2. **Install Git**: Run the installer with these recommended settings:
   - Use VS Code as Git's default editor
   - Use Git from the command line and also from 3rd-party software
   - Use the OpenSSL library
   - Checkout Windows-style, commit Unix-style line endings
   - Use Windows' default console window

### Step 3: Configure Git (First Time Only)

1. **Open VS Code**
2. **Open Terminal**: Press `Ctrl + ` (backtick) or go to Terminal → New Terminal
3. **Set your name and email** (use your work email):
   ```bash
   git config --global user.name "Your Full Name"
   git config --global user.email "your.email@extrasauce.com"
   ```

## Cloning a Repository

### What is Cloning?
Cloning means downloading a complete copy of a project from GitHub to your computer so you can work on it.

### Step 1: Get Repository Access

1. **Join the Extra Sauce Agency Organization**: Your manager should invite you to the GitHub organization
2. **Accept the invitation**: Check your email for the GitHub invitation and accept it

### Step 2: Clone the Repository

1. **Go to the repository on GitHub**: Navigate to the project repository (e.g., `github.com/extrasauce/sauce-dream-weave`)
2. **Click the green "Code" button**
3. **Copy the HTTPS URL**: It will look like `https://github.com/extrasauce/repository-name.git`
4. **Open VS Code**
5. **Open Terminal**: Press `Ctrl + ` (backtick)
6. **Navigate to where you want to store the project**:
   ```bash
   cd C:\Users\YourUsername\Documents
   ```
7. **Clone the repository**:
   ```bash
   git clone https://github.com/extrasauce/repository-name.git
   ```
8. **Open the project in VS Code**:
   ```bash
   cd repository-name
   code .
   ```

### Alternative: Clone Directly in VS Code

1. **Open VS Code**
2. **Press `Ctrl + Shift + P`** to open the command palette
3. **Type "Git: Clone"** and select it
4. **Paste the repository URL**
5. **Choose a folder** to save the project
6. **Click "Open"** when prompted

## Making Changes and Pushing to GitHub

### Understanding the Workflow

The basic workflow is:
1. **Pull** latest changes from GitHub
2. **Make** your changes
3. **Stage** your changes
4. **Commit** your changes with a message
5. **Push** your changes back to GitHub

### Step 1: Always Pull Before Making Changes

Before you start working, always get the latest version:

1. **Open Terminal in VS Code**: `Ctrl + ` (backtick)
2. **Pull latest changes**:
   ```bash
   git pull origin main
   ```

### Step 2: Make Your Changes

1. **Edit files** as needed using VS Code
2. **Save your changes**: `Ctrl + S`

### Step 3: Stage and Commit Your Changes

1. **Open the Source Control panel**: Click the source control icon in the left sidebar (looks like a branching tree) or press `Ctrl + Shift + G`
2. **Review your changes**: You'll see a list of modified files
3. **Stage changes**: Click the "+" button next to each file you want to include, or click "+" next to "Changes" to stage all files
4. **Write a commit message**: In the message box at the top, write a clear description of what you changed:
   - Good: "Update homepage hero text and add new testimonial"
   - Bad: "changes" or "update"
5. **Commit**: Click the checkmark button or press `Ctrl + Enter`

### Step 4: Push Your Changes

1. **In the terminal**, push your changes:
   ```bash
   git push origin main
   ```
2. **Or use VS Code**: Click the sync button in the status bar (↑↓ arrows)

### Alternative: Using VS Code's Git Interface

1. **Make your changes**
2. **Go to Source Control panel** (`Ctrl + Shift + G`)
3. **Stage files** by clicking the "+" next to them
4. **Write commit message**
5. **Click the checkmark** to commit
6. **Click the sync button** (↑↓) in the bottom status bar to push

## Troubleshooting Common Issues

### Git Issues

#### "Authentication failed"
- **Solution**: Make sure you're signed into GitHub in VS Code
- **Alternative**: Use a Personal Access Token instead of password

#### "Permission denied"
- **Solution**: Check that you have access to the repository
- **Contact**: Your manager to ensure you're added to the organization

#### "Merge conflicts"
- **What it means**: Someone else changed the same lines of code
- **Solution**: 
  1. Pull the latest changes: `git pull origin main`
  2. VS Code will highlight conflicts
  3. Choose which version to keep
  4. Save and commit the resolved files

### VS Code Issues

#### "Can't find Git"
- **Solution**: Restart VS Code after installing Git
- **Check**: Make sure Git was added to PATH during installation

#### "Repository not found"
- **Check URL**: Ensure the repository URL is correct
- **Check access**: Make sure you have permission to access the repository

## Quick Reference

### Essential Git Commands
```bash
# Get latest changes
git pull origin main

# Check status of your changes
git status

# Add all changes for commit
git add .

# Commit changes with message
git commit -m "Your descriptive message"

# Push changes to GitHub
git push origin main

# See what branch you're on
git branch
```

### VS Code Shortcuts
- **Open terminal**: `Ctrl + ` (backtick)
- **Open source control**: `Ctrl + Shift + G`
- **Save file**: `Ctrl + S`
- **Save all files**: `Ctrl + K, S`
- **Command palette**: `Ctrl + Shift + P`

## Getting Help

### When You're Stuck

1. **Check this guide** first
2. **Ask a team member** who has experience
3. **Check VS Code's built-in Git help**
4. **Contact your manager** for repository access issues

### Useful Resources

- **VS Code Git Tutorial**: https://code.visualstudio.com/docs/editor/versioncontrol
- **GitHub Desktop** (easier GUI): https://desktop.github.com/

## What's Next?

Once you're comfortable with GitHub and VS Code, check out the **Vercel Deployment Guide** to learn how your changes automatically go live on the website!
