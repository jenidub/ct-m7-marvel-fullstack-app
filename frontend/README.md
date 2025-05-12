
# Coding Temple Module 7 Project: JeniDub Marvel Character Database Fullstack App

## Overview
The **JeniDub Marvel Character Database Fullstack App** was created as part of Coding Temple Software Engineering certification. In the full featured app, you can view the full database or lookup a single character. You can also add, edit or delete characters from the database using the Flask/Marshamallow/MySQL backend with API interfaces.

## Project Screenshots Library
[Check Out the Project Screenshots on Google Drive]
(https://drive.google.com/drive/folders/19_LrW9hyOFDCZd3DCMZrjUfYC3i8l0Du?usp=sharing)

## Features
 - Home Page - view all available features of the database
 - View Character - look up a single character by ID
 - Add Character - add a character to the database and preview the card prior to submission
 - Edit Character - look up a character and edit their character card
 - Delete Character - look up a character and delete their character 
   card

## File Structure (Key Files)
```
	└── 📁 assets
	└── 📁 backend
		└── 📁 venv
		└── 📁 requirements.txt
		└── 📁 server.py
	└── 📁 frontend
		└── 📁 src
			└── 📁 assets
			└── 📁 components
			    └── AddCharacter.jsx
			    └── CharacterCard.jsx
			    └── CharacterDatabase.jsx
			    └── DeleteCharacter.jsx
			    └── EditCharacter.jsx
			    └── ErrorPage.jsx
			    └── HomePage.jsx
			    └── NavBar.jsx
			    └── ViewCharacter.jsx
			└── 📁 css
			    └── AddCharacter.css
			    └── App.css
			    └── CharacterCard.css
			    └── CharacterDatabase.css
			    └── DeleteCharacter.css
			    └── EditCharacter.css
			    └── ErrorPage.css
			    └── HomePage.css
			    └── NavBar.css
			    └── ViewCharacter.css			
		    └── 📁 App.jsx
			└── 📁 index.css
			└── 📁 main.jsx
		└── 📁 index.html
```

## Requirements.txt for Backend
In the terminal, once you set up your `venv` environment and run `server.py` file, use the following commands to add the `requirements.txt` dependencies: 

    # py -m venv venv | python3 -m venv venv  [ create virtual env ]
    # (Mac) source venv/bin/activate [ activate virtual env ] 
    # pip install -r requirements.txt [ install requirements from txt file ]
	# python3 server.py [ run server.py file ]

*requirements.txt dependencies list:*
```
blinker==1.9.0
click==8.1.8
colorama==0.4.6
Flask==3.1.0
Flask-Cors==5.0.0
flask-marshmallow==1.3.0
Flask-SQLAlchemy==3.1.1
itsdangerous==2.2.0
Jinja2==3.1.5
MarkupSafe==3.0.2
marshmallow==3.24.2
marshmallow-sqlalchemy==1.1.1
mysql-connector-python==9.1.0
packaging==24.2
SQLAlchemy==2.0.36
typing_extensions==4.12.2
Werkzeug==3.1.3
```