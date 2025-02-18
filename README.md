# React useEffect with Async/Await: Unexpected Behavior on Unmount

This example demonstrates a common issue when using `useEffect` with an asynchronous operation in React.  The problem arises when the component unmounts before the asynchronous operation completes. This can lead to errors or unexpected state updates.

## Bug Description

The provided code attempts to fetch data from an API within a `useEffect` hook.  If the component unmounts before the `fetch` request completes, the `setData` call might still execute, leading to state updates after the component is unmounted, resulting in potential errors and unexpected behavior.

## Solution

The solution involves using the cleanup function provided by the `useEffect` hook. This function is executed when the component unmounts and can be used to cancel the asynchronous operation or prevent state updates after unmounting.