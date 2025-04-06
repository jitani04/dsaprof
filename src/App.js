import logo from './logo.svg';
import './App.css';
// import OpenAI from "openai";
// const client = new OpenAI();

// async function OpenaiApi(){
//   const response = await client.responses.create({
//     model: "gpt-4o",
//     input: "Write a one-sentence bedtime story about a unicorn.",
//   });

//   return response.output_text;
// }
function App() {
  return (
    <div className="App">
      <main className="App-body">
        <h1>Welcome to DSA Professor</h1>
        <p>Get help with coding problems, algorithms, and data structures.</p>
        <p>Click on a topic to get started!</p>
        <button className="App-button"> Arrays </button>
        <button className="App-button"> Strings </button>
        <button className="App-button"> Linked Lists </button>
        <button className="App-button"> Trees </button>
        <button className="App-button"> Graphs </button>
        <button className="App-button"> Stacks </button>
        <button className="App-button"> Queues </button>
        <button className="App-button"> Recursion </button>
        <button className="App-button"> Dynamic Programming </button>
      </main>
    </div>
  );
}

export default App;
