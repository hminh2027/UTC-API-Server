<div id="top"></div>
<br />

# UTC Schedule APIs
An awesome API to work with timetable of students studying in UTC!

This is a NodeJS library with Javascript support NodeJS Server

<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#built-with">Built With</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
### Built With

* [ExpressJs](https://expressjs.com/)
* [Javascript](https://www.javascript.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Installation

```sh
npm install utc-schedule-api
```

</br>

### Prerequisites

```javascript
const { getAllSchedule, getScheduleOfToday, getScheduleOfDay } = require('utc-schedule-api')
```

or

```javascript
const api = require('utc-schedule-api')
```


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### 1. Get all schedule

Get all the subjects and time periods of student on UTC's website 

```javascript
await getAllSchedule(username, password)
```



### 2. Get Schedule of today

Get the subjects and time periods of student today

```javascript
await getScheduleOfToday(username, password)
```


### 3. Get Schedule of day

Get the subjects and time periods of student on specific day

```javascript
await getScheduleOfDay(username, password, new Date(year, month, day))
```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Vu Hoang Minh - [Facebook](https://www.facebook.com/swag.lauch) - dackheros@gmail.com

Project Link: [UTC-Schedule-API](https://github.com/hminh2027/UTC-Schedule-API-Package)

<p align="right">(<a href="#top">back to top</a>)</p>
