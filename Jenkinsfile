pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 7001:7001' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
