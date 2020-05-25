# Information:

-Ce repo est divisé en deux projets : "blogApi" et "webapp"\
-Comme indiqué dans les instructions , l'api a été conçue avec Spring boot , Hibernate et Spring Data JPA\
-La base de donnée est postgresql.\
-L'application web a été conçue avec React.C'est un simple interface pour gérer les opérations CRUD\
-Version live de l'api sur https://alexandro-blogapi.herokuapp.com. \
-Version live de l'application web pour les opérations CRUD sur  https://alexandro-blogproject.web.app/

# Pour rouler l'api localement :
-Installer postgresql\
-Exécuter de DDL dans src/sql/script.sql\
-Modifier les paramètres du datasource dans src/main/resources/application.properties \
-Démarrer le projet avec la commande: mvn spring-boot:run

# Pour rouler l'application web localement :
-Installer node.js (https://nodejs.org/en/) \
-Allez dans le fichier src/index.js\
-Modifier la variable window.$HTTP_BASE_URL pour que ça pointe vers l'url de l'api.\
-En ligne de commande à la racine du projet , lancez "npm install"\


