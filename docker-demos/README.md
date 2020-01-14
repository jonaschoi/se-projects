# Docker Demos

## Feature Set 7.2 SP1
- This contains the docke-compose and SQL file necessary for the data of the Liferay DXP 7.2 SP1 Feature Set bundle.

### Requirements
1. Docker
2. ~4 GB of drive space
3. 8 GB of RAM
4. Docker Hub account

### Steps to setup
1. Login to Docker Hub via CLI (Not necessary at this point)
	- `docker login`
2. Check out this repos
	- Or download and unzip
3. Start with Docker Compose in detached mode
	- `docker-compose up -d`
4. View Docker Logs
	- `docker-compose logs -f`