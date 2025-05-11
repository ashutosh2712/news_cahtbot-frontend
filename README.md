# Chatbot Frontend

This repository contains the frontend of the chatbot application, built using **React** and styled with **Tailwind CSS**. The frontend interacts with the backend via RESTful APIs to display chat history, handle user queries, and display the bot's responses.

## Features

- **User Interface** for interacting with the chatbot.
- **Chat history display**, where past user messages and bot responses are shown.
- **Real-time interaction** with the bot.
- **Session Management** (starting new sessions, clearing sessions).
- **Responsive and modern UI** built using **Tailwind CSS**.
  
## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs quickly.
- **Axios**: For making HTTP requests to the backend API.
- **React Router**: For managing navigation within the app.
  
## Installation

### Prerequisites

- Node.js installed (preferably version `16` or higher).

### Steps to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chatbot_frontend.git
   cd chatbot_frontend

2. Install the dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm run dev

The application should now be running at http://localhost:5173/.

## Features in Development

1. User authentication (to manage multiple users and sessions securely).
2. Chatbot streaming response (to stream bot responses as they're being typed).
3. Cache management (to improve performance and reduce API calls).

## Architecture
1. The frontend is built as a single-page application (SPA) using React.
2. React Router is used for navigation.
3. Tailwind CSS is used for styling, ensuring a clean and responsive UI.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
  

