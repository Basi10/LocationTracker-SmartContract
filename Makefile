.PHONY: build up down start-backend start-frontend

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

start-backend:
	docker-compose exec your_container_name npx hardhat node

start-frontend:
	docker-compose exec your_container_name npm start --prefix /app/admin-frontend

# Add more targets as needed

