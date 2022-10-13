import TableUser from "./Admin/TableUser";
import "./App.scss";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleRefresh } from "./redux/actions/UserAction";
import { Container } from "react-bootstrap";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(handleRefresh());
        }
    }, []);
    return (
        <>
            <div className="app-container">
                <Header />
                <Container>
                    <AppRoutes />
                </Container>
            </div>
        </>
    );
};

export default App;
