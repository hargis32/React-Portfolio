import react from "react";
import NavTabs from "./NavTabs";

const Header = ( { currentPage, handlePageChange }) => {
    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    )
}

export default Header