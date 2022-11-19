node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube Analysis') {
    def scannerHome = tool 'abdelali-sonar-scanner';
    withSonarQubeEnv() {
      sh "${scannerHome}/bin/abdelali-sonar-scanner"
    }
  }
}
