# Unit_4
Create an angular based front end to your Unit 3 hw which allows you to add/update/delete Players as well as allows you to perform the 5 queries you created.

Note: This does not need to be a pretty user interface as that is not the point of this class (see the UX class for that).  This just needs to be functional enough to call your backend api.

```
Notes:
This website uses the following API endpoints.

GET - ./database/playerProfile - gets all of the player profiles in the MongoDB
POST - ./database/playerProfile - creates a new profile with key-value-pairs in x-www-form-urlencoded with requried fields:
    first:Bonzie
    last:Colson
    birth:1996-01-12
    age:23
    height:6-6
    weight:224
    position:SF
    experience:0
    uniformNumber:50
    teamRankOverall:16
    gamesPlayed:8
    gamesStarted:2
    minutesPlayedPerGame:12.3
    overallGoalsMade:1.6
    overallGoalAttempts:4.9
    overallGoalPercentage:0.333
    averagePointsPerGame:30
    twoPointMade:1.0
    twoPointAttempts:2.3
    twoPointPercentage:.444
    threePointMade:0.6
    threePointAttempts:2.6
    threePointPercentage:0.238
    freePointMade:1.0
    freePointAttempts:1.1
    freePointPercentage:0.889
    reboundsOffense:1.0
    reboundsDefense:2.8
    totalReboundsPerGame:3.8
    assists:0.4
    steals:0.6
    blocks:0.1
    turnovers:0.4
    fouls:0.4
GET - ./database/playerProfile/byID/:player_id - gets profile with ID selected
PUT - ./database/playerProfile/byID/:player_id - updates profile with ID selected (only need to enter desired field(s) to update the profile)
DELETE - ./database/playerProfile/byID/:player_id - deletes profile with ID selected

Queries retrieved from HW2
GET - ./database/queryOne
GET - ./database/queryTwo
GET - ./database/queryThree
GET - ./database/queryFour
GET - ./database/queryFive
```
