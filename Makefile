mongo:
	docker run -d --name mongo-service -p 27017:27107 -v ~/Desktop/OSS/Docker/m-orches/mongodb:/data/db mongo

mongo-bash:
	docker exec -it some-mongo bash

mongo-logs:
	docker logs some-mongo