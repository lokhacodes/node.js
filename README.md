# Node.js Projects

This folder contains two Node.js-based projects demonstrating different aspects of server-side JavaScript development.

## Projects

### NODE app/
A web application for sharing and viewing paranormal sightings and ghostly encounters. Built with Node.js, it features:
- User submission of supernatural stories
- Live news feed using Server-Sent Events (SSE)
- Input sanitization for security against XSS attacks
- Static file serving for HTML, CSS, and images
- Event-driven architecture for real-time updates

**Key Technologies:** Node.js core modules (HTTP, FS, Path), ES Modules, sanitize-html library.

**Installation and Usage:** See `NODE app/readme.md` for detailed instructions.

### The wild horizons api/
A REST API providing data on extraordinary and unique destinations around the world. Built with vanilla Node.js, it includes:
- Retrieval of destinations with filtering by continent, country, or public access
- JSON responses with proper HTTP status codes
- Query parameter and path-based filtering

**Key Technologies:** Node.js core HTTP module, ES Modules, JSON data handling.

**Installation and Usage:** See `The wild horizons api/readme.md` for detailed instructions.

Both projects are built using Node.js core modules to emphasize fundamental concepts like HTTP handling, file system operations, and data management without relying on external frameworks.
