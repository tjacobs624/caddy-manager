# Caddy Manager

Caddy Manager is a simple web application designed to manage your existing Caddy server, specifically for reverse proxy configurations. This application provides an intuitive interface to interact with the Caddy server API, allowing users to easily manage their server settings.

## Project Structure

```
caddy-manager
├── public
│   ├── index.html        # Main HTML document for the web app
│   ├── styles.css        # Styles for the web app
│   └── script.js         # Client-side JavaScript functionality
├── src
│   ├── app.js            # Entry point of the application
│   ├── api
│   │   └── caddy.js      # Functions to interact with the Caddy server API
│   └── components
│       └── dashboard.js   # Dashboard component for the web app
├── package.json           # npm configuration file
├── README.md              # Documentation for the project
└── .gitignore             # Files and directories to be ignored by Git
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd caddy-manager
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Access the web app:**
   Open your browser and navigate to `http://localhost:3000` (or the port specified in your app.js).

## Usage

Once the application is running, you can use the dashboard to manage your Caddy server settings. The dashboard allows you to:

- View current configurations
- Update reverse proxy settings
- Retrieve server status

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.