# Companion Dashboard API Gateway

A custom Node.js and Express backend API Gateway designed to securely proxy third-party APIs, transform incoming JSON data streams, and serve filtered endpoints to client applications.

## Key Architecture & Features

- **API Key Security:** Server-side proxying prevents API keys from exposing in client browsers.
- **RESTful Design:** Exposes clean `/api/health` and proxy integration routes.
- **Environment Management:** Driven by `.env` configurations.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Tooling:** Nodemon, CORS, Dotenv

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation & Local Setup

1. Clone the repository:
   git clone <your-repo-url>

2. Install dependencies:
   npm install

3. Create a `.env` file in the root folder and configure your port:
   PORT=5000

4. Launch the development server:
   npm run dev

## API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/api/health` | Health check route returning server operational status |