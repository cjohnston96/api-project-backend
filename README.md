# Welcome to My Stock Forecasting API!

In this project, I built out a server side interactive database using Node.js, Express, and MongoDB to search 10 stocks and view data from forecast models that I built! All of the data I used to seed my database with are from [Yahoo Finance](www.finance.yahoo.com/). All of the data i created from my forecasting methods were done in RStudio.

## To check it out, click [HERE](https://api-project-backend.herokuapp.com/) 






## To work with on your personal machine:

1. Clone (or fork and clone) my repo
```
git clone git@github.com:cjohnston96/api-project-backend.git
```
2. Change into the directory
```
cd api-project-backend
```
3. Install the dependencies
```
npm install
npm install express mongoose body-parser
```
4. Run it!
```
npm start
```

## Let's check out the data!

- Let's search a stock by its name using a GET request
  https://api-project-backend.herokuapp.com/Apple
    Wow! You just searched for just Apple data! Now replace Apple with any of:
    - Apple
    - AMD
    - Disney
    - Facebook
    - Microsoft
    - Sprint
    - Snap
    - Twitter
    - Uber
    - Zynga

- Why not add our own data using a PUT request?
  here is an example of me adding a new stock to the collection:
```
 {
 "name": "Apple",
  "data": [
    {
      "Date": "2014-11-12",
      "Open": 109.379997,
      "High": 111.43,
      "Low": 109.370003,
      "Close": 111.25,
      "Adj Close": 102.21843,
      "Volume": 46942400
    }
  }
```