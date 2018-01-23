# IT-CORE

## BUILD
 To build project use following command in 'core' directory:
 - mvn clean build publishToMavenLocal.

## DEBUG RUN
 - For run in debug mode use following command:
   java -Xdebug -Xrunjdwp:server=y,transport=dt_socket,address=8000,suspend=n -jar [folder/path/]core-{version}.jar
   example: java -Xdebug -Xrunjdwp:server=y,transport=dt_socket,address=8000,suspend=n -jar core-1.1.0.jar

## RUN
 To deploy(run) services use following command:
 - java -jar [folder/path/]core-{version}-SNAPSHOT.jar
   example: java -jar core-1.1.0-SNAPSHOT.jar.

