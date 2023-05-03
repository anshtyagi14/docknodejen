// Use the "node" block to run the pipeline on a Jenkins agent
node {
    // Declare a variable "app" to store the Docker image
    def app

    // Clone the Git repository with the source code
    stage('Clone repository') {
        checkout scm
    }

    // Build the Docker image with the specified name
    stage('Build image') {
        app = docker.build("anshtyagi47/jenkins")
    }

    // Test the Docker image (example: run some unit tests inside the container)
    stage('Test image') {
        app.inside {
            // This is a placeholder for actual tests
            sh 'echo "Tests passed"'
        }
    }

    // Push the Docker image to Docker Hub
    stage('Push image') {
        // Log in to Docker Hub using the credentials stored in Jenkins
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            // Push the image with a tag equal to the build number
            app.push("${env.BUILD_NUMBER}")
            // Push the image with the "latest" tag
            app.push("latest")
        }
    }
}
