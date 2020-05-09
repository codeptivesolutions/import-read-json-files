# ImportReadJsonFiles

## Overview

This project basically demonstrates that **how we can import/read local json file in angular.** Well There are **atleast 3 ways to do this.**

## First Way

**TypeScript 2.9>=** versions allow us to set configurations in `tsconfig.json` file for importing json file like

```
{
  ...,
  "compilerOptions": {
    ...,
    "resolveJsonModule": true,
    "esModuleInterop": true
  }
}

```

Now you can import json file in your component like

```
import data from '../../assets/json/data.json';

```

## Second Way

Without extra typescript configurations, You can make http request to get your json file in your component/service like

```
this.httpClient.get('assets/json/data.json').subscribe((data) => {
    this.jsonDataResult = data;
    console.log('--- Second Way of jsonDataResult :: ', this.jsonDataResult);
});

```

## Third Way

Without extra typescript configurations, You can define it's **\*.d.ts** where your local json file stored. It's code looks like

```
declare module '*.json' {
  const value: any;
  export default value;
}

```

Now you can import json file in your component like

```
import * as data from '../../assets/json/data.json';
// OR Import it like
// import data from '../../assets/json/data.json';

```

## That's it!! :relaxed:
