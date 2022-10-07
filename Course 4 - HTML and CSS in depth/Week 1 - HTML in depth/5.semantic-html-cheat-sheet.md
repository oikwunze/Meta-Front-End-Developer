# Semantic HTML cheat sheet

There are hundreds of semantic tags available to help describe the meaning of your HTML documents. Below is a cheat sheet with some of the most common ones you’ll use over this course and your development career.

## Sectioning tags

Use the following tags to organize your HTML document into structured sections. 

| Tag | Usage |
|-----|-------|
| __`<header>`__| The header of a content section or the webpage. The web page header often contains the website branding or logo. |
| __`<nav>`__ | The navigation links of a section or the web page. |
| __`<footer>`__ | The footer of a content section or the web page. On a web page, it often contains secondary links, the copyright notice, privacy policy and cookie policy links. |
| __`<main>`__ | Specifies the main content of a section or the web page. |
| __`<aside>`__ | A secondary set of content that is not required to understand the main content. |
| __`<article>`__ | An independent, self-contained block of content such as a blog post or product. |
| __`<section>`__ | A standalone section of the document, that is often used within the body and article elements. |
| __`<details>`__ | A collapsed section of content that can be expanded if the user wishes to view it. |
| __`<summary>`__ | Specifies the summary or caption of a `<details>` element. |
| __`<h1> <h2> <h3> <h4> <h5> <h6>`__ | Headings on the web page. `<h1>` indicates the most important heading whereas <h6> indicates the least important. |

## Content tags

| Tag | Usage |
|-----|-------|
| __`<blockquote>`__ | Used to describe a quotation. |
| __`<dd>`__ | Used to define a description for the preceding `<dt>` element. |
| __`<dl>`__ | Used to define a description list. |
| __`<dt>`__ | Used to describe terms inside a `<dl>` elements. |
| __`<figcaption>`__ | Defines a caption for a photo image. |
| __`<figure>`__ | Applies mark up to a photo image. |
| __`<hr>`__ | Adds a horizontal line to the parent element. |
| __`<li>`__ | Used to define an item within a list. |
| __`<menu>`__ | A semantic alternative to `<ul>` tag. |
| __`<ol>`__ | Defines an ordered list. |
| __`<p>`__ | Defines a paragraph. |
| __`<pre>`__ | Used to represent preformatted text. Typically rendered in the web browser using a monospace font. |
| __`<ul>`__ | Unordered list |

## Inline tags

| Tag | Usage |
|-----|-------|
| __`<a>`__ | An anchor link to another HTML document. |
| __`<abbr>`__ | Specifies that the containing text is an abbreviation or acronym. |
| __`<b>`__ | Bolds the containing text. Used to indicate importance, use `<strong>` instead. |
| __`<br>`__ | A line break. Moves the subsequent text to a new line. |
| __`<cite>`__ | Defines the title of creative work (for example a book, a poem, a song, a movie, a painting, or a sculpture). The text in the `<cite>` element is usually rendered in italics. |
| __`<code>`__ | Indicates that the containing text is a block of computer code. |
| __`<data>`__ | Indicates machine-readable data. |
| __`<em>`__ | Emphasizes the containing text. |
| __`<i>`__ | The containing text is displayed in italics. Used to indicate idiomatic text or technical terms. |
| __`<mark>`__ | The containing text should be marked or highlighted. |
| __`<q>`__ | The containing text is a short quotation. |
| __`<s>`__ | Displays the containing text with a strikethrough or line through it. |
| __`<samp>`__ | The containing text represents a sample. |
| __`<small>`__ | Used to represent small text, such as copyright and legal text. |
| __`<span>`__ | A generic element for grouping content for CSS styling. |
| __`<strong>`__ | Displays the containing text in bold. Used to indicate importance. |
| __`<sub>`__ | The containing text is subscript text, displayed with a lowered baseline. |
| __`<sup>`__ | The containing text is superscript text, displayed with a raised baseline. |
| __`<time>`__ | A semantic tag used for displaying both dates and times. |
| __`<u>`__ | Displays the containing text with a solid underline. |
| __`<var>`__ | The containing text is a variable in a mathematical expression. |

## Embedded content and media tags

| Tag | Usage |
|-----|-------|
| __`<audio>`__ | Used to embed audio in web pages. |
| __`<canvas>`__ | Used to render 2D and 3D graphics on web pages. |
| __`<embed>`__ | Used as a containing element for external content provided by an external application such as a media player or plug-in application. |
| __`<iframe>`__ | Used to embed a nested web page. You will learn more about iframes in a later lesson. |
| __`<img>`__ | Embeds an image on the web page. |
| __`<object>`__ | Similar to `<embed>` but the content is provided by a web browser plug-in. |
| __`<picture>`__ | An element which contains one `<img>` element and one or more `<source>` elements to offer alternative images for different displays/devices. |
| __`<video>`__ | Embeds a video on the web page. |
| __`<source>`__ | Specifies media resources for `<picture>`, `<audio>` and `<video>` elements. |
| __`<svg>`__ | Used to define Scalable Vector Graphics within the web page. |

## Table tags

| Tag | Usage |
|-----|-------|
| __`<table>`__ | Defines a table element to display table data within the web page. |
| __`<thead>`__ | Represents the header content of the table. Typically contains one `<tr>` element. |
| __`<tbody>`__ | Represents the main content of the table. Contains one or more `<tr>` elements. |
| __`<tfoot>`__ | Represents the footer content of the table. Typically contains one `<tr>` element. |
| __`<tr>`__ | Represents a row in the table. Contains one or more `<td>` elements when used within `<tbody>` or `<tfoot>`. When used within `<thead>`, contains one or more `<th>` elements. |
| __`<td>`__ | Represents a cell in the table. Contains the text content of the cell. |
| __`<th>`__ | Defines a header cell of a table. Contains the text content of the header. |
| __`<caption>`__ | Defines the caption of the table element. |
| __`<colgroup>`__ | Defines a semantic group of one or more columns in a table for formatting. |
| __`<col>`__ | Defines a semantic column in a table. |