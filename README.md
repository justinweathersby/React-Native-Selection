# React-Native-Selection 
`Edit name`

Select option in React Native

# Work it !

![Demo](https://s13.postimg.org/u7jvcr59z/Untitled.jpg)

## Install `https://www.npmjs.com/package/react-native-selection`

1. Run `npm install react-native-selection --save`
2. Run `npm install react-native-vector-icons --save`
3. Run `react-native link react-native-vector-icons` `https://github.com/oblador/react-native-vector-icons`

## Usage

```javascript
'use strict';

var React = require('react-native');
var Selection = require('react-native-selection');

export default class App extends React.Component {

  returnDataOnSelection(e){
    alert('Value : ' + e.value + ' Name : ' + e.name);
  }
  
  render() {
    const options = [
      {
        name: 'Thailand',
        value: 1,
        icon: 'facebook',
      },
      {
        name: 'China',
        value: 2,
        icon: '',
      },
      {
        name: 'Japan',
        value: 3,
        icon: '',
      },
    ];
    return (
      <Selection 
        title="Show you title on selection" 
        options={options} 
        onSelection={(e)=>this.returnDataOnSelection.bind(this, e)}
        style={{
          body: null,
          option: null,
        }}
        iconSize={20}
        iconColor="#eee"
      />
    );
  }
}
```
## Props

Component accepts several self-descriptive properties:

- **`onSelection`** _(Function)_ - Return event ( value , name ).
- **`options`** _(array)_ - add you option for select.
- **`title`** _(String)_ - text for default value.
- **`mode`** _(String)_ - (None Future).
- **`iconSize`** _(Number)_ - icon size no default.
- **`iconColor`** _(String)_ - icon color no default.
- **`style`** _(array)_ - customize you style add ( body: null , option: null )

## Style

```
  body: {
      width: ScreenWidth - 80,
      backgroundColor: '#ffffff',
      maxHeight: ScreenHeight - 300,
      borderRadius: 5,
      overflow: 'hidden',
  },
  option: {
      width: ScreenWidth - 80,
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
      flexDirection: 'row',
  }
```
