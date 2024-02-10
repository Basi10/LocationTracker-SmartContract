# Location Based Smart Contract

## Introduction

Smart contracts are a way to utilize the blockchain for transactional purpose. This
project will utilize smart contract for an employer-employee relationship

## Objective

This project implements a smart contract implements an aggreement between Employer and
an employee based on the employee location. The smart contract will hold the payments
as an escrow and based on the compliance pay the employee. The rest is returned to the employer

## Requirements

The project requires the following: Node.Js

## Usage

Build the Docker images.

```bash
make build
```

Start the Docker containers in the background.

```bash
make up
```

Stop and remove the Docker containers.

```bash
make down
```

Start the Hardhat node in the running container.

```bash
make start-backend
```

Start the admin-frontend in the running container.

```bash
make start-frontend
```

## Contributors

- Basilel Birru

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/)
