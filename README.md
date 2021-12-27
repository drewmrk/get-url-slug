# get-slug

Get the last part of a URL (slug)

## Why?

I have noticed that recently I have been needing to grab the slug of a URL and also noticed that the NPM repository did not have any (that I could find) packages that simply retrieved the slug of a URL. Tired of manually getting the slug everytime, I decided to create this package.

## Usage

*Assume the URL in every example/demonstration is `https://example.com/one/two/three`

```js
import getSlug from 'get-slug'

console.log(getSlug()) // `three`
```

You can also pass two parameters to the function, `pattern` and `range`.

`pattern` uses a string/character of your choice (by default it is `/`)
`range` is the index past the location of `pattern` to be used (by default it is `1`)

```js
import getSlug from 'get-slug'

console.log(getSlug('e/')) // `/two/three`
```

```js
import getSlug from 'get-slug'

console.log(getSlug('e/t', 3)) // `ow/three`
```
