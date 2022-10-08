# Metadata cheat sheet

## HTML `<meta>` tags 

Earlier in the course, you learned about meta tags and how you can leverage them to convey information to search engines to better categorize your pages. We recommend that you keep this cheat sheet handy when building your web applications. The structure of a meta tag is as follows.

__Name__

The name of the property can be anything you like, although browsers usually expect a value they understand and can take an action upon. An example would be `<meta name="author" content="name">` to state the author of the page. 

__Content__

The content field specifies the property's value. For example, you can use `<meta name="language" content="english">`, to specify the language of the webpage to search engines. 

__Charset__

The charset is a special field that lets you specify the character encoding used for the page so that the browser can display it properly. The most frequently used is utf-8, and you would add it to your HTML header as follows: `<meta charset="UTF-8">`

__HTTP-equiv__ 

This field stands for HTTP equivalent, and it’s used to simulate HTTP response headers. This is rare to see, and it’s recommended to use HTTP headers over HTML http-equiv meta tags. For example, the next tag would instruct the browser to refresh the page every 30 minutes: `<meta http-equiv="refresh" content="30">`

## Basic meta tags (meta tags For SEO) 

`<meta name="description"/>` provides a brief description of the web page 

`<meta name=”title”/>` specifies the title of the web page 

`<meta name="author" content="name">` specifies the author of the web page  

`<meta name="language" content="english">` specifies the language of the web page 

`<meta name="robots" content="index,follow" />` tells search engines how to crawl or index a certain page 

`<meta name="google"/>` tells Google not to show the sitelinks search box for your page when showing search results 

`<meta name="googlebot" content=”notranslate” />` tells Google you don’t want to provide an automatic translation for your page if the user uses a different language  

`<meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" />` specifies the last modified date and time on which you have made certain changes 

`<meta name="rating" content="safe for kids">` specifies the expected audience for your page 

`<meta name="copyright" content="Copyright 2022">` specifies a Copyright 

## `<meta http-equiv="..."/>` tags

`<meta http-equiv="content-type" content="text/html">` specifies the format of the document returned by the server 

`<meta http-equiv="default-style"/>` specifies the format of the styling document 

`<meta http-equiv="refresh"/>` specifies the duration of the page before it’s considered stale 

`<meta http-equiv=”Content-language”/>` specifies the language of the page 

`<meta http-equiv="Cache-Control" content="no-cache">` instructs the browser how to cache your page 

## Responsive design/mobile meta tags

`<meta name="format-detection" content="telephone=yes"/>` indicates that telephone numbers should appear as hypertext links that can be clicked to make a phone call 

`<meta name="HandheldFriendly" content="true"/>` specifies that the page can be properly visualized on mobile devices 

`<meta name="viewport" content="width=device-width, initial-scale=1.0"/>` specifies the area of the window in which web content can be seen