# Deployment Guide

## Docker Deployment

### Prerequisites
- Docker installed and running
- Logged into Docker Hub: `docker login`

### Build and Push to Docker Hub

```bash
# Build the image
docker build -t sumanthreddy2324/portfolio-website:latest .

# Push to Docker Hub
docker push sumanthreddy2324/portfolio-website:latest
```

Or use the provided script:
```bash
chmod +x build-and-push.sh
./build-and-push.sh
```

### Run the Container

```bash
# Using docker run
docker run -d -p 80:80 --name portfolio sumanthreddy2324/portfolio-website:latest

# Or using docker-compose
docker-compose up -d
```

### Pull and Run from Docker Hub

```bash
docker pull sumanthreddy2324/portfolio-website:latest
docker run -d -p 80:80 --name portfolio sumanthreddy2324/portfolio-website:latest
```

## GitHub Deployment

### Push to GitHub

If you haven't already, set up authentication:

```bash
# Using SSH (recommended)
git remote set-url origin git@github.com:KazumaBspiriT/portfolio.git
git push -u origin main

# Or using HTTPS with personal access token
git push -u origin main
```

## Docker Permissions Fix

If you get permission errors with Docker:

```bash
# Add your user to docker group
sudo usermod -aG docker $USER

# Log out and log back in, or run:
newgrp docker
```

