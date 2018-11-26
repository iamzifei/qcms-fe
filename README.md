This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Please make sure you run the [backend service](https://github.com/iamzifei/qcms-be) first.

## Tech stack

- React
- Apollo for Graphql client
- Material-ui for the UI framewrok

## Test

Haven't put any tests due to the time limitation. In practice, at least Snapshot testing should be done to make sure DOM is not changed. e,g. `enzyme` could be used for shallow rendering.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
