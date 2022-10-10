# Grids and flexbox cheat sheet

Note: `|` stands for alternatives or OR.

## Grid

The syntax for creating a grid:
```css
selector{
    display: grid| inline-grid
}
```

Grid shorthand consists of the following properties with default values:

```css
grid:
```

```css
grid-template-rows: none
```

```css
grid-template-columns: none
```

```css
grid-template-areas: none
```

```css
grid-auto-rows: auto
```

```css
grid-auto-columns: auto
```

```css
grid-auto-flow: row
```

```css
grid-column-gap: 0
```

```css
grid-row-gap: 0
```

```css
column-gap: normal
```

```css
row-gap: normal
```

## Grid properties for container

```css
grid-template-columns: <measurement units> | % <units> |repeat()
```

```css
grid-template-rows: <measurement units> | % <units> |repeat()
```

```css
grid-auto-columns: <measurement unit (fixed value for all columns)>
```

```css
grid-auto-rows: <measurement unit (fixed value for all rows)>
```

```css
grid-template: 
    "header header" auto
    "main right" 75vh
    "footer footer" 20rem
```

```css
grid-template-areas: 
    "header header"
    "main right"
    "footer footer"
```

## Gap

```css
grid-gap: <measurement units>
```

```css
grid-column-gap: <measurement units>
```

```css
grid-row-gap: m-<unit>-1  m-<unit>-2
```

## Alignment

```css
justify-items: start | center | end | stretch
```

```css
align-items: start | center | end | stretch
```

```css
place-items: start | stretch /* shorthand for two properties above */
```

## Justification

```css
justify-content: start | center | end | stretch | space-between | space-evenly | space-around
```

```css
align-content: start | center | end | stretch | space-between | space-evenly | space-around
```

```css
place-content: center | start
```

## Positioning

```css
grid-auto-flow: row | column | dense
```

```css
grid-auto-columns: <measurement units>
```

```css
grid-auto-rows: <measurement units>
```

## Grid properties for items (child)

```css
grid-column: column position /* E.g. 1/2  */
```

```css
grid-column-start: column start position
```

```css
grid-column-end: column end position
```

---------

```css
grid-row:  row position /* E.g. 1/2  */
```

```css
grid-row-start: row start position
```

```css
grid-row-end: row end position
```

---------

```css
grid-area: “some name” |  /*E.g.  2/1/3/2 */ /* Shorthand for row-column properties above. */
```

## Justification and alignment

```css
justify-self: start | center | end | stretch
```

```css
align-self: start | center | end | stretch
```

```css
place-self: start | stretch /* shorthand for two properties above */
```

## Flexbox

The syntax for creating a flexbox:

```css
selector{
    display: flex | inline-flex
}
```

## Properties for flexbox container

```css
flex-direction: row | row-reverse | column | column-reverse
```

```css
flex-wrap: wrap | nowrap
```

```css
align-items: flex-start | flex-end | center | stretch
```

```css
justify-content: flex-start | flex-end | center | space-between | space-evenly | space-around
```

## Properties for flexbox items (child)

__Shorthand:__

```css
flex:
```

```css
flex-grow: factor of flex’s main size    /* E.g. 1 */
```

```css
flex-shrink: factor of flex’s main size    /* E.g. 0 */
```

```css
flex-basis: auto | factor of main’s size | measurement unit
```

---------

```css
order:position in flex /* Set ascending by default */
```

---------

```css
align-self:  start | center | end | stretch
```