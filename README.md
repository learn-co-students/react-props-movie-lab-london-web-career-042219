
This is a barebones React application used to showcase the nine greatest movies
of all time. Your job is to update it so that it passes props from parent to
children components correctly. In addition, you will implement default props so
that 'bad/missing data' is properly handled - preventing our user interface from
blowing up our visitors' computers
 **9**
`MovieCards` rendered by `MovieShowcase`:

```
└── MovieShowcase
    │
    ├── MovieCard
    │   ├── CardFront
    │   └── CardBack
    │
    └── MovieCard
        ├── CardFront
        └── CardBack
```

`MovieShowcase` is the component that will house all of the 'raw' data
associated with the movies we want to display. This data is located in
`src/data.js` and is already being imported.

`MovieCard` components (which showcase a single movie) receive their individual
movie information from `MovieShowcase` as four props: `title`, `IMDBRating`,
`genres`, and `poster`. Following, the props are passed again to either
`CardFront` or `CardBack`.

In our movie data set, we occasionally have missing data. This is where
`defaultProps` come in and really pull our buns out of the fire. We will be
handling all of our `defaultProp`'ing in `MovieCard` before they are passed down
the chain to the front and back components.


###### `CardBack`

3.  Finish writing the method `generateRatingElement`, which should do the following:

- if the IMDBRating prop is null, return an `<h4>` with the contents 'No Rating Found'
- otherwise, return `<img src={imgMapper[prop]} alt="" />` (using the correct prop)

#### Once Finished

`npm start` and make sure everything is functioning how you would like!

## Resources

- [React Default Prop Values](https://reactjs.org/docs/react-component.html#defaultprops)

<p class='util--hide'>View <a href='https://learn.co/lessons/react-props-movie-lab'>Props Lab</a> on Learn.co and start learning to code for free.</p>

[lists-and-keys]: https://reactjs.org/docs/lists-and-keys.html
