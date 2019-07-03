render-as-nested-list
==================

Function for rendering an arbitrarily deep object as a hierarchy of `<ul>` and `<li>` elements that you can style with CSS to look however you like.

[Here's a demo.](https://jimkang.com/render-as-nested-list)

Installation
------------

    npm install render-as-nested-list

Usage
-----

    var RenderAsNestedList = require('render-as-nested-list');
    var exampleObject = {
      "tracks": [
        {
          "album": {
            "album_type": "album",
            "artists": [
            ],
            "available_markets": [
            ],
            "external_urls": {
            },
            "href": "https://api.spotify.com/v1/albums/1S7mumn7D4riEX2gVWYgPO",
            "id": "1S7mumn7D4riEX2gVWYgPO",
            "images": [
            ],
            "name": "Pinkfong Animal Songs",
            "release_date": "2017-07-27",
            "release_date_precision": "day",
            "total_tracks": 20,
            "type": "album",
            "uri": "spotify:album:1S7mumn7D4riEX2gVWYgPO"
          },
          "artists": [
            {
            }
          ],
          "available_markets": [
            "AD",
            "AE"
          ]
        }
      ]
    };
     
    var rootList = document.getElementById('root-list');

    var renderAsNestedList = RenderAsNestedList({ propertiesToIgnore: ['id', 'images'] });

    renderAsNestedList({
      targetListEl: rootList,
      name: 'root',
      thing: exampleObject
    });

Then, a hierarchy of `<ul>` and `<li>` elements representing the object will be rendered in the DOM. [Here's a demo.](https://jimkang.com/render-as-nested-list)

[An example of some CSS you could use to control the appearance of the hierarchy.](app.css)

License
-------

The MIT License (MIT)

Copyright (c) 2019 Jim Kang

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
