# Install

```
npm install
```

# Run

Demoes a simple promise

```
npm run start:promise
```

Demoes a simple Observable

```
npm run start:observer
```

Demoes a cold Observable

```
npm run start:cold
```

Demoes a hot observable, how it matters when you start subscribing, you are sharing Producer as well

```
npm run start:hot
```

Demoes a warm Observable and their nature of not emitting anything until there is a subscriber

```
npm run start:warm
```

Demoes how a warm Observable becomes hot when a second subscriber arrives after a while

```
npm run start:warm-subscribers
```

Demoes how it goes from Warm to Hot to Cold
Warm => Hot when first subscriber arrives
Hot => Cold, we stop both subscribers

```
start:warm-share
```
