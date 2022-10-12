# Animation and effects cheat sheet

## Transform property

### Syntax

transform: transform function-values

### Example

```css
.sample-class {
    transform: rotate(60deg);
}
```

__Keyword-value type: none__

```css
.sample-class {
    transform: none;
}
```

__Function-value type: matrix()__

Variations: matrix(), matrix3d()

```css
.sample-class {
    transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
}
```

__Function-value type: rotate(deg)__

Variations: rotate(), rotate3d(), rotateX(), rotate(), rotateZ()

```css
.sample-class {
    transform: rotate3d(3,2,1, 100deg);
}
```

Note: In rotate3d(), the respective values represent x, y, z co-ordinate and degree of rotations

__Function-value type: translate(x,y)__

Variations: translate(), translate3d(), translateX(), translateY(), translateZ()

```css
.sample-class {
    transform: translate3d(10px, 20px, 30px);
}
```

Note: In translate3d(), the respective values represent translation along the x, y, z co-ordinates

__Function-value type: scale(factor)__

Variations: scale(), scale3d(), scaleX(), scaleY(), scaleZ()

```css
.sample-class {
    transform: scale3d(2, 1, 0.3);
}
```

Note: In scale3d(), the respective values represent scaling times along the x, y, z co-ordinates

__Function-value type: skew(deg, deg)__

Variations: skew(), skewX(), skewY()

```css
.sample-class {
    transform: skew(100deg);
}
```

__Global value types:__

```css
.sample-class {
    transform: inherit;
}
```

```css
.sample-class {
    transform: initial;
}
```

```css
.sample-class {
    transform: revert;
}
```

```css
.sample-class {
    transform: revert-layer;
}
```

```css
.sample-class {
    transform: unset;
}
```

## Multiple transform over the same element

### Syntax

Transform can be applied for rotate(), scale() and translate() that can be listed together. Each of these properties can have their own values and the actions will give a combined effect. 

### Example

```css
.sample-class {
    transform: rotate(45deg) scale(1.5) translate(45px);
}
```

Additional property under transform:transform-origin

Determines the anchor point for the centering of transform.

### Example

```css
.sample-class {
    transform-origin: 10px 10px;
}
```

```css
.sample-class {
    transform-origin: right bottom;
}
```

## T​ransition property

### Transition shorthand

Transition shorthand has four following sub-properties, each of which can also be individually defined. 

- transition-property
- transition-duration
- transition-timing-function
- transition-delay

You have to list the values without naming them individually. Values skipped will be assigned their default values. 

### Syntax

transition: property duration timing-function delay;

### Example

transition: margin-left2s ease-in-out 0.5s;

## Animations and @keyframes

__animation property__

### Syntax
animation: _name duration timing-function delay iteration-count direction fill-mode play-state_;

### Example

```css
.sample-class {
    animation: none 2 ease 0.5 4 normal none running;
}
```

The animation property is a shorthand for the sub-properties below:

```
animation-name
animation-duration
animation-timing-function
animation-delay
animation-iteration-count
animation-direction
animation-fill-mode
animation-play-state
```

The values not mentioned are given default values.

Animation-name property is used to tie-in the @keyframes rule.

## @keyframes

### Syntax

```css
@keyframes mymove {
    from { property: value }
    to { property: value }
}
```

### Example

```css
@keyframes animation-name {
    from { bottom: 0px; }
    to { bottom: 100px; }
}
```

Percentage denotes the timing of the animation. 

### Alternative syntax

```css
@keyframes animation-name {
    /* declare actions here */
}
```

### Example

```css
@keyframes animation-name {
    0%,100%{
        background-color: blue;
    }
    50% {
        background-color: green;
    }
}
```

## Multiple animations

Works the same as regular animation, multiple rules can be set.

```css
#some-class{
    animation: animation-a 2s linear infinite alternate, 
        animation-b 3s ease infinite alternate;
}
```