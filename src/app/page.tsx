import ClickButton from "./components/ClickButton";

export default function Home() {
  return (
    <main style={{fontFamily: "Arial", textAlign: "center", padding: 50}}>
      <h1>Hello, World!</h1>
      <p>This is my first simple website built using Next.js.</p>
      <ClickButton />
    </main>
  )
}