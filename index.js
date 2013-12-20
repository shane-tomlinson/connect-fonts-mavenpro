const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // Package info
  "package": {
    "name": "connect-fonts-mavenpro",
    "homepage": "https://github.com/shane-tomlinson/connect-fonts-mavenpro",
    "repourl": "https://github.com/shane-tomlinson/connect-fonts-mavenpro.git",
    "bugsurl": "https://github.com/shane-tomlinson/connect-fonts-mavenpro/issues"
  },
  
  // Package author info
  "author": {
    "name": "Shane Tomlinson",
    "emails": "shane@shanetomlinson.com,stomlinson@mozilla.com,set117@yahoo.com",
    "urls": "https://shanetomlinson.com",
    "githubs": "https://github.com/shane-tomlinson",
    "twitter": "@shane_tomlinson"
  },
  

  // Common font information
  "font_common": {
    "names": "mavenpro-black,mavenpro-bold,mavenpro-medium,mavenpro-regular",
    "family": "Maven Pro",
    "copyright": "Copyright (c) 2011 by Vissol Ltd. All rights reserved."
  },


  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": { 
  },

  // what font types are enabled and what are the extensions of
  // the font files.
  //
  // valid types are embedded-opentype, woff, truetype, svg
  "enabled-types": [ "eot", "woff", "ttf", "svg" ],

  // The fonts. The name of the font must be the same as the font
  // in the fonts directory.
  "fonts": {
      "mavenpro-black": {
        "fontFamily": "Maven Pro",
        "fontStyle": "normal",
        "fontWeight": "900",
        "local": [ "Maven Pro Black", "MavenProBlack" ]
      },
      "mavenpro-bold": {
        "fontFamily": "Maven Pro",
        "fontStyle": "normal",
        "fontWeight": "700",
        "local": [ "Maven Pro Bold", "MavenProBold" ]
      },
      "mavenpro-medium": {
        "fontFamily": "Maven Pro",
        "fontStyle": "normal",
        "fontWeight": "500",
        "local": [ "Maven Pro Medium", "MavenProMedium" ]
      },
      "mavenpro-regular": {
        "fontFamily": "Maven Pro",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Maven Pro Regular", "MavenProRegular" ]
      }
  }
};
