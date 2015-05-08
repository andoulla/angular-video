angular-video
=============

A directive that takes in a vimeo or a youtube url and converts it into an embedded friendly url and the displays it.

###Contributing
angular-video is a free and open source library, and we appreciate any help you're willing to give.

### What it does
* Converts any url into an embedded friendly url (according to vimeo's and youtube's preference)
* Gets the trusted resource url using angular's trustAsResourceUrl() functionality

### Available url formats
* http://www.youtube.com/watch?v=[xyzxyz]
* http://youtu.be/[xyzxyz]
* http://www.youtube.com/embed/[xyzxyz]
* http://vimeo.com/[xyzxyz]

### Getting Started
Download the code, and include the anguvideo.js file in your page. Then add the angvideo module to your Angular App file, e.g.
```html
var app = angular.module('app', ["anguvideo"]);
```

### Usage

```html
<anguvideo ng-model="modelContainingURL" width="100%" height="200"></anguvideo>
```

```html
<div anguvideo ng-model="modelContainingURL" width="250" height="250"></div>
```
### Description of attributes
| Attribute        | Description           | Required | Example  |
| :------------- |:-------------| :-----:| :-----|
| ngModel | An angular model containing the URL | Yes | $scope.URL |
| width | The desired width of the video | No | 50% or 500px |
| height | The desired height of the video | No | 400 |
| hideControls | Set to hide YouTube title and player controls | No | true | 

### License
The anguvideo project is covered by the [MIT License](http://opensource.org/licenses/MIT "MIT License").

The MIT License (MIT)

Copyright (c) 2014 Mariandi Stylianou, and contributors to the angular-video project.

