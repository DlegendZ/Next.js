"use client"

export default function ClickButton() {
  return (
    <button
      onClick={
        () => alert("Button Pressed!")
      }
      style={
        {
          padding: "10px 20px", fontSize: 16, cursor: "Pointer",
          backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: 5
        }
      }
    >
      Click Me!
    </button>
  );
}