/*
Build:
docker build -t ubuntu_nodejs .

Run:
sudo docker run -it ubuntu_nodejs /bin/bash
docker run -p 4000:80 ubuntu_nodejs

docker login
Push lên Docker
docker tag ubuntu_nodejs sunlight4d/ubuntu_nodejs:part1
docker push sunlight4d/ubuntu_nodejs:part1
Tự động pull về nếu ko thấy:
docker run -p 4000:80 sunlight4d/ubuntu_nodejs:part1

Deploy thành service:
docker swarm init
docker stack deploy -c docker-compose.yml ubuntu_nodejs_app
Kiểm tra service:
docker service ls

*/

import http from 'http';


