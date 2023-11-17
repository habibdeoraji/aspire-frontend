# Aspire Frontend

This project is a React application with a specific set of components and utilities, as outlined by the folder structure provided.

## Folder Structure

The project has the following directory layout:

```
src/
|-- assets/
|   |-- icons/
|   `-- material_ui_theme.js
|-- components/
|   |-- Cards/
|   |-- ElementaryComponents/
|   `-- Modals/
|-- layout/
|   `-- Layout.jsx
|-- pages/
|   |-- Cards.jsx
|   |-- Credit.jsx
|   |-- Home.jsx
|   |-- Payments.jsx
|   `-- Settings.jsx
|-- services/
|   `-- mockApiService.js
`-- utils/
    |-- helperFunctions.js
    `-- transactionsData.js
App.css
App.js
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Before running the project, you need to have Node.js and npm installed on your system. You can download them from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository:
```bash
git clone https://github.com/habibdeoraji/aspire-frontend.git
```

2. Navigate to the project directory:
```bash
cd aspire-frontend
```

3. Install NPM packages with the following command. The `--legacy-peer-deps` flag is used to avoid conflicts between peer dependencies:
```bash
npm install --legacy-peer-deps
```

### Running the Application

After installing the dependencies, you can start the application using:

```bash
npm start
```

This will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Contributing

Contributions are what make the open-source community such a fantastic place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## License

Distributed under the MIT License. See `LICENSE` for more information.
