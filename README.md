# API Documentation

#### Backend deployed on [Heroku](https://staging-sauti-labs-14.herokuapp.com/). <br>

## Getting started
To get the server running locally:

- Clone this repo, then, cd into the repo in Terminal and:
- **yarn install** to install all required dependencies.
- **yarn server** to start the local server.
- **yarn test** to start server using testing environment.
- **update .env** store environment variables

### Backend framework

- [REST API](https://restfulapi.net/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Knex](http://knexjs.org/): 
- [PostgreSQL](https://www.postgresql.org/)


## Endpoints

### User Routes (admin routes)
| Method | Endpoint     | Access Control | Description                                          |
| ------ | ------------ | -------------- | ---------------------------------------------------- |
| POST    | `/api/user/register` | super admin only         | register a new admin |
| POST    | `/api/user/login` |  admin        | log into the admin dashboard |

#### Chapter Routes
| Method | Endpoint                         | Access Control | Description                                                                                |
| ------ | -------------------------------- | -------------- | ------------------------------------------------------------------------------------------ |
| GET    | `/api/chapter`          | public         | Returns all Miracle Messages Chapters viewable on the map |
| GET    | `/api/chapter/:id`          | public         | Returns a single Miracle Messages Chapter by chapter id viewable on the map |
| GET    | `/api/chapter/:id/partners`          | public         | Returns all partners and sponsor organizations for a specific chapter id |
| POST    | `/api/chapter`          | admin         | Add a new volunteer chapter location to the Map and chapters database |
| POST    | `/api/chapter/:id/partners`          | admin         | Assign a new partner or sponsor organization to the specific chapter with the provided id|
| PUT    | `/api/chapter/:id`          | admin         | update the info for a specific chapter with the provided id|
| DELETE    | `/api/chapter/:id`          | admin         | delete a specific chapter with the provided id|
| POST    | `/api/chapter/:id/partners/:partnerid`          | admin         | remove a partner or sponsor organization with the provided partner id from the chapter with the provided chapter id |
#### Accessing border crossing frequency data
#### Accessing border crossing frequency data

| Method | Endpoint                                | Access Control | Description                                                                 |
| ------ | --------------------------------------- | -------------- | --------------------------------------------------------------------------- |
| GET    | `/users/all/crossingfreq/all`           | public         | Returns all Sauti Databank users that recorded a border crossing frequency. |
| GET    | `/users/all/crossingfreq/daily/count`   | public         | Returns the number of users who report crossing a border daily.             |
| GET    | `/users/all/crossingfreq/weekly/count`  | public         | Returns the number of users who report crossing a border weekly.            |
| GET    | `/users/all/crossingfreq/monthly/count` | public         | Returns the number of users who report crossing a border monthly.           |
| GET    | `/users/all/crossingfreq/never/count`   | public         | Returns the number of users who report never crossing a border.             |

#### Accessing education data

| Method | Endpoint                               | Access Control | Description                                                                               |
| ------ | -------------------------------------- | -------------- | ----------------------------------------------------------------------------------------- |
| GET    | `/users/all/all/education/all`         | public         | Returns all users who reported any education history.                                     |
| GET    | `/users/all/education/primary/count`   | public         | Returns a count of all users who reported primary as their highest level of education.    |
| GET    | `/users/all/education/secondary/count` | public         | Returns a count of all users who reported secondary as their highest level of education.  |
| GET    | `/users/all/education/uni/count`       | public         | Returns a count of all users who reported university as their highest level of education. |
| GET    | `/users/all/education/none/count`      | public         | Returns a count of all users who reported they had no education.                          |

#### Accessing language data

| Method | Endpoint                            | Access Control | Description                                                                            |
| ------ | ----------------------------------- | -------------- | -------------------------------------------------------------------------------------- |
| GET    | `/users/all/language/all`           | public         | Returns all Sauti Databank users that reported a language.                             |
| GET    | `/users/all/language/english/count` | public         | Returns the number of Sauti Databank users who reported English as their language.     |
| GET    | `/users/all/language/swahili/count` | public         | Returns the number of Sauti Databank users who reported Swahili as their language.     |
| GET    | `/users/all/language/kinya/count`   | public         | Returns the number of Sauti Databank users who reported Kinyarwanda as their language. |
| GET    | `users/all/language/luganda/count`  | public         | Returns the number of Sauti Databank users who reported Luganda as their language.     |
| GET    | `users//all/language/lukiga/count`  | public         | Returns the number of Sauti Databank users who reported Lukiga as their language. .    |

#### Accessing country of residence data

| Method | Endpoint                          | Access Control | Description                                                                                   |
| ------ | --------------------------------- | -------------- | --------------------------------------------------------------------------------------------- |
| GET    | `/users/all/country/all`          | public         | Returns all Sauti Databank users that reported a country of residence.                        |
| GET    | `users/all/country/kenya/count`   | public         | Returns the number of Sauti Databank users who reported Kenya as their country of residence.  |
| GET    | `/users/all/country/uganda/count` | public         | Returns the number of Sauti Databank users who reported Uganda as their country of residence. |
| GET    | `/users/all/country/rwanda/count` | public         | Returns the number of Sauti Databank users who reported Rwanda as their country of residence. |

#### Accessing age data

| Method | Endpoint                           | Access Control | Description                                                                         |
| ------ | ---------------------------------- | -------------- | ----------------------------------------------------------------------------------- |
| GET    | `/users/all/age/all`               | public         | Returns all Sauti Databank users that reported an age demographic.                  |
| GET    | `users/all/age/group-zero/count`   | public         | Returns the number of Sauti Databank users who reported an age between 10-20 years. |
| GET    | `/users/all/age/group-one/count`   | public         | Returns the number of Sauti Databank users who reported an age between 20-30 years. |
| GET    | `/users/all/age/group-two/count`   | public         | Returns the number of Sauti Databank users who reported an age between 30-40 years. |
| GET    | `/users/all/age/group-three/count` | public         | Returns the number of Sauti Databank users who reported an age between 40-50 years. |
| GET    | `/users/all/age/group-four/count`  | public         | Returns the number of Sauti Databank users who reported an age between 50-60 years. |
| GET    | `/users/all/age/group-five/count`  | public         | Returns the number of Sauti Databank users who reported an age between 60-70 years. |

#### Accessing primary income data

| Method | Endpoint                             | Access Control | Description                                                                                                        |
| ------ | ------------------------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------ |
| GET    | `/users/all/primary-income/all`      | public         | Returns all Sauti Databank users that reported an answer to the primary income question.                           |
| GET    | `users/all/primary-income/yes/count` | public         | Returns the number of Sauti Databank users who reported small border trade as a primary source of income.          |
| GET    | `/users/all/primary-income/no/count` | public         | Returns the number of Sauti Databank users who reported small border trade was not their primary source of income. |

#### Accessing produce data

| Method | Endpoint                      | Access Control | Description                                                                                           |
| ------ | ----------------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| GET    | `/users/all/produce/all`      | public         | Returns all Sauti Databank users that reported an answer to the produce question.                     |
| GET    | `users/all/produce/yes/count` | public         | Returns the number of Sauti Databank users who reported trading produce at the border.                |
| GET    | `/users/all/produce/no/count` | public         | Returns the number of Sauti Databank users who reported that they do not trade produce at the border. |

#### Accessing Procedures for Commodity Categories data

| Method | Endpoint                      | Access Control | Description                                                                                           |
| ------ | ----------------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| GET    | `/commodity-cat`      | public         | Returns the most requested procedures for commodity categories.   

#### Accessing Most Requested Document Information for Procedures data

| Method | Endpoint                      | Access Control | Description                                                                                           |
| ------ | ----------------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| GET    | `/info-pro`      | public         | Returns the most requested document information for procedures.  

#### Accessing Most Requested Agency Information for Procedures data

| Method | Endpoint                      | Access Control | Description                                                                                           |
| ------ | ----------------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| GET    | `/agency-info`      | public         | Returns the most requested agency information for procedures.  

#### Accessing Most Requested Procedures for Commodities data

| Method | Endpoint                      | Access Control | Description                                                                                           |
| ------ | ----------------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| GET    | `/procedure-com`      | public         | Returns the most requested procedures for commodities.

#### Accessing Requested Procedures for Destination (Imports to:) data

| Method | Endpoint                      | Access Control | Description                                                                                           |
| ------ | ----------------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| GET    | `/dest-info`      | public         | Returns the requested procedures for destination.

#### Accessing Final Destination Country data

| Method | Endpoint                      | Access Control | Description                                                                                           |
| ------ | ----------------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| GET    | `/dest-country`      | public         | Returns the final destination country.

#### Accessing Final Destination Markert data

| Method | Endpoint                      | Access Control | Description                                                                                           |
| ------ | ----------------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| GET    | `/dest-market`      | public         | Returns the final destination market.

#### Accessing Exchange Direction data

| Method | Endpoint                      | Access Control | Description                                                                                           |
| ------ | ----------------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| GET    | `/exchange-rate`      | public         | Returns the exchange direction.

#### Accessing Top Commodity Categories data

| Method | Endpoint                      | Access Control | Description                                                                                           |
| ------ | ----------------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| GET    | `/top-cat`      | public         | Returns the top commodity categories.

#### Accessing Top Commodities data

| Method | Endpoint                      | Access Control | Description                                                                                           |
| ------ | ----------------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| GET    | `/top-com`      | public         | Returns the top commodities.

#### Accessing Origin of Traders' Goods data

| Method | Endpoint                      | Access Control | Description                                                                                           |
| ------ | ----------------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| GET    | `/traders-goods`      | public         | Returns origin of traders' goods.


# Data Model

#### Platform sessions

```
{
  sess_id: UUID
  cell_num: varchar(25)
  created_date: datetime
  udate: timestamp
  data: STRING
  platform_id:  int(2)
  notes: varchar(400)
}
```

#### Users

```
{
  id: UUID
  cell_num: UUID foreign key in PLATFORM_SESSIONS table
  gender: STRING
  age: STRING
  education: STRING
  crossing_freq: STRING
  produce: STRING
  primary_income: STRING
  language: STRING
  country_of_residence: STRING
}
```

#### Information demand
```
{
  "id": INTEGER,
  "platform_sessions_id": INTEGER,
  "cell_num": INTEGER,
  "request_type_id": INTEGER,
  "request_value": STRING
}
```
### Data parsers:
- the file dataCleaner.js in the routes folder has the script that cleaned the data from platform_sessions table and poppulated the trader demographic info in the Users table (labs14)

- the file sessionsDataParser.js in the root back-end directory has the script that cleaned the data from platform_sessions table and poppulated the trader demographic info in the Users table (labs16)



## Actions

_Note: every time we say users below, we're referring to the traders who log on and use the Sauti Databan platform, not the users (often researchers) who view Sauti's data_.

### Education data actions

`getEducation()` -> Returns all users who reported any education completed.

`getEducationPrimary()` -> Returns all users who reported primary as their highest level of education.

`getEducationSecondary()` -> Returns all users who reported secondary as their highest level of education.

`getEducationUni()` -> Returns all users who reported University as their highest level of education.

`getEducationNone()` -> Returns all users who reported that they did not receive any formal education.

### Gender data actions

`getGenderAll()` -> Returns all users who reported any gender selection.

`getGenderMale()` -> Returns all users who reported a male gender identity.

`getGenderFemale()` -> Returns all users who reported a female gender identity.

### Border crossing frequency data actions

`getCrossingFreqAll()`-> Returns all users who reported any border crossing frequency.

`getCrossingFreqDaily()`-> Returns all users who reported crossing a border daily.

`getCrossingFreqWeekly()` -> Returns all users who reported crossing a border weekly.

`getCrossingFreqMonthly()` -> Returns all users who reported crossing a border monthly.

`getCrossingFreqNever()` -> Returns all users who reported never crossing a border.

### Language data actions

`getLanguageAll()` -> Returns all users who reported any language data.

`getLanguageEnglish()` -> Returns all users who reported English as their primary language.

`getLanguageSwahili()` -> Returns all users who reported Swahili as their primary language.

`getLanguageKinya()` -> Returns all users who reported Kinyarwanda as their primary language.

`getLanguageLug()` -> Returns all users who reported Luganda as their primary language.

`getLanguageLuk()` -> Returns all users who reported Lukiga as their primary language.

### Country of residence data actions

`getCountryAll()` -> Returns all users who reported a country of residence.

`getCountryKenya()` -> Returns all users who reported Kenya as their country of residence.

`getCountryUganda()` -> Returns all users who reported Uganda as their country of residence.

`getCountryRwanda()` -> Returns all users who reported Rwanda as their country of residence.

### Age data actions

`getAgeAll()` -> Returns all users who reported an age demographic.

`getAgeGroupZero()` -> Returns all users who reported their age demographic as 10-20 years.

`getAgeGroupOne()` -> Returns all users who reported their age demographic as 20-30 years.

`getAgeGroupTwo()` -> Returns all users who reported their age demographic as 30-40 years.

`getAgeGroupThree()` -> Returns all users who reported their age demographic as 40-50 years.

`getAgeGroupFour()` -> Returns all users who reported their age demographic as 50-60 years.

`getAgeGroupFive()` -> Returns all users who reported their age demographic as 60-70 years.

### Primary income data actions

`getPrimaryIncomeAll()` -> Returns all users who answered a question about trade and primary income.

`getPrimaryIncomeYes()` -> Returns all users who reported border trade as their primary source of income.

`getPrimaryIncomeNo()` -> Returns all users who reported that border trade is _not_ their primary source of income.

### Produce data actions

`getProduceAll()` -> Returns a list of all users who answered whether or not they trade produce at the border.

`getProduceYes()` -> Returns a list of all users who say that yes they do trade produce at the border.

`getProduceNo()` -> Returns a list of all users who say they do _not_ trade produce at the border.

### Commodity category actions
`getComCat()` -> Returns a list of all the commodity categories.

### Document information procedures action
`getInfoPro()` -> Returnas a list of all the documentation for procedures.

### Most requested agency actions
`getReqAge()` -> Returns a list of the most requested agencies.

### Procedure commodities actions
`getProCom()` -> Returns a list of procedure commodities.

### Prodecude destination actions
`getDestInfo()` -> Returns a list of destinations frequented.


### Final destination country actions
`getDestCountry()` -> Returns a list of the final destination countries.

### Final destination market actions
`getDestMarket()` -> Returns a list of the final destination markets.

### Exchange rate destination  actions
`getExRate()` -> Returns a list of the exchange rate countries.

### Top commodity categories
`getTopCat()` -> Returns a list of the top commodity categories.

###Top commodities
`getTopCom()` -> Returns a list of the top commodites.

### Origin of traders goods actions
`getTradersGoods()` -> Returns a list of the origin(country) of traded goods.

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:
- username: Reach out to Sauti for access. 
- password: Reach out to Sauti for access.

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](https://github.com/sauti-databank/front-end/blob/master/README.md) for details on the frontend of our project.




These are the Issues that we as a team gathered:
- better error handling
- less hard-coded data
- better data verification for locations
- TDD
