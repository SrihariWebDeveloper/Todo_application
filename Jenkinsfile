pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/SrihariWebDeveloper/Todo_application.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build React App') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Static Code Analysis') {
            steps {
                dir('frontend') {
                    sh 'npx eslint src'
                }
            }
        }

    }
}