# Different types of selectors

## Element Selectors

The element selector allows developers to select HTML elements based on their element type.

For example, if you use `p` as the selector, the rule will apply to all `p` elements on the webpage.

_HTML_

```html
<p>Once upon a time...</p>
<p>In a hidden land...</p>
```

_CSS_

```css
p { 
    color: blue; 
}​
```

## ID Selectors

The ID selector uses the id attribute of an HTML element. Since the id is unique within a webpage, it allows the developer to select a specific element for styling. ID selectors are prefixed with a # character.

_HTML_

```html
​<span id="latest">New!</span>
```

_CSS_

```css
#latest { 
    background-color: purple; 
}​​
```

## Class Selectors

Elements can also be selected based on the class attribute applied to them. The CSS rule has been applied to all elements with the specified class name. The class selector is prefixed with a `.` character.

In the following example, the CSS rule applies to both elements as they have the `navigation` CSS class applied to them.

_HTML_

```html
​<a class="navigation">Go Back</a>
​<p class="navigation">Go Forward</p>
```

_CSS_

```css
.navigation { 
    margin: 2px;
}​​
```

## Element with Class Selector

A more specific method for selecting HTML elements is by first selecting the HTML element, then selecting the CSS class or ID.

The example below selects all `p` elements that have the CSS class `introduction` applied to them.

_HTML_

```html
<p class="introduction"></a>
```

_CSS_

```css
p.introduction { 
    margin: 2px;
}​​
```

## Descendant Selectors

Descendant selectors are useful if you need to select HTML elements that are contained within another selector.

Let's explore an example.

You have the following HTML structure and CSS rule.

_HTML_

```html
<div id="blog">
    <h1>Latest News</h1>
    <div>
        <h1>Today's Weather</h1>
        <p>The weather will be sunny</p>
    </div>
    <p>Subscribe for more news</p>
</div>
<div>
    <h1>Archives</h1>
</div>
```

_CSS_

```css
#blog h1​ {
    color: blue;
}
```

The CSS rule will select all `h1` elements that are contained within the element with the ID `blog`. The CSS rule will not apply to the h1 element containing the text `Archives`.

The structure of a descendant selector is a CSS selector, followed by a single space character, followed by another CSS selector.

Multiple descendants can also be selected. For example, to select all `h1` elements that are descendants of div elements which are descendants of the `blog` element, the selector is specified as follows.

_CSS_

```css
#blog div h1​ {
    color: blue;
}
```

## Child Selectors

Child selectors are more specific than descendant selectors. They only select elements that are immediate descendants (children) of a selector (the parent).

For example, you have the following HTML structure:

_HTML_

```html
<div id="blog">
    <h1>Latest News</h1>
    <div>
        <h1>Today's Weather</h1>
        <p>The weather will be sunny</p>
    </div>
    <p>Subscribe for more news</p>
</div>
```

If you wanted to style the `h1` element containing the text `Latest News`, you can use the following child selector:

_CSS_

```css
#blog > h1​ {
    color: blue;
}
```

This will select the element with the ID `blog` (the parent), then it will select all `h1` elements that are contained directly in that element (the children). The structure of the child selector is a CSS selector followed by the child combinator symbol > followed by another CSS selector.

__Note__ that this will not go beyond a single depth level. Therefore, the CSS rule will __not__ be applied to the `h1` element containing the text `Today's Weather`.

## :hover Pseudo-Class

A special keyword called a pseudo-class allows developers to select elements based on their state. Don't worry too much about what that means right now. For now, let's look at how the hover pseudo-class allows you to style an element when the mouse cursor hovers over the element.

The simplest example of this is changing the color of a hyperlink when it is hovered over. To do this, you add the `:hover` pseudo-class to the end of the selector. In the following example, adding `:hover` to the `a` element will change the color of the hyperlink to orange when it is hovered over.

_CSS_

```css
a:hover {
    color: orange;
}
```

This pseudo-class is very useful for creating visual effects based on user interaction.

## Other Selectors

There are many other CSS selectors available to style your webpage.