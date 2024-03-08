# nodejs
Repository for learning NodeJS


## Section 3: Understanding the basics
### Core Modules
- http: launch a server, send requests to APIs
- https: launch a SSL server
- fs: 
- path:
- os: 

### NodeJS Program lifecycle
node app.js => start script => parse code, register variables and functions => EVENT LOOP

*Event Loop*: Keeps on running as long as there are event listeners registered

to quit that process: ```process.exit```
Typically, we don't use it because we want our server always on

### Streams and Buffers
Read about.

### Single Thread, Event Loop and Blocking Code
Read about.

#### Event Loop
1. Timers: execute setTimeout, setInterval Callbacks
2. Pending Callbacks: Execute I/O-related Callbacks that were deferred
3. Poll: Retrieve new I/O events, execute their callbacks
4. Check: execute `setImmediate()` callbacks
5. Close Callbacks: execute all 'close' event callbacks
6. `process.exit`