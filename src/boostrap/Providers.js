import { TodoContextProvider } from "../components/global-context/context-providers/TodoContext.provider"
import { UIContextProvider } from "../components/global-context/context-providers/UIContext.provider"



const ContextProvider = ({ children }) => {
    return (
        <UIContextProvider>
            <TodoContextProvider>
                {children}
            </TodoContextProvider>
        </UIContextProvider>
    )
}

export {
    ContextProvider
}