pipeline {
    agent any

    stages {
        // Etapa para detener los contenedores de docker
        stage('Parando los servicios') {
            steps {
                bat '''
                docker compose -p sgu-jjrv-10d down || true
                '''
            }
        }

        // Etapa para eliminar las imágenes viejas
        stage('Eliminando imagenes anteriores') {
            steps {
                bat '''
                IMAGES=$(docker images --filter "label=com.docker.compose.project=sgu-jjrv-10d" -q)
                if [ -n "$IMAGES" ]; then
                    docker rmi -f $IMAGES
                else 
                    echo "No hay imagenes para eliminar"
                fi
                '''
            }
        }

        // Etapa para bajar la actualización del repo
        stage('Bajando la actualizacion del repo') {
            steps {
                checkout scm
            }
        }

        // Etapa para construir y desplegar
        stage('Construyendo y desplegando') {
            steps {
                bat '''
                docker compose up --build -d
                '''
            }
        }
    }

    // Post actions
    post {
        success {
            echo 'Pipeline completado exitosamente.'
        }
        failure {
            echo 'Ocurrió un error durante la ejecución del pipeline.'
        }
        always {
            echo 'Ejecución del Pipeline finalizado.'
        }
    }
}
