- docker network ls

- docker run -d -it --name ubuntu1 bash

- docker run -d -it --name ubuntu2 bash

- docker network inspect bridge

- docker attach ubuntu1
  - ip addr show
  - ping 172.17.0.3
  - ping ubuntu2
  - exit

- docker rm ubuntu1 -f
- docker rm ubuntu2 -f

# Criar nova rede

- docker network create --driver bridge minharede

- docker run -d -it --name ubuntu1 --network minharede bash
- docker run -d -it --name ubuntu2 --network minharede bash

- docker exec -it ubuntu1 bash
  - ping ubuntu2 #Agora consegue pingar


