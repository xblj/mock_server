pipeline {
    agent {
        docker {
            image 'node:8-alpine' 
            args '-p 7001:7001' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install --registry=https://registry.npm.taobao.org'
            }
        }
       stage('stop') { 
            steps {
                sh 'npm stop'
            }
        }
       stage('start') { 
            steps {
                sh 'npm start'
            }
        }
    }
}
