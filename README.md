angular-video
=============

A directive that takes in a vimeo or a youtube url and converts it into an embedded friendly url and the displays it.

###Key Features
* 

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

### License
The anguvideo project is covered by the [MIT License](http://opensource.org/licenses/MIT "MIT License").

The MIT License (MIT)

Copyright (c) 2014 Mariandi Stylianou, and contributors to the anguvideo project.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

