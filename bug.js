```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: Directly modifying the count state
    count = count + 1; 
    setCount(count); // This won't update the component because 'count' is modified directly, not via the setter
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```