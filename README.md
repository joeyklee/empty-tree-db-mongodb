# A4: Tree Mapping Application

## SETUP
1. Make sure you have a MongoDB Atlas account. Go through the [MongoDB Atlas setup guide](https://github.com/itp-dwd/2020-spring/blob/master/guides/database-services-guide.md#mongodb-atlas).
2. Make sure to add a `.env` file in the root of your project directory. In the `.env` file:
   ```
   MONGODB_URI='mongodb+srv://dwd-admin:<yourpassword>@dwd-projects-ksn8b.gcp.mongodb.net/empty-tree-db?retryWrites=true&w=majority'
   ```
   * where:
      * `<password>`: is the password you defined earlier
      * `<NameOfYourCollection>`: is the name of your collection. The default is set to `test`, so if you created a collection called `empty-tree-db`, then your URL would look like: 
        ```
        mongodb+srv://dwd-admin:<password>@dwd-projects-ksn8b.gcp.mongodb.net/empty-tree-db?retryWrites=true&w=majority
        ```
2. Ensure that you have all IP addresses whitelisted in MongoDB Atlas
3. Install the dependencies
   ```sh
   $ cd empty-tree-db-mongodb
   $ npm install
   ```

## Develop
1. Start the development server
   ```sh
   $ npm run dev
   ```

## RUN
1. Start the server
   ```sh
   $ npm run start
   ```

## Deploy:

* Deploy the project to [Glitch](https://glitch.com)
* Make sure to copy over the contents of your `.env` file

## Local Development

* You can work with this project without a mongodb atlas account. You'll need to download and install:
  * Homebrew
  * Mongodb via homebrew

## API Documentation

* See [API](API.md)

## Acknowledgements
* @Joeyklee, development
* MongoDB Atlas
* Express.js