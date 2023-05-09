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
  - Add unique keys
  - Active states for buttons
  - General animations!
    - Make summary changes do a fade in
  - Make mobile menu close when new route is opened
  - Impliment loading spinner (useState() and conditional for rendering)

3. Dynamically render all planet pages
  - Finish the project with multiple pages and slap onto portfolio. No need to wait
  - Change Mercury component into SinglePlant
  - Then adjust the routing in App.jsx

4. Possible expansions
  - A home page of some sort  
  - Add NASA photo of the day API. Involves one more nav link and Api fetching
  - implement date picker component