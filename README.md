# Eco landing React App

![https://img.shields.io/badge/-Github-black?logo=github&logoColor=white&style=plastic](https://img.shields.io/badge/-Github-black?logo=github&logoColor=white&style=plastic) ![https://img.shields.io/badge/-JavaScript-FFFF00?logo=javascript&logoColor=black&style=plastic](https://img.shields.io/badge/-JavaScript-FFFF00?logo=javascript&logoColor=black&style=plastic) ![https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square) ![https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=plastic](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=plastic) ![https://img.shields.io/badge/-Node.js-228B22?logo=nodedotjs&logoColor=white&style=plastic](https://img.shields.io/badge/-Node.js-228B22?logo=nodedotjs&logoColor=white&style=plastic) ![https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white) ![https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white](https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white) ![https://img.shields.io/badge/-Redux-764ABC?style=flat&logo=redux&logoColor=white](https://img.shields.io/badge/-Redux-764ABC?style=flat&logo=redux&logoColor=white)

This is pet project created with React, Redux plus Nest.js/Heroku backend and PostgreSQL database.

## Main page

After opening main page, you can see header with logo and login/signup buttons or username/signout button.

![Starting screen](./src/assets/readme/main_page.jpg)

### Open deals

The biggest logic is inside Open deals section. It gets data from heroku backend database, if there's no data or it is loading, user'll see skeleton cards.

![Open deals](./src/assets/readme/open_deals.jpg)

### Deal page

User can click on any deal in grid and navigate to Deal page, which's fetching data from backend too.

![Deal page](./src/assets/readme/one_deal.jpg)

### Sign up

**Note: All data after submitting and accepting on backend, will be stored in Redux**

User can register on Sign up page and after successful submitting of the form, will be redirected to login page.

![Deal page](./src/assets/readme/sign_up.jpg)

Using email and password, we can login to the app. After this we navigate to main page and can see our name and sign out button in header.

![Deal page](./src/assets/readme/login.jpg)

After adding videopresentation and screenshots to this file, heroku servers will be deleted, so you can't reach app via netlify.

