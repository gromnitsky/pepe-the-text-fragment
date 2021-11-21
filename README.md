# Pepe the Text Fragment

A solution for all site owners, who don't like 'Copy link to
highlight' feature.

[Check](http://gromnitsky.users.sourceforge.net/js/examples/pepe-the-text-fragment/#:~:text=Pellentesque%20dapibus)

## What?

There's a spec called [Text Fragments][]. If *a user agent* supports
it, & a user provides a URL in the form of

[Text Fragments]: https://wicg.github.io/scroll-to-text-fragment/

    https://example.com/hello/#:~:text=world

then the user agent looks for the string 'world' on the page &
highlights it.

You, as site owner, you have no control over this. You cannot disable
such a feature, for example. If you try to look at `location.hash`,
you discover that even when the text fragment was provided, there's no
remnants of in `location.hash`.

## So?

As a joke, you can use a module form this repo to display an image of
Pepe the Frog when somebody has a nerve to link to your site with
*text fragments*.

The module is veri smol:

```
$ terser pepe-the-text-fragment.js --module -mc | gzip -c | wc -c
602
```

## Usage

~~~
import pepe from './pepe-the-text-fragment.js'
pepe()
~~~

The function displays a modal frog & returns an injected dom node,
hence you can bind an `onclick` event to it, for example. See
`index.html`.

## Loicense

MIT.
