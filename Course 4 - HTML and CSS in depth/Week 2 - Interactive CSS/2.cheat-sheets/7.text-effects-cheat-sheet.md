# Text effects cheat sheet

The effects developers use on text items on a web page are chosen mainly because of their styling and layout style. Interesting effects can be created by combining these with other CSS properties. 

The visual representation of text content can be changed by four main properties: `text-transform`, `font-style`, `font-weight` and `text-decoration`.

| Property | Values | Description |
|----------|--------|-------------|
| `text-transform` | `none`, `uppercase`, `lowercase`, `capitalize`, `full-width` | Modify text properties |
| `font-style` | `normal`, `italic`, `oblique` | Font styling options such as italics |
| `font-weight` | `normal`, `weight`, `lighter`, `bolder`, `100`-`900` | Other font styling options like change of emphasis such as making text bold |
| `text-decoration` | `none`, `underline`, `overline`, `line-through` | Shorthand for auxiliary elements added to text using other properties such as `text-decoration-line` |

The additional properties that help configure styling effects are below.

| Text-align | For horizontal alignment of text |
|------------|----------------------------------|
| `text-align-last` | Alignment for the last line when text set to justify |
| `text-combine-upright` | Multiple characters into the space of a single character placed upright like in Mandarin |
| `text-decoration-color` | Color configuration of the text-decoration |
| `text-decoration-line` | Line type in text-decoration such as underline, overline and so on |
| `text-decoration-style` | Styles added to lines under text such as wavy, dotted and so on |
| `text-decoration-thickness` | Thickness of the decoration line |
| `text-emphasis` | Shorthand for other properties such as color and style |
| `text-indent` | The indentation of the first line |
| `text-justify` | Specifies the justification method used when text-align is `"justify"` |
| `text-orientation` | Orientation of text in a line such as sideways, upright and so on |
| `text-shadow` | Adds shadow to text |
| `text-underline-position` | Declare position of underline set using the text-decoration property |

Other than these, there are some more properties that help modify the alignment and define the scope of text with their containers. 

| Property | Values | Description |
|----------|--------|-------------|
| `text-overflow` | `clip`, `ellipsis` | Determines overflow behavior of text with the container |
| `word-wrap` | `normal`, `anywhere`, `break-word` | Applies to `inline` elements, alias for `overflow-wrap` |
| `word-break` | `normal`, `break-all`, `keep-all`, `break-word` | Used for long words to decide if words should break or overflow |
| `writing-mode` | `horizontal-tb`, `vertical-lr`, `vertical-rl` | Can set the text direction vertical or horizontal |

The properties mentioned are ones that can be used for giving effects to text. 