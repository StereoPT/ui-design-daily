import { ContextProvider } from "./context/GlobalContext";
import Calendar from "./components/calendar/Calendar";
import Events from "./components/events/Events";

function App() {
  return (
    <ContextProvider>
      <main className="w-full p-8 h-screen flex justify-center items-center select-none">
        <div className="flex items-center">
          <Calendar />
          <Events />
        </div>
      </main>
    </ContextProvider>
  )
}

export default App
