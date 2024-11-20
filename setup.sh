#!/bin/bash

REPO_URL="https://github.com/misic2711/CarSelection.git"

# Clone the repository
echo "Cloning the repository..."
git clone "$REPO_URL"

# Extract the folder name from the repository URL 
repo_name=$(basename "$REPO_URL" .git)

# Change into the cloned directory
cd "$repo_name" || exit

# Install dependencies
echo "Installing dependencies..."
npm install

# Run the development server
echo "Running the development server..."
npm run dev
