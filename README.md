# WeatherApp
This weather app allows you to search for cities, favorite them, view their current weather, and also their forecast. I will email an API Key along with a link to this project.

# How to start the Server
npm install

followed by: 

npm run dev

ctrl+left click on the link generated to view the application

# Assumptions
I am assuming that the directions are rather broad on purpose in order to provide flexibility in what I wanted to implement and could implement in the timeframe given. Certain features, and UIs were not fully fleshed out mainly due to time constraints. I assumed that so long as there are a lot of features implemented from those listed in the instructions it would satisfy this take home test. I also assumed that I wouldn't be expected to use other APIs to fully flesh out all the features for this application (no current UV index is a notable missing data point not provided through open weather's API). I also made the assumption that this take home test was originally planned to be in React. Despite myself not having any experience with React before, I took it upon myself to learn it and utilize it. 
In regards to the project itself, I also assumed that there wasn't a strong requirement to have the favorites saved across refreshes or server restarts. 

# Bugs, Unfinished Features, Limitations, and Issues
There's a lot of missing error handling in the code. Notably, if your search fails to return any cities, seemingly nothing will happen. 
If the server ever crashes, returns data in an unexpected format, or takes too long to respond that would lead to the application crashing or other unexpected issues. With more time I could have taken more of these issues into account. 
The API seems to have a hard limit of 5 cities returned for any given search. This means that there's no real way in the app to search for cities by name that are not in those top 5 the API returns. With more time, a way to possibly solve this issue is by allowing the entering of a country code or a country name. This in conjunction with an API or the i18n-iso-countries library, would allow for a person to input their country as well to help narrow the search. 
When an item is favorited, it still remains on the search list. I would have preferred to have an item only show up on one list at a time, but I didn't have the time to implement that feature. 
The times shown in the app are currently in UTC, regardless of the location. With more time I would have either liked to convert them to the user's local time or to the location's local time. The API provide the UTC time and also the offset to help accomplish this. 
Snow and rain fall aren't converted and are shown in mm/hr, unlike the temperature which is correctly converted based on the Units button. 
The UI needs a lot more work, especially the details page. I would have like to change how the current weather data looks, the units toggle button, 
I would have like to add a 5 day forecast, by day component. Right now, the hourly forecast shows up until 5 days in the future, but its a bit tedious to use for several days in the future. I would have liked to use that same data to show the highs, lows (calculated by searching through those fields for a given day) and average temperature. 