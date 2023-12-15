# Project 5

# Part 1  
      
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

 

