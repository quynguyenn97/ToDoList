import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import TableUser from "./TableUser";

const Admin = () => {
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
    const handleClose = () => {
        setIsShowModalAddNew(false);
    };
    const handleAddNewUser = () => {
        setIsShowModalAddNew(true);
    };

    return (
        <div className="admin-container">
            <div className="admin-content container">
                <FaBars onClick={() => setCollapsed(!collapsed)} />
                <TableUser />
            </div>
        </div>
    );
};
export default Admin;
