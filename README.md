## Graphql Component Test

To reproduce the issue first clone this repository `git clone git@github.com:jamesdbruner/graphql-component-test.git` then run `yarn;yarn develop`
and you can see our registered "Alpha" component that hits the swapi api and gets Luke's name. Now if you run `yarn build;yarn serve` you'll notice that our Alpha component doesn't render. 

Now... If you hard refresh it will render but on a subsequent reload it disappears again. That happens consistently, if you empty cache and hard reload it shows up and if you just refresh it's gone again.

### Versions
gatsby: `^2.26.1` 

gatsby-plugin-graphql-component: `^0.2.4`