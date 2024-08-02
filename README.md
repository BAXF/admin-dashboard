# Admin Dashboard Template

BAXF Admin dashboard

This dashboard template used for all BAXF projects

## Installation
Here are the steps you need to follow to install the dependencies.

```
npm install
```
or

```
yarn install
```

3. Now run this command to start the developement server

```
npm run dev
```

or

```
yarn dev
```


# Create Docker Image
# Note the period (.) at the end is required
docker build -t docker_nextjs:developement .

# List your created images
docker image ls

# Error on macOS
docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?.
See 'docker run - help'.

# First start Docker app
open -a Docker

# Rebuild image
docker build -t docker_nextjs:developement .

# Run Docker Container

# Docker publish example onto port 8080
docker run --publish 3000:3000 docker_nextjs:developement

go to localhost:8080 in your browser to test the app.