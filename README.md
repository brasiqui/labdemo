[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)

# moleculer-demo
This is a [Moleculer](https://moleculer.services/)-based microservices project. Generated with the [Moleculer CLI](https://moleculer.services/docs/0.14/moleculer-cli.html).

## Usage
Start the project with `npm run dev` command. 
After starting, open the http://localhost:5000/ URL in your browser.

In the terminal, try the following commands:
- `nodes` - List all connected nodes.
- `actions` - List all registered service actions.
- `call suspects.list` - Call the `suspects.list` action.
- `call passengers.check --name Arlequina --temperature 37` - Call the `passengers.check` action with the `name` and `temperature` parameter.


## Services
- **api**: API Gateway services
- **suspects**: DB service responsible for providing a list of known suspects. To use with MongoDB, set `MONGO_URI` environment variables and install MongoDB adapter with `npm i moleculer-db-adapter-mongo`.
- - **passengers**: Service responsible for receive passengers name and check their temperature. If the temperature is greater than or equal to 38 degree, an event fever.detected is emitted warning that fever was detected and doctors will be awaited.- 
- - **doctors**: Service responsible for listening to events `fever.detected` and providing appropriate care.
- - **lab**: Service that will be the agent of the moleculer lab.

## Mixins
- **db.mixin**: Database access mixin for services. Based on [moleculer-db](https://github.com/moleculerjs/moleculer-db#readme)


## Useful links

* Moleculer website: https://moleculer.services/
* Moleculer Documentation: https://moleculer.services/docs/0.14/

## NPM scripts

- `npm run dev`: Start development mode (load all services locally with hot-reload & REPL)
- `npm run start`: Start production mode (set `SERVICES` env variable to load certain services)
- `npm run cli`: Start a CLI and connect to production. Don't forget to set production namespace with `--ns` argument in script
- `npm run ci`: Run continuous test mode with watching
- `npm test`: Run tests & generate coverage report
