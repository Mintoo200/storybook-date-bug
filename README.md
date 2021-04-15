Bug report available on [Github](https://github.com/storybookjs/storybook/issues/14618)

**Describe the bug**
I added a custom class extending Date to my project adding some helper functions but storybook considers every occurence where I use it as a simple Date and throws a `<helper function> is not a function`. This problem does not occur when I start the CRA app with the Calendar directly.

**To Reproduce**
1. clone [this repository on Github](https://github.com/Mintoo200/storybook-date-bug)
2. start the storybook with `$ yarn; yarn storybook`
3. navigate to `localhost:6006`
4. go to `Calendar>Default`

You can start the working CRA app with `$ yarn start`

**Expected behavior**
The calendar should be displayed with no error.

**System**
```
Environment Info:

  System:
    OS: macOS 11.2.3
    CPU: (8) x64 Intel(R) Core(TM) i5-8257U CPU @ 1.40GHz
  Binaries:
    Node: 12.18.3 - /usr/local/bin/node
    Yarn: 1.22.5 - /usr/local/bin/yarn
    npm: 6.14.6 - /usr/local/bin/npm
  Browsers:
    Chrome: 89.0.4389.128
    Safari: 14.0.3
  npmPackages:
    @storybook/addon-actions: ^6.2.8 => 6.2.8 
    @storybook/addon-essentials: ^6.2.8 => 6.2.8 
    @storybook/addon-links: ^6.2.8 => 6.2.8 
    @storybook/node-logger: ^6.2.8 => 6.2.8 
    @storybook/preset-create-react-app: ^3.1.7 => 3.1.7 
    @storybook/react: ^6.2.8 => 6.2.8 
```

**Additional context**

The problem still occurs when the storybook is built and served with `npx serve`. I also tried reinstalling all dependencies.

