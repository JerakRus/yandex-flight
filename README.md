Проэкт: "Электронное табло аэропорта Шереметьево".

Позволяет смотреть расписание рейсов, прибывающих и отправляющихся сегодня. Получить дополнительную информацию о рейсе. 
Так же осуществлен поиск по номеру рейса, или по названию города прибытия/отправления в любом регистре.
Все данные берутся с публичного API Яндекс.Расписания.

В проекте присутствует дочерний проект serverProxy с собственным package.json.
На данный момент он развернут на стороннем хостинге, что позволит запустить "табло" на любой машине,
не заморачиваясь об изменении адресов API.

Так же тестовая(development) версия проэкта, для ознакомления, развернута на хостинге.
[Электронное табло Шереметьево](http://195.133.146.22:3002/).

Технологии используемые в проекте: 
React, Redux,
React-Router,
Axios, async/await,
Node.js, Express.js
Semantic-ui-react.

Мысли по дальнейшему улучшению и развитию проекта(на что не хватило времени):
Расширить функционал, добавить возмжность выбора даты предоставляемого расписания.
Расширить серверное API для увеличения возможностей(например запроса информации о других аэропортах).
Внедрить технологию reselect для оптимизации вычисления данных в store.
Создать единый Router.js, где будут собранны все маршруты проекта.

Далее пойдет стандартное описание React App, где указанны команды и их назначение.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
