# vue-iconly
Simply Beautiful Iconly Pack
## Install
```
npm i vue-iconly
```

## Usage
```
// in main vue js
import Iconly from "vue-iconly";

Vue.use(Iconly);
```
See all icons ui on figma community : https://www.figma.com/community/file/876509330914541878/Iconly-2---Essential-icons

### Base Example
```
<iconly name="activity" />
```
name icon is require

### Type Usage
```
<iconly name="activity" type="bold" />
<iconly name="activity" type="bulk" />
<iconly name="activity" type="light" />
<iconly name="activity" type="outline" />
<iconly name="activity" type="broken" />
<iconly name="activity" type="tone" />
```

### Size
```
<iconly name="setting" type="broken" size="2x" /> // em size
<iconly name="setting" type="broken" size="10" /> // px size
```
By default, icons will be sized based on the font size of the parent element.

You can set a custom size using the size attribute. For multiple based sizing, pass the desired multiple followed by an x.
