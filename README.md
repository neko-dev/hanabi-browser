# Hanabi Browser

An Browser Utils for [hanabi code pretty](https://github.com/egoist/hanabi) 

# How To Use
  
 1. Import JQuery
 2. Import [hanabi.min.js](https://unpkg.com/hanabi@0.4.0/dist/hanabi.min.js) on CDN
 3. Download and Import `hanabi-browser.min.js` from this repo
 4. Use `HanabiBrowser.start('css-selector',showlinenumber)` to start hanabi code pretty.

Eg.  
```javascript
  HanabiBrowser.start('pre code',true)
```

# API

 **HanabiBrowser.start(selector,show_line_number)**   
Start Hanabi Code Pretty

 **HanabiBrowser.setLinenumber(show_line_number)**   
Show or Hide Linenumber

 **HanabiBrowser.toggleLinenumber()**   
Toggle Linenumber showing

 **HanabiBrowser.putColor(color)**   
args `color` can use an array or a string. Eg. `HanabiBrowser.putColor('#EE0000')`

 **HanabiBrowser.defaultColors()**   
Restore color setting to default.

 **HanabiBrowser.clearColors()**   
Empty color poll. You need `putColor` by your self.