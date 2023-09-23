import React from "react";
import './ProjectApproval.css'
import ListProjectApprovalCard from "../../components/ListProjectApprovalCard/ListProjectApprovalCard";

const ProjectApproval = () => {
    return (
        <div className="projectApproval-container">
            <div className="projectApproval-search">
                <input type="search" placeholder="Tìm kiếm" />
                <select>
                    <option>Mới nhất</option>
                    <option>Theo dõi</option>
                </select>
            </div>
            <div>
                <ListProjectApprovalCard />
                <ListProjectApprovalCard />
                <ListProjectApprovalCard />
                <ListProjectApprovalCard />
                <ListProjectApprovalCard />

            </div>
        </div>
    )

}

export default ProjectApproval;