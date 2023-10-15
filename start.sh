#!/bin/bash

# Build without cache
echo "Building with --no-cache..."
docker-compose build --no-cache

# Start services
echo "Starting docker-compose services..."
docker-compose up
