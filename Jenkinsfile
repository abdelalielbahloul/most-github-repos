node {
  stage('SCM') {
    git 'https://github.com/abdelalielbahloul/most-github-repos.git'
  }
  stage('SonarQube Analysis') {
    def scannerHome = tool 'abdelali-sonar-scanner';
    withSonarQubeEnv() {
      sh "${scannerHome}/bin/sonar-scanner" 
    }
  }
}
