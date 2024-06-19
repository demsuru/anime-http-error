import React from "react";
import { Header } from "../Header";
import "./App.css";
import { ErrorCard } from "../ErrorCard";
import { ErrorContext } from "./ErrorContext";




function AppUI() {
    const { errorList } = React.useContext(ErrorContext);
    return (
        <div className="App">
            <Header />
            <main>
                <div className="error-list">
                    {errorList.map((error, index) =>
                        <ErrorCard
                            key={index}
                            title={error.title}
                            imageUrl={error.imageUrl}
                        />
                    )}
                </div>
            </main>
        </div>
    );


}

export { AppUI };