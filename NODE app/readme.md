# From the Other Side

A platform for sharing ghostly encounters and paranormal sightings. This Node.js application allows users to upload and view stories of supernatural experiences, with a live news feed of random stories via Server-Sent Events (SSE).

## Description

"From the Other Side" is a web application built with Node.js that serves as an online repository for paranormal sightings. Users can browse existing stories, submit new encounters, and receive live updates through a news feed. The app emphasizes security by sanitizing user input to prevent XSS attacks.

## Features

- **Sightings Sharing**: Users can upload and view paranormal encounter stories.
- **Live News Feed**: Real-time updates with random stories using Server-Sent Events (SSE).
- **Static File Serving**: Serves HTML, CSS, JS, and image assets.
- **Input Sanitization**: Protects against XSS attacks by sanitizing user-submitted content.
- **Event-Driven Architecture**: Uses Node.js events for handling new sightings.

## Output
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lokhacodes/node.js.git
   cd node.js/NODE\ app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To start the server:

```bash
npm start
```

Or for development:

```bash
npm run dev
```

The server will run on `http://localhost:8000`.

Navigate to the home page to explore sightings, upload new stories, or view the live news feed.

## API Endpoints

- `GET /api`: Retrieves all sightings as JSON.
- `POST /api`: Submits a new sighting. Expects JSON body with sanitized input.
- `GET /api/news`: Establishes SSE connection for live news updates.


## Technologies Used

- **Node.js**: Server-side JavaScript runtime
- **ES Modules**: Modern JavaScript module system
- **HTTP Module**: Built-in Node.js HTTP server
- **File System (FS) Module**: File reading/writing operations
- **Path Module**: Cross-platform path handling
- **sanitize-html**: Library for HTML sanitization to prevent XSS

## Important Concepts Learned

- **OS Agnostic**: Code that works across different operating systems.
- **import.meta**: Object providing metadata about the current module in ES modules.
- **Absolute vs. Relative Paths**: Understanding path resolution in Node.js.
- **XSS Attacks**: Cross-Site Scripting vulnerabilities and prevention.
- **Input Sanitization**: Removing malicious content from user input, specifically HTML tags.

## Accomplishments

- Implemented file system operations for data persistence.
- Built a custom static file server.
- Integrated input sanitization for security.
- Created event-driven architecture for real-time updates.
- Developed Server-Sent Events for live news feed.

## Checklists for Building the Project

### Reading and Serving Data
- Identify what resources the client wants.
- Identify the path to that resource from the current module's directory.
- Read the resources using the FS module.
- Send those resources to the client.

### Adding POST Functionality
- Collect the incoming data.
- Parse the JSON body.
- Sanitize the input to prevent XSS.
- Retrieve existing data.
- Add the new data to the existing dataset.
- Write the updated data back to the JSON file.

## Contributing

Feel free to submit issues or pull requests to improve the platform.

## License

ISC License - see package.json for details.
