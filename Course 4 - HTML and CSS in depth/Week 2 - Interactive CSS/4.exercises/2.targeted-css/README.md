# Targeted CSS

## Introduction

In this lab, you will practice using combination selectors to create a menu for the Little Lemon restaurant.

## Goal

- Create a menu that will render a menu for the Little Lemon restaurant with the help of the styling that you will add for the HTML page provided.

## Objectives

- Add styling to the CSS page with the help of different combinator selectors along with other CSS rules you have leared so far.

## Learner Instructions

__Step 1:__ Open the CSS file

__Step 2:__ Define a CSS class named `section`

__Step 3:__ Set the CSS `padding` property to `10px` in the `section` CSS class
```css
.section {
	padding: 10px;
}
```

__Step 4:__ Define a CSS class named `label`

__Step 5:__ Change the weight of the font to bold for the `label` class
```css
.label {  
	font-weight: bold;
}
```

__Step 6:__ Define a CSS class named `description`

__Step 7:__ For the description CSS class, change the styling of the font to italics
```css
.description {
    font-style: italic;
}
```

__Step 8:__ Additionally add a border on the top side of 2px that is solid and has a color code of '#495E57'
```css
border-top: 2px solid #495E57;
```

__Step 9:__ Define a CSS class named `item-name`

__Step 10:__ In the class `item-name`, change the margin to 25 pixels and font size to 12 pixels
```css
.item-name {
	margin: 25px;
	font-size: 12px;
}
```

__Step 11:__ Define a CSS rule for the `b` element

__Step 12:__ Float the contents of element `b` to the right
```css
b {
    float: right;
}
```

__Step 13:__ Add a margin to the top of -15px to the b element
```css
margin-top: -15px; /* Inside b */
```

__Step 14:__ Change the color of the b element to darkcyan
```css
color: darkcyan; /* Inside b */
```

__Step 15:__ Add a child combinator for h3 tags that follow the div tag and assign them rules as follows:

__Step 16:__ Change the font size to 20 px as well as the margin to 20px
```css
div > h3 {
    font-size: 20px;
    margin: 20px;
}
```

__Step 17:__ Change the alignment of text to center
```css
text-align: center;
```

__Step 18:__ Assign it a color code of '#495E57'
```css
color: #495E57;
```

__Step 19:__ Add an adjacent sibling combinator for items of class low that follow class label and change their color to brown.
```css
.label + .low {
    color: brown; 
}
```

__Step 20:__ Add a general sibling combinator for div tags that follow other div tags and change their color to RGB values of 90, 90, 90
```css
div ~ div {
    color: rgb(90, 90, 90);
}
```

__Step 21:__ Save the CSS file and open the HTML file in Live Preview. The results should resemble the screenshot below.

<img src="./Output-Targeted CSS.png" width=500>