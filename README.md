# Welcome to My Stock Forecasting API!
<br />
<br />

In this project, I built out a server side interactive database using Node.js, Express, and MongoDB and Mongoose to search 10 stocks and view data from forecast models that I built! All of the data I used to seed my database with are from [Yahoo Finance](www.finance.yahoo.com/). All of the data i created from my forecasting methods were done in RStudio. All CRUD testing was done using Postman.

## To check it out, click [HERE](https://api-project-backend.herokuapp.com/) 
<br />
<br />
<br />
<br />

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
    Wow! You just searched for just Apple data! Now replace Apple in the above URL with any of:
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

- Why not add our own data using a POST request?
    here is an example of me adding a new stock to the collection:
    POST https://api-project-backend.herokuapp.com/
```
{
 "name": "Conor",
  "data": [
    {
      "Date": "2019-11-14",
      "Open": 3,
      "High": 4,
      "Low": 0.01,
      "Close": 0.50,
      "Adj Close": 0.50,
      "Volume": 45
    }]
}
```

- Next, let's modify our new stock to make it seem like our company is better using a PUT request:
    PUT https://api-project-backend.herokuapp.com/Conor
```
{
 "name": "Conor",
  "data": [
    {
      "Date": "2019-11-14",
      "Open": 300,
      "High": 400,
      "Low": 300,
      "Close": 375,
      "Adj Close": 366.69,
      "Volume": 450000
    }]
}
```

- Finally, we realized that it's not good to add fake stocks to real data, so lets use a DELETE request:
    DELETE https://api-project-backend.herokuapp.com/Conor