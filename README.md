# SpaceX Clone

This project is a SpaceX clone built using React.js. It aims to replicate some of the features and user interface elements found in the official SpaceX website.

## Getting Started

To get started with this project, follow the instructions below:

    1. Install node.js using the following command:
    
    git clone https://github.com/The-CuriousOne/spacex_clone
    
    2. Navigate to the project directory:
    
    cd spacex-clone
    
    3. Install the dependencies by running:
    
    npm install

## Start the development server:

    1. Run the Project using the following command in the terminal:

    npm start

    Open your web browser and visit http://localhost:3000 to see the application in action.

## Features

    Rocket Launches: View the upcoming and past rocket launches by SpaceX.
    Rocket Details: Get detailed information about each rocket, including its name, type, and description.
    Launch Pads: Explore the launch pads used by SpaceX for rocket launches.
    Launch Videos: Watch videos of previous SpaceX launches directly within the application.
    Reusable Components: The project utilizes reusable React components to promote code reusability and maintainability.
    Responsive Design: The application is designed to be responsive and work across different screen sizes.

## Technologies Used

    React.js: A JavaScript library for building user interfaces.
    React Router: A routing library for handling navigation within the application.
    CSS Modules: A CSS approach that allows for local scoping of styles.

## Project Structure

The project structure is organized as follows:

    ├── src/
    │   ├── components/      # Reusable React components
    │   │   ├── home_components/    # Home Page Compoents page components
    │   │   │   ├── Section.css             # Section.js CSS script
    │   │   │   └── Section.js              # Section.js Component
    │   │   ├── page_components/    #  Different Page components
    │   │   │   ├── Count.css               # Count.js CSS script
    │   │   │   ├── Section1.css            # Section1.js CSS script
    │   │   │   ├── Section1.js             # Section1.js CSS Component 
    │   │   │   ├── Section2.css            # Section2.js CSS script 
    │   │   │   ├── Section2.js             # Section2.js CSS Component 
    │   │   │   ├── Section3.css            # Section3.js CSS script 
    │   │   │   ├── Section3.js             # Section3.js CSS Component 
    │   │   │   ├── Section4.css            # Section4.js CSS script 
    │   │   │   ├── Section4.js             # Section4.js CSS Component 
    │   │   │   ├── Section5.css            # Section5.js CSS script 
    │   │   │   ├── Section5.js             # Section6.js CSS Component
    │   │   │   ├── Section6.css            # Section6.js CSS script 
    │   │   │   ├── Section6.js             # Section6.js CSS Component 
    │   │   │   ├── Section7.css            # Section7.js CSS script 
    │   │   │   ├── Section7.js             # Section7.js CSS Component 
    │   │   │   ├── Section8.css            # Section8.js CSS script 
    │   │   │   ├── Section8.js             # Section8.js CSS Component 
    │   │   │   ├── Section9.css            # Section9.js CSS script 
    │   │   │   └── Section9.js             # Section9.js CSS Component 
    │   │   ├── pages/            # Different Pages
    │   │   │   ├── Dragon.js               # Dragon.js Component 
    │   │   │   ├── Falcon9.js              # Falcon9.js Component 
    │   │   │   ├── FalconHeavy.js          # FalconHeavyjs Component 
    │   │   │   ├── HumanSpaceFlight.js     # HumanSpaceFlight Component 
    │   │   │   ├── Rideshare.js            # Rideshare.js Component 
    │   │   │   ├── StarLink.js             # StarLink.js Component 
    │   │   │   └── Starshiled.js           # Starshiled.js Component
    │   │   ├── Footer.css        # Footer.js CSS Script
    │   │   ├── Footer.css        # Footer.js Component
    │   │   ├── Home.css          # Home.js CSS Script
    │   │   ├── Home.css          # Home.js Component
    │   │   ├── Header.css        # Header.js CSS Script
    │   │   └── Header.css        # Header.js Component
    │   ├── App.css           # App.js CSS Script
    │   ├── App.js            # Root component
    │   ├── index.css         # index.html CSS Script
    │   └── index.js          # Entry point
    ├── public/               # Static assets and index.html
    ├── .gitignore            # Git ignore configuration
    ├── package.json          # Project dependencies and scripts
    └── README.md             # Project readme (you are here)

## Contributing

Contributions to this project are welcome. If you find any issues or have ideas for improvements, please open an issue or submit a pull request on the project's GitHub repository.