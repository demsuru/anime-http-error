import './App.css';
import { AppUI } from './AppUI';
import { ErrorProvider } from './ErrorContext';

function App(){
    return(
        <ErrorProvider>
            <AppUI/>
        </ErrorProvider>
    )
}

export default App;
