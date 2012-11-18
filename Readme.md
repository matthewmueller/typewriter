
# typewriter

  animated typing

## Example

```js
typewriter('#typewriter', 'Hello world!').start();
```

[animated](http://f.cl.ly/items/3z3e433T2D3r2m3H0A36/typewriter.gif)

## Installation

    $ component install matthewmueller/typewriter

## Events

  - `end` : emitted when `typewriter` finishes
  - `start` : emitted when `typewriter` starts typing
  - `stop` : emitted when we manually stop `typewriter`
  - `restart` : emitted when we manually restart `typewriter`

## API

### Typewriter()

  Initialize `Typewriter`

### Typewriter.start()

  Start the typewriter

```js
typewriter.start()
```

### Typewriter.stop()

  Stop the typewriter

```js
typewriter.stop()
```

### Typewriter.restart()

  Restart the typewriter. Clears the input

```js
typewriter.restart()
```

### Typewriter.clear()

  Clear the typewriter input

```js
typewriter.clear();
```



## License

  MIT
