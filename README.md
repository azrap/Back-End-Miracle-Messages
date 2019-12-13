
Miracle Messages is a nonprofit reunion service to help our neighbors experiencing homelessness reunite with their loved ones in a positive and supportive way.

Mission: "I didn't realize I was homeless until I lost my friends and family"

We believe everyone is somebody's someone, and no one should be defined by what they lack. Miracle Messages Map connects volunteers, making it easy to join together to reunite more homeless people with their families.

This repo has been forked from the Lambda-School Miracle Messages labs project back-end repo. 

[Project Frontend Repo](https://github.com/miracle-messages-after-labs14/Front-End-Miracle-Messages)
[Project live-site](https://miracle-messages-after-labs14.netlify.com/)

# API Documentation

#### Backend deployed on [Heroku](https://miracle-messages-staging2.herokuapp.com/). <br>



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

#### Partner Routes
| Method | Endpoint                         | Access Control | Description                                                                                |
| ------ | -------------------------------- | -------------- | ------------------------------------------------------------------------------------------ |
| GET    | `/api/partner`          | admin         | Returns all Miracle Messages partner and sponsor organizations |

| DELETE    | `/api/partner/:id`          | admin         | delete a partner with provided id. This also removes the partner from any chapters it was connected to |
| POST    | `/api/partner`          | admin         | Add a new partner or sponsor organization to the database |
| PUT    | `/api/partner/:id`          | admin         | update a partner or sponsor with provided id |




# Data Model

#### Chapters  

```
{
        id: INT ,
        city: STRING ,
        state: STRING (64 CHAR),
        numvolunteers: INT,
        longitude: INT,
        latitude: INT,
        title: STRING (128 CHAR),
        numreunions: INT,
        msg_recorded: INT,
        msg_delivered: INT,
        chapter_img_url: STRING (512 CHAR),
        reunion_img_url: STRING (512 CHAR),
        established_date: STRING,
        description: STRING (2048 CHAR),
        story: STRING (2048 CHAR),
        email: STRING (128 CHAR)
}
```

#### Partners 

```
{
        id: integer
        category: string, [either "chapter" or "sponsor"]
        "name": string,
        "site_url": string, 
        "icon_url": string
    }
```

#### Chapters-Partners

This table stores the relationship when a partner organization gets assigned to a specific chapter
```
{
    id: INT,
    chaptersid: FOREIGN KEY (chapters.id),
    partnersid: FOREIGN KEY (partners.id)


}
```






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

See [Frontend Documentation](https://github.com/miracle-messages-after-labs14/Front-End-Miracle-Messages) for details on the frontend of our project.




These are the Issues that we as a team gathered:
- better error handling
- less hard-coded data
- better data verification for locations
- TDD
