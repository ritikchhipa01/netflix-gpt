# NETFLIX GPT 

- 1.Create-react-app 
- 2.Configured Tailwind Css 
   npm i tailwindcss
   npm install -D tailwindcss
   npx tailwindcss init

   In tailwind.config.js file >> In Content 
   add  >>  "./src/**/*.{js,jsx,ts,tsx}",

   Put following lines in inddex.css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

# Features
- login/signUp
    - Login / signUP page
    - redirected to Browse Page
- Browse  (after authentication)
   - Header
   - Main Movie
         - Trailer in Background
         - Title and Description
         - Movie Suggestion
            - [MovieLists * N]
- NetflixGpt
    - Movie suggestion
   