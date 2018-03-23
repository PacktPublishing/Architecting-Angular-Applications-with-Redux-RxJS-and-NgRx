# Install

```
npm install
```

# Run

Demo of a simple Subject

```
npm run start:subject
```

After running below command - Surf to http://localhost:5000/cascading.html in your browser. Select items in the dropdown list
from top to bottom

```
npm run start:cascading
```

After running below command - Surf to http://localhost:5000/behavior-subject.html in your browser. Right-click in the window and choose inspect, see how it first prints the initial value 'default value', followed by content of data.json file 12 seconds later

```
npm run start:behavior-subject
```

Demoes the ReplaySubject how it remembers in this case the two latest emitted values despite there not existing any subscribers until after they were emitted

```
npm run start:replay-subject
```

Demonstrates a BehaviorSubject that remembers emitted values for a time instead of the x latest emitted values

```
npm run start:replay-subject-window
```

Demoes an async subject, it doesn't emit anything and the reason for that is that a call to the complete method is missing, look for a more functioning version in the demo right after this one.

```
npm run start:async-subject
```

This version of AsyncSubject calls complete() which means it emits the last value.

```
npm run start:async-subject-complete
```
