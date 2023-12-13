# Project-4

# Part 1
- Website added to /website  
  - Bonzai website (for you entertainment)

## Installing Docker

- ```curl -fsSL https://get.docker.com -o get-docker.sh```  
- ```sudo sh get-docker.sh```

![Image](/img/d1.PNG)

## Create a container image that will run a webserver and contains your website   
  
### Official Nginx image
```FROM nginx:latest```

### Copy website files into the default Nginx html directory (in this case copy entire website folder)
```COPY website/ /usr/share/nginx/html/```

### Expose port 80 for web traffic
```EXPOSE 80```

### Command to start Nginx when the container launches
```CMD ["nginx", "-g", "daemon off;"]```

## Build Docker image  
- ```docker build -t website .```  

![Image](/img/d2.PNG)  

![Image](/img/d3.PNG)

## Run Container  
- ```sudo docker run -d -p 8080:80 --name website-container website```
  
### Now go to http://localhost:8080/ and boom:  

![Image](/img/d4.PNG)  


# Part 2

### Create a public repo

1. Create a New Repository:
	- On the "Your Repositories" page, you'll find an option to create a new repository.
	- Click on "Create Repository"

2. Repository Details:
    - Name your repository.
    - Choose public or private.
    - Add a description.

3. Create:
    - Click the "Create" button to create your public repository.

4. Push Your Docker Image to Docker Hub:
    - Once your repository is created,  push your local Docker image to Docker Hub:

## Tag your local image with the Docker Hub repository name 
```
docker tag local-image-name username/repository-name
```  

## Push the tagged image to Docker Hub 
```
docker push obeyeddog/project-4-website
```  

## Enter credentials, push container image  

```docker login --username=obeyeddog```  
```docker tag local-image-name obeyeddog/project-4-website:p4```  
```docker push obeyeddog/project-4-website:p4```

## Making a secret:  

Setting a Secret:
	Navigate to your GitHub repository.  

        Go to "Settings" > "Secrets".  

        Click on "New repository secret"  

	Add a secret with the name DOCKER_USERNAME and set its value to your DockerHub username.  

	Add another secret with the name DOCKER_PASSWORD and set its value to your DockerHub password or an access token.

# Part 3  
  
![Image](/img/flow.png) 

