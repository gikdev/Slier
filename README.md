# Slier
A super simple library used to make sliders  
[Example](./example.html)

## Setup
To use this library you need to download the files `slier.css` and `slier.js` and add them to your html

## HTML
Just an element with `slier` class  
Then every slide will be a `div` element
And done!
```html
<section class='slier'>
  <div>
    <img src='1.jpg'>
  </div>
  <div>
    <img src='2.jpg'>
  </div>
  <div>
    <img src='3.jpg'>
  </div>
</section>
```
## JavaScript
### Way 1:
Call the `Slier` function and pass **the class of slider** to it.
```js
Slier('slier')
```
### Way 2:
Make a variable and then call the `Slier` function and pass **the class of slider** to it.
```js
const my_slider = Slier('slier')
```
### Bonus:
Try to log `my_slider` to console after declaring it.  
**Contributors Are Wellcome**
