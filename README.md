# CS Query API

A simple REST API service for querying Counter-Strike server information. This API allows you to retrieve basic server details like server name, current map, player count, and maximum player slots.

## Features

- Query Counter-Strike (1.6) server information
- Lightweight Express.js application
- Docker support for easy deployment
- Automated Docker builds via GitHub Actions

## Requirements

- Node.js 18 or higher
- npm or yarn

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/cs-query-api.git
cd cs-query-api
npm install
```

## Usage

### Starting the server

```bash
npm start
```

The API will be available at http://localhost:3000

### API Endpoints

#### GET /server-info

Query a Counter-Strike server for information.

**Parameters:**

- `ip` (required) - IP address of the server
- `port` (required) - Port of the server

**Example Request:**

```
GET /server-info?ip=192.168.1.1&port=27015
```

**Example Response:**

```json
{
  "serverName": "My CS Server",
  "map": "de_dust2",
  "players": 10,
  "maxPlayers": 32
}
```

## Docker Support

### Local Docker Build

You can run this application using Docker locally:

```bash
# Build the Docker image
docker build -t cs-query-api .

# Run the container
docker run -p 3000:3000 cs-query-api
```

### GitHub Container Registry

This project uses GitHub Actions to automatically build and publish Docker images to GitHub Container Registry.

To pull and use the pre-built image:

```bash
# Pull the image
docker pull ghcr.io/nide-gg/cs-query-api:latest

# Run the container
docker run -p 3000:3000 ghcr.io/nide-gg/cs-query-api:latest
```

### Docker Compose

A `docker-compose.yml` file is included for easy deployment:

```bash
# Start the service
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the service
docker-compose down
```

> **Note**: Repository names in Docker tags must be lowercase. If your GitHub username contains uppercase letters, use the lowercase version in the commands above.

## GitHub Actions

This repository includes a GitHub Actions workflow that:

1. Builds the Docker image
2. Pushes it to GitHub Container Registry with lowercase repository name
3. Tags images with both `latest` and the commit SHA

The workflow runs automatically on pushes to the `main` branch.

## License

MIT

## Contributing

Contributions, issues, and feature requests are welcome! 