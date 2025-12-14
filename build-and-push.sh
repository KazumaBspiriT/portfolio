#!/bin/bash

# Build Docker image
echo "Building Docker image..."
docker build -t sumanthreddy2324/portfolio-website:latest .

# Tag the image (optional, for versioning)
docker tag sumanthreddy2324/portfolio-website:latest sumanthreddy2324/portfolio-website:v1.0.0

# Push to Docker Hub
echo "Pushing to Docker Hub..."
docker push sumanthreddy2324/portfolio-website:latest
docker push sumanthreddy2324/portfolio-website:v1.0.0

echo "Done! Image pushed to Docker Hub: sumanthreddy2324/portfolio-website"

