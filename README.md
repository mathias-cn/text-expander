# Text Expander Component | React + TS
This was a challenge from [The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/)

A simple text expander re-usable component that receives a text and turns it into a collapsible text with "Show more" and "Show less" buttons. It can also receive other props to customize it.

## Component Features
* Default call
```typescript
<TextExpander 
    text={"Your text here"}
/>  
```
* Custom collapsed width | Default is 25
```typescript
<TextExpander 
    text={"Your text here"}
    collapsedWidth={100}
/>  
```
* Custom buttons text | Default is "Show more" & "Show less"
```typescript
<TextExpander 
    text={"Your text here"}
    buttonText: {
        open: "Show text",
        close: "Close text"
    }
/>  
```
* Custom button text color | Default is #1d4ed8
```typescript
<TextExpander 
    text={"Your text here"}
    buttonTextColor:{"#00ff00"}
/>  
```
* Display underline or no | Default is true
```typescript
<TextExpander 
    text={"Your text here"}
    underline={false}
/>  
```
* Put your classes to the text | Default is empty
```typescript
<TextExpander 
    text={"Your text here"}
    className={"Your classes here"}
/>  
```