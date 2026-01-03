# Wild Horizons API

A REST API providing data on the planet's most interesting and unique places, built with Node.js using the core HTTP module.

## Description

This API serves a dataset of extraordinary destinations around the world, including natural wonders, mysterious sites, and restricted locations. Each destination includes details like name, location, country, continent, public access status, and fun facts.

## Features

- Retrieve all destinations or filter by query parameters
- Filter by continent or country via URL paths
- JSON responses with proper status codes
- Built with vanilla Node.js (no external frameworks)

## Installation

1. Clone or download the project.
2. Navigate to the project directory: `cd "The wild horizons api"`
3. Install dependencies (if any): `npm install`
4. Start the server: `npm start` or `node server.js`

The server will run on `http://localhost:8000`.

## API Endpoints

### GET /api
Retrieve all destinations or filter by query parameters.

**Query Parameters:**
- `continent`: Filter by continent (case-insensitive)
- `country`: Filter by country (case-insensitive)
- `is_open_to_public`: Filter by public access status (`true` or `false`)

**Examples:**
- `GET /api` - All destinations
- `GET /api?continent=asia` - Destinations in Asia
- `GET /api?country=new zealand&is_open_to_public=true` - Public destinations in New Zealand

### GET /api/continent/{continent}
Retrieve destinations by continent.

**Example:** `GET /api/continent/europe`

### GET /api/country/{country}
Retrieve destinations by country.

**Example:** `GET /api/country/usa`

## Data Structure

Each destination object includes:
- `name`: String - Name of the destination
- `location`: String - Specific location
- `country`: String - Country name
- `continent`: String - Continent
- `is_open_to_public`: Boolean - Whether open to public
- `uuid`: String - Unique identifier
- `details`: Array of objects with `fun_fact` and `description`



## Technologies Used

- Node.js (core HTTP module)
- ES Modules
- JSON for data exchange

## Development Notes

- Built using Node.js core modules for learning purposes
- Handles HTTP requests and responses manually
- Implements data filtering and query parameter extraction
- Sends appropriate status codes and headers
