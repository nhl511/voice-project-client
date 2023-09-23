import React, { useState } from "react";
import './ListProjectApprovalCard.css'

const ListProjectApprovalCard = () => {

    const [dropDown, setDropDown] = useState(false);

    const displayDropdown = () => {
        setDropDown(!dropDown);
    }

    return (
        <div className="lpa-margin">
            <div className="lpa-container" onClick={displayDropdown}>
                <div className="lpa-card">
                    <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        alt="thumbnail" />
                    <div className="lpa-name">
                        <span>Quảng cáo kem dưỡng ẩm Hảo Hảo</span>
                        <div className="lpa-bank">
                            <span>BankCode: <span>VP87627JKPL</span> </span>
                        </div>
                    </div>
                    <div className="lpa-status">
                        <span>Chưa thanh toán</span>
                        {/* <span>Đã thanh toán</span> */}

                    </div>
                    <div className="lpa-icon">
                        <button>Icon</button>
                    </div>
                </div>
            </div>
            {
                dropDown ? (
                    <div className="lpa-dropdown">
                        <div className="lpa-dropdown-card">
                            <div className="lpa-dropdown-display">
                                <div className="lpa-dropdown-small-card">
                                    <div>
                                        <p className="lpa-dropdown-title">Thông tin thanh toán</p>
                                        <div className="lpa-dropdown-bank">
                                            <strong>Ngân hàng:</strong>
                                            <span>Ngân hàng Quân Đội (MB_Bank)</span>
                                        </div>
                                        <div className="lpa-dropdown-bank">
                                            <strong>Số tài khoản:</strong>
                                            <span>012345678910</span>
                                        </div>
                                        <div className="lpa-dropdown-bank-fullName">
                                            <strong>Tên tài khoản:</strong>
                                            <span>Trần Thành Công</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lpa-dropdown-detail-button">
                                <button>Xem chi tiết dự án</button>
                            </div>
                            <div className="lpa-dropdown-confirm-button">
                                <button>Xác nhận đã thanh toán</button>
                            </div>
                        </div>
                    </div>
                ) : <></>
            }
        </div>
    )

}

export default ListProjectApprovalCard;