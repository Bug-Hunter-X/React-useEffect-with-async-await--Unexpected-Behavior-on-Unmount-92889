```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once after the component mounts
    console.log('Component mounted');
    // Perform some asynchronous operation, like fetching data from an API
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const data = await response.json();
      // Update state with fetched data
      setData(data);
    };
    fetchData();
    return () => {
      // Cleanup function – this runs when the component unmounts
      console.log('Component unmounted');
      // Clean up any resources or subscriptions here
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```