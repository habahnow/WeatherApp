 # WeatherApp

**WeatherApp** is a weather application that allows users to search for cities, favorite them, view their current weather, and check their forecasts. An API key will be emailed along with a link to this project.

## Table of Contents
- [How to Start the Server](#how-to-start-the-server)
- [Assumptions](#assumptions)
- [Bugs, Unfinished Features, Limitations, and Issues](#bugs-unfinished-features-limitations-and-issues)

## How to Start the Server

1. Install the necessary dependencies, navigate to the weatherApp directory and run:
   ```bash
   npm install
   ```
2. Start the development server:
    ```bash
    npm run dev
    ```
3. Click on the link generated in the terminal to view the application (use `Ctrl + Left Click`).

## API Key
API key that is emailed should be placed in the API_Key variable in src > services > api.js

## Assumptions

- The directions provided are intentionally broad to allow flexibility in implementation within the given timeframe.
- Certain features and UI elements were not fully developed due to time constraints.
- It was assumed that implementing a variety of features from the instructions would satisfy the requirements of this take-home test.
- It was not expected to use additional APIs to fully implement all features (e.g., the current UV index is a notable missing data point not provided through OpenWeather's API).
- It was assumed that there was no strong requirement for favorites to be saved across refreshes or server restarts.

## Bugs, Unfinished Features, Limitations, and Issues

- **Error Handling:** There is a lack of error handling in the code. For example, if a search fails to return any cities, the application does not provide feedback.
- **Server Crashes:** If the server crashes, returns data in an unexpected format, or takes too long to respond, it may lead to application crashes or other unexpected issues.
- **API Limitations:** The API has a hard limit of 5 cities returned for any given search, which restricts the ability to search for cities not included in those top 5. A potential solution could involve allowing users to enter a country code or name, possibly using the `i18n-iso-countries` library to narrow down searches.
- **Favorites Management:** Favorited items remain on the search list. Ideally, an item should only appear on one list at a time, but time constraints prevented this feature from being implemented.
- **Time Display:** Times shown in the app are currently in UTC, regardless of the location. Ideally, these should be converted to the user's local time or the location's local time using the API's UTC time and offset.
- **Precipitation Units:** Snow and rainfall are displayed in mm/hr, while temperature is correctly converted based on the units toggle button.
- **UI Improvements:** The user interface requires significant enhancements, particularly on the details page. Desired improvements include:
  - A more visually appealing layout for current weather data.
  - A refined "Units Toggle" button.
  - A 5-day forecast component, displaying daily highs, lows, and average temperatures, rather than just the hourly forecast.
