# Install

```
npm install
```

# Run

Starts a demo that shows the error callback being used

```
npm run start:error-catch
```

Shows the usage of the catch() operator

```
npm run start:error-merge-catch
```

Shows the usage of onErrorResumeNext() operator

```
npm run start:error-ignore
```

Shows the usage of a simple retry()

```
npm run npm run start:error-retry
```

Shows a retry with a delay of 3 milliseconds between attempts, stops at 3 attempts

```
npm run start:error-retry-advanced
```

As above but we throw an error after 3 failed attempts, the above just completes the stream

```
npm run start:error-retry-advanced-fail
```
