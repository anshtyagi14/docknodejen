# Jenkins pipeline for docker image build and push to docker hub

This guide will walk you through the process of using jenkinsfile to clone a Git repository, build a Docker image from a Dockerfile, test the Docker image, and then push the Docker image to Docker Hub.

## Prerequisites

1. Ubuntu 22.04 installed
2. Docker and Docker Compose installed
3. Jenkins installed
4. Node.js installed
5. OpenJDK-11 installed
6. Docker Hub account

## Initial setup

### Step 1: Install Docker and Docker Compose

Update your Ubuntu system and install the necessary Docker components

```console
$ sudo apt update
$ sudo apt upgrade

$ wget https://download.docker.com/linux/ubuntu/dists/jammy/pool/stable/amd64/containerd.io_1.6.20-1_amd64.deb \
wget https://download.docker.com/linux/ubuntu/dists/jammy/pool/stable/amd64/docker-ce_23.0.5-1~ubuntu.22.04~jammy_amd64.deb \
wget https://download.docker.com/linux/ubuntu/dists/jammy/pool/stable/amd64/docker-ce-cli_23.0.5-1~ubuntu.22.04~jammy_amd64.deb \
wget https://download.docker.com/linux/ubuntu/dists/jammy/pool/stable/amd64/docker-buildx-plugin_0.10.4-1~ubuntu.22.04~jammy_amd64.deb \
wget https://download.docker.com/linux/ubuntu/dists/jammy/pool/stable/amd64/docker-compose-plugin_2.17.3-1~ubuntu.22.04~jammy_amd64.deb

$ sudo dpkg -i ./containerd.io_1.6.20-1_amd64.deb \
  ./docker-ce_23.0.5-1~ubuntu.22.04~jammy_amd64.deb \
  ./docker-ce-cli_23.0.5-1~ubuntu.22.04~jammy_amd64.deb \
  ./docker-buildx-plugin_0.10.4-1~ubuntu.22.04~jammy_amd64.deb \
  ./docker-compose-plugin_2.17.3-1~ubuntu.22.04~jammy_amd64.deb

$ sudo service docker start

$ groups ubuntu
$ sudo usermod -aG docker ubuntu
$ sudo service docker restart
$ exit
```

### Step 2: Install Node.js and OpenJDK-11

Install Node.js and OpenJDK-11

```console
$ curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - &&\
sudo apt-get install -y nodejs

$ sudo apt install openjdk-11-jdk
```

### Step 3: Install Jenkins

Download and install Jenkins

```console
$ sudo apt install net-tools

$ wget https://pkg.jenkins.io/debian/direct/jenkins_2.403_all.deb
$ sudo dpkg -i jenkins_2.403_all.deb
$ sudo usermod -aG docker jenkins
```

### Step 4: Configure Jenkins

1. Open Jenkins in your browser (usually at http://localhost:8080) and log in.
2. Check if Jenkins has admin access.
3. Install the Docker Pipeline Plugin: https://plugins.jenkins.io/docker-workflow/

4. Configure Docker Hub credentials in Jenkins
- Go to Dashboard > Manage Jenkins > Credentials > System > Global credentials (unrestricted)
- Click on "Add Credentials"
- Select "Username with password" from the "Kind" dropdown.
- Enter your Docker Hub username and password.
- Set the ID as "docker-hub-credentials”.
- Click "OK" to save the credentials.

5. Create a new Pipeline in Jenkins
- Click on "New Item" from the Dashboard
- Enter a name for your Pipeline (e.g., "DockerPipeline")
- Select "Pipeline" and click "OK”.

6. Configure the Pipeline to use the Git repository
- Go to Dashboard > Your-Pipeline-Name > Configure.
- In the "Pipeline" section, select "Pipeline script from SCM" for "Definition”.
- Choose "Git" for "SCM"
- In "Repositories", enter the URL of the public Git repository in "Repository URL”.
- Change the "Branch Specifier" to */main.
- Click "Save"

### Step 5: Build the Pipeline

1. Go to the Jenkins Dashboard and click on your Pipeline.
2. Click on "Build Now" to start the build process.
3. Monitor the progress in the "Build History" section on the left panel.

Once the build is complete, your Docker image will be pushed to Docker Hub. Check your Docker Hub account to confirm that the image is available.

That's all! You have successfully configured Jenkins to clone a Git repository, build a Docker image, test the image, and push the image to Docker Hub.
