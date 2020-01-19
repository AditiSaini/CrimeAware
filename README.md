##Video Link
https://youtu.be/FIxML7s8pFQ

## Inspiration
Ever been to a place abroad which you thought was pretty safe and had the unfortunate experience of being mugged or assaulted? When people travel overseas to places they have never been to before, they are totally unaware of the prevalent crime in the locality they are gonna live in, thus making them vulnerable victims. 
With our application, we want to do something great for our society by making people more aware about the safety concerns of places they have never visited earlier.
 
## What it does
The app tells the user about the crime rates and whether the crime in that particular area is "higher" than the average index of crime stats. It also lets the user know about the most recurring felony reported to the police, thus forewarning him/her about any precautions to take beforehand.

## How we built it
The layout of our application is pretty straightforward. The application consists of a good mix of React.js, Bootstrap, and FBI Crime Stats API. We extract information through the said API based on the response (name of the state), which is the crime rate for all the Police divisions in the given state. Using this information, we calculate an approximate average number of crimes committed yearly in the chosen state. The most common crime is also retrieved in a similar manner. For calculating the crime rate w.r.t. other states, we have an extensive comparison of crime rates for each state in the background. This is the gist of how we built our application.

## Challenges we ran into
Finding appropriate and clean data in order to provide us proper crime statistics turned out to be quite tedious. Also, we were extremely excited to learn something new as we firmly believe that Hackathons are also about the "process", i.e. the learning involved in building our hack. Keeping this in mind we decided to take up Flutter in order to build our application. Although we learned a lot, we were unable to align our learnings with our use case forcing us to change our development framework to React.js, and learning about it from scratch as well.

## Accomplishments that we're proud of
We are extremely proud of being able to help the society with our tech skills. We hope that we'll be able to help people stay safe and secure far from home a foreign country. It is really important to increase awareness among people in general about prevalent crimes in an area.

## What we learned
We learned to develop a web app majorly through React.js in very limited time and also got the opportunity to experiment with an upcoming cross-platform framework like Flutter.

## What's next for CrimeAware
In the next phase we plan on including support for more states and cities all across the world. We also plan on implementing this in the form of a mobile application and including functionalities such as location sharing ,SOS support and shortest "crime-safe" distance between two places.

Be Vigilant with CrimeAware!!!!





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
