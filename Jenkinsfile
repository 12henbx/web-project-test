pipeline {
    agent {
        label "dockerworker"
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test:unit'
            }
        }
        stage('Build image') {
            steps {
                sh 'docker build -t my-app .'
            }
        }
        stage('Run app') {
            steps {
                sh 'docker run -p 8080:8181 my-app'
            }
        }
    }
    post {
        always {
            deleteDir()
        }
    }
}