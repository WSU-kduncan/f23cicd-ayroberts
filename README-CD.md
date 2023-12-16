# Project 5

## Part 1  
      
### CD Project Overview
- **What**: Managing a Continuous Deployment (CD) project for applications
- **Why**: Automating the process of building and pushing Docker images to Docker Hub when there are new releases, because it's cool.
- **Tools Used**: GitHub Actions, Docker.

### How to Generate a Tag
Create a tag:
- `git tag -a <tag_name> -m "message"`  
- In GitHub, go to the releases section, then "Draft a new release," and specify the tag version  
  
docker/metadata-action@v3 is used to generate tags for Docker images based on the repository's versioning  
  
docker/build-push-action@v2 will push the Docker image and tag it with the version derived from tags in the repo. Also tags as latest.
  
### Behavior of Workflow
GitHub workflow:
- Triggers on 'main' branch pushes and tags with the the `v*.*.*` pattern.
- Automatically does repository checkout, Docker image building with Docker Buildx, and pushes the image to Docker Hub with version tags and as 'latest'.

### Link to Docker Hub Repository:
[Docker Repo](https://hub.docker.com/r/obeyeddog/f23cicd-ayroberts/) 
  

## Part 2  
  
## Install Docker  
docker prerequisite: ```sudo amazon-linux-extras install docker``` (need this??)  
install docker: ```sudo yum install -y docker```  
this is always good: ```sudo systemctl enable docker```  
pull my repo: ```sudo docker pull obeyeddog/f23cicd-ayroberts```  
  
[image]
  
and run it: ```sudo docker run obeyeddog/f23cicd-ayroberts```
  
[image proof]  
  
As you can see, it didn't work. It's very disappointing to me, seeing as how this is something I've gotten to work in the past.  
  
## Container Restart Script  
  
### Description  
Restarts the Docker container. It stops the container, pulls the latest image from DockerHub, and restarts the container with the updated image.

### Script Content Explained

```bash
#!/bin/bash

# Stop the running container
docker stop obeyeddog/f23cicd-ayroberts

# Remove the existing container
docker rm obeyeddog/f23cicd-ayroberts

# Pull the latest image from DockerHub
docker pull obeyeddog/f23cicd-ayroberts:latest

# Run the container with the latest image
docker run -d --name obeyeddog/f23cicd-ayroberts obeyeddog/f23cicd-ayroberts:latest
```
## Webook  
### Setting up Webhook  

```wget https://github.com/adnanh/webhook/releases/download/2.8.1/webhook-linux-amd64.tar.gz```  
```tar -xzf webhook-linux-amd64.tar.gz```  
Move to a globally accessible place ```sudo mv webhook-linux-amd64 /usr/local/bin/webhook``` 

Start the webhook: ```webhook -hooks deployment/hooks.json```  
  
**Webhook Task Definition File**

- **Description:** This task definition named "restart_container" executes the "./pull-script.sh" script.  
  
It runs from the directory "/deployment" 

## See proof video. 






