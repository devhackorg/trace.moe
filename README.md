# @allan.pereira.dev/trace.moe

@allan.pereira.dev/trace.moe is an npm unofficial library that tracks anime scenes from a screenshot. It allows you to easily find the source of an anime scene by providing a screenshot of the scene.

## Features

Easy to use: Simply provide a screenshot of the anime scene you want to track and trace.moe will do the rest.
Accurate: trace.moe uses advanced algorithms to accurately identify the source of the anime scene.

## install

To install @allan.pereira.dev/trace.moe, simply run the following command:

```bash
npm install '@allan.pereira.dev/trace.moe'
```

## Usage

```javascript
import { getAnime } from '@allan.pereira.dev/trace.moee';

getAnime({ path: './example.jpg', anilistInfo: true }).then((res) =>
  console.log(res)
);
```

the anilistInfo parameter is optional and only receives a boolean value, with it you receive extra information that comes from the anilist

## Stack

**Production:**

- Node.js
- Axios
- Form-data

**Developement:**

- Typescript
- Jest
- Eslint
- Pretieer

## Autores

- [@allanpereira99](https://github.com/allanpereira99)

## Licença

[MIT](https://choosealicense.com/licenses/mit/)

## Feedback

If you have any feedback, please let us know via allan.pereira.dev@gmail.com
