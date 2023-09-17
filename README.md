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

- 3. Header
- Login form
- sign up form
- routing
- form Validation
- UseRef Hook
- firebase setup 
- firebase deployement
- create signup User Account
- Implement SignIn user api firebase
- Implement SignOut using firebase signout
- Update Profile using firebase
- Bugfix: signup user displayName and profile picture update
= Bugfix: if the user not loggedIn redirect /browse to login page
- Unsubscribed onStatechanged call back
- add hardcorded value in constant.js file
- Register for TMDB and get access token & make an app
- Get Data from TMDB now playing movie list
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with Movie Data
- Planning for Maincontainer & Secondary Container
- Fetch Data for Trailer Video
- Update Store with trailer Video Data 
- In mainContainer (videoBackground, VideoTitle)Embedded the Youtube Video and make it autoplay and mute
- Tailwind Calsses to make mmain Container look Great 
- Build Secondary Component (MovieList > MovieCard)
- Build Movie List
- Build Movie Card
- TMDB Image CDN Url
- Made the browser page amazing with Tailwind Css
- remove the scrollbars 
- usePopularMoives Custom Hooks
- Add Gpt Search and searchbar
- use OPEN AI GPT Api for movie suggestions 
- rendered suggested top 5 moive 
- use Azure Translator Api for Multilingual feature 
- Applied Multilingual feature 
- Make App Responsive 


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
   