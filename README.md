# Express.js API Server

This is a simple MVC-Based Express.js API Server that connects to a MySQL database.

### Get Started

1) Install Node JS on your development machine
1) Make sure NPM is also installed
1) Open a terminal/console/command prompt window in your project directory

### Setup the Database

1) Make sure you have a hosted MySQL Database available for this step
    * A free database can be started on [HelioHost](https://www.heliohost.org/#) for example
1) Created a `test` Table (will be used by the test route later)
1) Make sure that the table has 5 rows: 
    * `id` *(Auto Increment Integer)*
    * `name` *(String)*
    * `email` *(String)*
    * `createdAt` *(DateTime)*
    * `updatedAt` *(DateTime)*
1) The `createdAt` and `updatedAt` fields can be set to have a default of CURRENT_DATE.
1) Add a few entries for testing purposes

### Setup the Server

1) Navigate to the `models` sub-directory inside of the `database` directory
1) Edit the `TestModel.js` file to match the table created in the last section
    * See the [sequelize documentation](https://sequelize.readthedocs.io/en/2.0/docs/models-definition/) for more information about this process
1) Open the `.env` file located in the root of the project
1) Change the `DATABASE_HOST` variable to your Database Host
1) Change the `DATABASE_NAME` variable to your Database Name
1) Change the `DATABASE_USER` variable to your Database Username
1) Change the `DATABASE_PASS` variable to your Database Password
1) Add all of the variables mentioned above to your hosted servers's environment variables

**IMPORTANT NOTE**: Before committing your changes to your repository, add a `.env` line to the `.gitignore file` 

### Start the Server

1) Install the project dependencies by running:
    * `npm install`
1) You can now start the server by running 
    * `npm run dev` *(To start in development mode)*
    * `npm run start` *(To start in production mode)*
1) To access the server, go in your browser and visit:
    * `localhost:3000`
1) You should see the contents of `index.html` displayed
1) If you navigate to * `localhost:3000/test` you should see the test entries added earlier
