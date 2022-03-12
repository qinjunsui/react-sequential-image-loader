# react-sequential-image-loader
A component to animate sequential images

## Author Info

Name: Qinjun(Helen) Sui

Updated: 03/11/2022

## Components
props
| props | signature | required | default value | description |
| --- | --- | --- | --- | --- |
| images | array | yes | null | array contains images' srouces |
| interval | number | no | 50 | render frequency in milisecond |
| turn | boolean | no | true | true: two-way displaying / false: one-way displaying|


### Example
```javascript
import Animator from 'react-sequential-image-loader';
import image0 from '..';  //image location
import image1 from '..';  //image location
...
const imageSrcs = [image0, image1, ...];
```
```javascript
<Animator images={imageSrcs} interval={50} turn={true}>
```
