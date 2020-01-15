# Docker Demos

## Feature Set 7.2 SP1
- This contains the docker-compose and SQL file necessary for the data of the Liferay DXP 7.2 SP1 Feature Set bundle.

### Requirements
1. Docker
2. ~4 GB of drive space
3. 8 GB of RAM
4. Docker Hub account
5. Internet connection that is decent.

### Steps to setup and start up
1. Login to Docker Hub via CLI (Not necessary at this point)
	- `docker login`
2. Check out this repos, and navigate to the directory of the desired bundle.
	- Or download and unzip
3. Start with Docker Compose in detached mode
	- `docker-compose up -d`
	- This will download the images if they are not present. Good internet is highly recommended.
4. View Docker Logs
	- `docker-compose logs -f`
5. When logs show startup complete, go to the URL
	- `http://localhost:8080`
	
### Steps to Shutdown
1. Exit the logs
	- `Ctrl+C` or `CMD+C`
2. Shutdown running Docker Image
	- `docker-compose down`
3. Shutdown and reset the bundle
	- `docker-compose down -v`
	- This deletes any volumes that are created for the bundle. On next startup, the MySQL will reimport, thus reverting to the original state. There is no going back if you do this, so make sure you really want to delete all the additional data.
	
### Deploying a Plugin
1. A directory called `deploy` will be created. Simply copy your plugin into that directory.