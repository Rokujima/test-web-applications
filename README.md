# Node.js Express Application with Leaflet.js and Chart.js

This is a Node.js Express application that combines Leaflet.js for maps, loads Excel data with node-xlsx, and creates interactive charts using Chart.js.

## Prerequisites

Before running the application, ensure that you have the following installed on your system:

* Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
* Docker (optional): If you want to run the application using Docker, make sure you have Docker installed. You can download Docker from [docker.com](https://www.docker.com/).

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Rokujima/test-web-applications.git
   ```
3. Navigate to the project directory:
   ```bash
   cd test-web-applications
   ```
4. Install the project dependencies using npm:
   ```bash
   npm install
   ```

## Running the Application

You can run the application using npm or Docker.

### Using npm

1. Start the development server:

   ```bash
   npm run dev
   ```

   This command starts the server in development mode, allowing you to make changes and see them reflected without restarting the server.
2. Access the web application in your browser at [http://localhost:3000](http://localhost:3000/).

### Using Docker

1. Build the Docker image:

   ```bash
   docker-compose build
   ```
2. Start the Docker container in detached mode:

   ```bash
   docker-compose up -d
   ```

   This command will start the application in a Docker container.
3. Access the web application in your browser at [http://localhost:3000](http://localhost:3000/).

## Usage

Once the application is running, you can use it to interact with maps, load Excel data, and view interactive charts. Make sure you follow the on-screen instructions for using the features.
