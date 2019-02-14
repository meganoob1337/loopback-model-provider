# loopback-model-provider

loopback-model-provider is a component for loopback, wich serves the model.json specifications for all models together in one Object.

```
{
  <modelname> :  { model.name,
                   model.plural, // (if not existing in config, will add an 's' to name
                   ...model
                 },
  ...
}
```
## Installation

Install via NPM

```bash
npm install loopback-model-provider
```

## Usage
add the following to your component-config.json:

default path is '/model-provider'

```python
  "loopback-model-provider": {
    "path": "/model-provider",
    "excludes": [
      "<<modelname>>",
      ...
    ]
  },
```
for excludes use the name of the Model (without .json)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
