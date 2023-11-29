import React from 'react';
import './App.css';
import MainRouter from "./Routers/routers";
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
        },
    }
})

function App() {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <MainRouter/>
            </QueryClientProvider>
        </div>
    );
}

export default App;
