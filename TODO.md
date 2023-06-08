Tools:
- React
- Bootstrap and Sass

1. Build Navbar
  - ~~First setup the stars background~~
  - ~~Use React router and Navbar component~~
    - ~~BrowserRouter goes in Main.jsx~~
    - ~~Get the 2 routes working then do the rest of the pages~~
    - ~~Navbar component gets the Link tags~~
    - ~~Pick CSS framework (Bootstrap and Sass)~~
    - ~~Make hamburger menu to start~~
  - ~~Style burger menu to mockup~~
  - ~~Let the Navbar component be DRY~~
  - ~~Double check routing functionality~~
  - ~~Make responsive~~

2. Build out Mercury page
  - ~~Extract the info from data.json~~
  - ~~Start with just the image (this should work for each planet page)~~
  - ~~Pull the rest of the data starting from 'Overview'~~
  - ~~Finish spaceing between text and images~~
  - ~~Create buttons for 1 overview, 2 structure, and 3 surface. ~~
    - ~~May have to dive into routing. ~~
    - ~~Possibility of conditional rendering for 2 and 3~~
    - ~~Make it its own component? or It's own routing on each planet component?~~
  - ~~Ideally, you could render each planet info dynamically rather than hard coding each page. The multiple pages are generally a placeholder. .map() may be handy here.~~
  - ~~Favicon error~~
  - ~~Add unique keys~~
  - ~~General animations!~~
    - ~~Make summary changes do a fade in~~
    - ~~Slide ins for grid info~~
  - ~~Make mobile menu close when new route is opened~~
  - ~~Animations for tablet buttons~~

3. Deploy (06b572b6fb404278b1bbdf2238310e49b32fdd79)
  - ~~Finish the project with multiple pages and slap onto portfolio. No need to wait~~
  - ~~Deploy project using gh-pages~~
  - ~~Error: Images are not rendering~~
  - ~~Error: everytime I refresh on a route, it 404s~~

4. Fixes
  - ~~Responsive edits~~
    - ~~Planet image top margin for mobile~~
    - ~~Info grid margin fix~~
    - ~~Allow mobile button to function using right thumb~~
    - ~~Allow scroll overflow on certain breakpoints?~~
    - ~~Planet img size responsiveness (max width to 40%?)~~

5. Homepage
  - ~~Create Homepage and adjust routing~~
  - ~~Route title to Homepage~~
  - ~~Create solar system component~~
    - ~~Fix Sass deprecation warnings~~
    - ~~Fix Sun appearence~~
    - ~~Replace planets with asset planet SVGs~~
    - ~~Scale size for breakpoints~~
      - ~~Increase overall planet sizes (use pl variables)~~
      - ~~Increase solar system size (stretch orbits size through orb variables)~~
    - ~~Turn into page selections (The Neptune div is big, thus the only clickable link is that. This is a CSS situation.)~~
      - ~~Change the z-indexes. Solar syst class zindex made the planets not hoverable~~
      - ~~Hover states and fade-ins (Styled components is a possible solution to this.)~~

6. NASA APOD API
  - ~~Add route and link~~
  - ~~Photo component API fetching, and JSX (class component?)~~
  - ~~Implement react date picker~~
  - ~~Style component~~
    - ~~General layout styling~~
    - ~~Responsive~~
    - ~~Desktop big screen responsive~~
    - ~~Uncomment datepicker and place in layout~~
    - ~~Refactor to functional component for easy loader implimentation~~
    - ~~Fade-ins after loadspinner is implimented~~
  - ~~Adjust API and styling for video content~~


7. Dave Feedback
  Higher Priority:
  - ~~When the summary changes happen, everything shifts from the text~~
  - ~~The grid block: have 2 slide in from left, other 2 slide in from right.~~
  - ~~Datepicker year selector is empty (hidden for now)~~
  - One a giant screen, half the content gets cut in half (not centered)
    Options to try:
    - Absolute position with solar syst?
    - The widths in the Stars container (play around in the dev tools)
    - ~~Try wrapping in a div from the Homepage component / Homepage stylesheet~~




Low Priority Tasks
  - ~~Put planet components into folder for organization~~
  - ~~Impliment loading spinner~~
  - ~~Create mixins folder and import them into their seperate scss files.~~
  - ~~Fix MDB Grid "pre-render"~~
  - Fade in for summary changes
  - Wrap json fetching in useEffect()?
  - Fix active states for buttons on tablet (Undo some Bootstrap)
  - A star is bigger than venus (background svg)
  - Experiment with page zooming. On scroll you lose the scroll out? The header/nav also disappears (This is obscure)
  - Render 2 of the planet images
  - Dynamically render all planet pages
    - Change Mercury component into SinglePlant
    - Then adjust the routing in App.jsx
  - Docker container?
