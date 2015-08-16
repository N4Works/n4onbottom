# n4OnBottom
[![Build Status](https://secure.travis-ci.org/N4Works/n4onbottom.png?branch=master)](https://travis-ci.org/N4Works/n4onbottom)
[![Coverage Status](https://coveralls.io/repos/N4Works/n4onbottom/badge.svg?branch=master)](https://coveralls.io/r/N4Works/n4onbottom/?branch=master)

## about

  A simple module to call a callback when the scroll reach window bottom or an element bottom.

## how to install

```
bower install n4-onBottom-directive --save
```

## how to use

```
<ul n4-on-bottom="onBottom()" on-window-bottom="<true|false>">
  ...
</ul>
```

Remember to inject the dependency in your module.

```
angular.module('yourModule', ['n4OnBottom']);
```

> n4-on-bottom
  Event called when page or container reach the bottom.
  
> on-window-bottom
  When used, call the event when window reach the bottom.

##LICENSE

MIT
