# Lab: Improve your Bio page with Bootstrap

## Introduction
In this graded assessment, you will revise your biographical page to use Bootstrap.

## Goal
- Use Bootstrap to build your biographical page.

## Objectives
- Add a Bootstrap Grid to the page.
- Set up the grid so that the content will layout correctly on both mobile and desktop.
- Configure your photo to be responsive.
- Change the Meta profile link to use a Bootstrap button style.

## Learner Instructions
__Step 1:__ Open `index.html`

__Step 2:__ Add a `div` element to the `body` element.
```
<body>
    <div>
    </div>
</body>
```

__Step 3:__ Apply the Bootstrap `container` CSS class to the `div`.
```
<body>
    <div class="container">
    </div>
</body>
```

__Step 4:__ Add a `div` element to the `container` element.
```
<div class="container">
    <div>
    </div>
</div>
```


__Step 5:__ Apply the Bootstrap `row` CSS class to the `div`.
```
<div class="container">
    <div class="row">
    </div>
</div>
```

__Step 6:__ Add two `div` elements to the `row` element.
```
<div class="container">
    <div class="row">
        <div>
        </div>
        <div>
        </div>
    </div>
</div>
```

__Step 7:__ On the first div element apply the `id` attribute with the value `bio`.
```
<div class="container">
    <div class="row">
        <div id="bio">
        </div>
        <div>
        </div>
    </div>
</div>
```

__Step 8:__ Apply the `id` attribute on the second div element with the value `more`.
```
<div class="container">
    <div class="row">
        <div id="bio">
        </div>
        <div id="more">
        </div>
    </div>
</div>
```

__Step 9:__ Apply the correct CSS classes so that each div with be 12 columns wide on mobile and 6 columns wide on desktop.
```
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6">
        </div>
        <div id="more" class="col-12 col-lg-6">
        </div>
    </div>
</div>
```

__Step 10:__ Apply the `text-center` CSS class on the bio div element.
```
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
        </div>
        <div id="more" class="col-12 col-lg-6">
        </div>
    </div>
</div>
```

__Step 11:__ Add an `h1` heading containing your name as the text inside the bio div element.
```
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
        </div>
        <div id="more" class="col-12 col-lg-6">
        </div>
    </div>
</div>
```

__Step 12:__ Add an `img` element for `photo.jpg` below the `h1` element.
```
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg">
        </div>
        <div id="more" class="col-12 col-lg-6">
        </div>
    </div>
</div>
```

__Step 13:__ Apply the `img-fluid` CSS class to the img element.
```
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
        </div>
    </div>
</div>
```

__Step 14:__ Add an `h2` heading containing the text Favorite Music Artists inside the more div element.
```
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
        </div>
    </div>
</div>
```

__Step 15:__ Add an _unordered_ list of your favorite music artists below the h2 heading.
```
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
        </div>
    </div>
</div>
```

__Step 16:__ Add another `h2` heading containing the text Favorite Films below the favorite music artists list.
```
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
            <h2>Favorite Films</h2>
        </div>
    </div>
</div>
```

__Step 17:__ Add an _ordered_ list of your top 5 films after the Favorite Films heading.
```
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
            <h2>Favorite Films</h2>
            <ol>
                <li>Pulp Fiction</li>
                <li>The Godfather</li>
                <li>The Lord of the Rings</li>
                <li>Iron Man</li>
                <li>Inception</li>
            </ol>
        </div>
    </div>
</div>
```

__Step 18:__ Add an anchor tag after the _ordered_ list.
```
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
            <h2>Favorite Films</h2>
            <ol>
                <li>Pulp Fiction</li>
                <li>The Godfather</li>
                <li>The Lord of the Rings</li>
                <li>Iron Man</li>
                <li>Inception</li>
            </ol>
            <a></a>
        </div>
    </div>
</div>
```

__Step 19:__ Link to your Meta profile in the anchor tag.
```
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
            <h2>Favorite Films</h2>
            <ol>
                <li>Pulp Fiction</li>
                <li>The Godfather</li>
                <li>The Lord of the Rings</li>
                <li>Iron Man</li>
                <li>Inception</li>
            </ol>
            <a href="https://www.meta.com/user/12"></a>
        </div>
    </div>
</div>
```

__Step 20:__ Set the anchor text to display My Meta Profile.
```
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
            <h2>Favorite Films</h2>
            <ol>
                <li>Pulp Fiction</li>
                <li>The Godfather</li>
                <li>The Lord of the Rings</li>
                <li>Iron Man</li>
                <li>Inception</li>
            </ol>
            <a href="https://www.meta.com/user/123">My Meta Profile</a>
        </div>
    </div>
</div>
```

__Step 21:__ Apply the button Bootstrap component CSS class to the anchor tag.
```
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
            <h2>Favorite Films</h2>
            <ol>
                <li>Pulp Fiction</li>
                <li>The Godfather</li>
                <li>The Lord of the Rings</li>
                <li>Iron Man</li>
                <li>Inception</li>
            </ol>
            <a href="https://www.meta.com/user/123" class="btn">My Meta Profile</a>
        </div>
    </div>
</div>
```

__Step 22:__ Apply the primary modifier to the button component.
```
<div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Jane</h1>
            <img src="photo.jpg" class="img-fluid">
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Metallica</li>
                <li>Bob Marley</li>
                <li>Madonna</li>
                <li>The Beatles</li>
                <li>Pink Floyd</li>
            </ul>
            <h2>Favorite Films</h2>
            <ol>
                <li>Pulp Fiction</li>
                <li>The Godfather</li>
                <li>The Lord of the Rings</li>
                <li>Iron Man</li>
                <li>Inception</li>
            </ol>
            <a href="https://www.meta.com/user/123" class="btn btn-primary">My Meta Profile</a>
        </div>
    </div>
</div>
```

__Step 23:__ Save the file.

## Final Result

<img src="./result.png" width=500>