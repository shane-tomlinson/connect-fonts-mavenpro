# connect-fonts-mavenpro

Maven Pro fontpack for [connect-fonts](https://github.com/shane-tomlinson/connect-fonts).

## Usage

1. Include [connect-fonts](https://github.com/shane-tomlinson/connect-fonts) in a node module.
```js
const font_middleware = require("connect-fonts");
```

2. Include the font packs that you want to serve.
```js
const font_pack  = require("connect-fonts-mavenpro");
```

3. Add a middleware by calling the `setup` function.
```js
    app.use(font_middleware.setup({
      fonts: [ font_pack ],
      allow_origin: "https://exampledomain.com"
    }));
```

4. Add a link tag to include the font CSS.
```html
<link href="/mavenpro-black/fonts.css" type="text/css" rel="stylesheet"/ >
```

Multiple fonts from the family can be included by using a comma separated list of fonts:
```html
<link href="/mavenpro-black,mavenpro-bold,mavenpro-medium,mavenpro-regular/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available fonts:
* mavenpro-black
* mavenpro-bold
* mavenpro-medium
* mavenpro-regular

Locale-optimised font sets can be served by specifying the locale in the fonts.css URL.
```html
<link href="/latin/mavenpro-black/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available subsets:
* latin

5. Set your CSS up to use the new font by using the "Maven Pro" font-family.
```
    body {
      font-family: 'Maven Pro', 'sans-serif', 'serif';
    }
```

## Font Info
Maven Pro

* Copyright: Copyright (c) 2011 by Vissol Ltd. All rights reserved.

## Development Info
* Homepage: https://github.com/shane-tomlinson/connect-fonts-mavenpro
* Repo: https://github.com/shane-tomlinson/connect-fonts-mavenpro.git
* Bugs: https://github.com/shane-tomlinson/connect-fonts-mavenpro/issues

## Author
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* https://github.com/shane-tomlinson
* @shane_tomlinson


## License

Software: Licenced under version 2.0 of the MPL

  https://www.mozilla.org/MPL/

Fonts: Licensed under version 1.1 of the SIL Open Font License

  http://scripts.sil.org/OFL

