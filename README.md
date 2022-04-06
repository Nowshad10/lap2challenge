# Lap 2 Pair Programming Challenge

### Contributors
- [Nowshad Ahmed](https://github.com/Nowshad10)
- [Ikenna Agada](https://github.com/Ikenna98)

## Description
This paired programming task was to create a web application similar to [Telegraph](https://telegra.ph/). The requirements for the app were as follows:
- The app should have a browser client allowing users to write a post with a title, a pseudonym and a body.
- No login should be required to create a post or visit a post.
- When a user hits 'publish', the post should be stored in a database and the client redirected to a show path.
- The user should be able to access their post using that show path even after a server restart.
- Edit and delete functionality is not required.



## Installation & Usage

### Docker
- In the root directory, run `bash _scripts/startDev.sh` in the terminal. Alternatively, you could also just run `docker compose up`. This will install all the needed dependencies and make the application avaiable on port `8080`.

### Usage

- To use the application, you should run the commands above and go to `localhost:8080`.
- To stop and remove the docker containers, run `bash _scripts/teardown.sh` in the root directory and run the command `docker compose down --volumes --remove-orphans`.
- After creating a new post, you will be redirected to a page such as `http:localhost:8080/#${id}`, where the id is the id of the post you have just created. 
- To retrieve a specifc post, you can do so in the following format: `https:localhost:8080/#3` will display the post with an id of 3.




