# Docker Demos

## Feature Set 7.2 SP1
- This contains the docker-compose and SQL file necessary for the data of the Liferay DXP 7.2 SP1 Feature Set bundle.

### Requirements
1. Docker
2. ~4 GB of drive space
3. **8 GB of RAM allocated to Docker Desktop**
4. Docker Hub account
5. Internet connection that is decent.

### Steps to setup and start up
1. Login to Docker Hub via CLI (Not necessary at this point)
	- `docker login`
2. Check out this repos, and navigate to the directory of the bundle (i.e. feature-set-7.2-sp1).
	- Or download and unzip
3. Start with Docker Compose in detached mode
	- `docker-compose up -d`
	- This will download the images if they are not present. Good internet is highly recommended.
4. View Docker Logs
	- `docker-compose logs -f`
	- If you want to view logs for just one specific container, add the container name at the end of the command. Container names can be found in the docker-compose.yml
		- `docker-compose logs -f ${CONTAINER_NAME}`
5. When logs show startup complete, go to the URL
	- `http://localhost:8080`
	
### Steps to Shutdown
1. Exit the logs
	- `Ctrl+C` or `CMD+C`
2. Shutdown running Docker Image
	- `docker-compose down`
3. Shutdown and reset the bundle
	- `docker-compose down -v`
	- **This deletes any volumes that are created for the bundle.** On next startup, the MySQL will reimport, thus reverting to the original state. *There is no going back if you do this, so make sure you really want to delete all the additional data.*
	- To delete a specific volume, use the following command.
		- `docker volume rm ${NETWORK_NAME}_${VOLUME_NAME}`
			- To find the full name of a volume, run `docker volume ls`
	
### Getting Started
1. Copy a DXP license key into the `feature-set-7.2-sp1/mount/deploy` directory.
	- If there is none, create one.
	- This is where plugin hot deployment will occur.
	
### Removing a Plugin
1. Log into the container. Container names can be found in the docker-compose.yml
	- `docker exec -it ${CONTAINER_NAME} bash`
2. Navigate to the osgi/modules or osgi/marketplace directory. You will be in the `/opt/liferay` directory.
3. Delete the specific module.
	- `rm -f ${PLUGIN_NAME}`
	
### Clearing Caches
- Cache directories are not persisted in the container and not mapped to Docker volumes, so restarting the container will clear both the Tomcat and OSGi caches.

### Patching the system
1. Copy the entire zip file of the fixpack or hotfix into `feature-set-7.2-sp1/mount/patching`
	- Create if necessary.
	
### Troubleshooting
Q. I get a "exited with error code 137" and it all shuts down.

A. This error code means that it is trying to allocated memory, but it is unable, due to not having access to more. **Set your Docker Desktop to have at least 8 GB of available memory.**

Q. I get an error like this when starting the Elasticsearch image.
`ERROR: for elasticsearch  Cannot start service elasticsearch: OCI runtime create failed: container_linux.go:346: starting container process caused "exec: \"/usr/share/elasticsearch/docker-entrypoint-es-plugins.sh\": permission denied": unknown`

A. If you haven't pulled the latest update, you should. If that doesn't work, add the execute permission on the docker-entrypoint-es-plugins.sh file.
- `chmod +x feature-set-7.2-sp1/elasticsearch/config/docker-entrypoint-es-plugins.sh`
