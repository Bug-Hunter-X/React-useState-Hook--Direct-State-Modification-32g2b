```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Using the setter function to update the state
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```