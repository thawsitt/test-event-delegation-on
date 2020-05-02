# Event Delegation On

Test project of 3000 buttons, with only one event listener added to parent div.

## Demo

https://test-event-delegation-on.now.sh/

## Source Code

See full source code [here](https://github.com/thawsitt/test-event-delegation-on/blob/master/src/App.js).

Notice that there is only one onClick added to parent container.

```jsx
<div className="container" onClick={handleClick}>
  {ids.map((id) => (
    <FancyButton
      key={id}
      id={id}
      label={id}
      isSelected={selectedItems.has(id)}
    />
  ))}
</div>
```

## Event Delegation Off

Compare to the version *without* event delegation here: https://github.com/thawsitt/test-event-delegation-off
