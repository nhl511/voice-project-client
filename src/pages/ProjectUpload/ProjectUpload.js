import React, { useState } from "react";
import './ProjectUpload.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const ProjectUpload = () => {

    const [deadline, setDeadline] = useState();
    return (
        <div className="projectUpload-container">
            <div className="projectUpload-title">
                <p>ĐĂNG TẢI THÔNG TIN TUYỂN DỤNG GIỌNG ĐỌC</p>
            </div>
            <div className="projectUpload-card">
                <div className="projectUpload-card-width">
                    <div>
                        <div className="projectUpload-card-first">
                            <input placeholder="Tiêu đề" />
                            <input placeholder="Mô tả" />
                            <input placeholder="Yêu cầu" />
                        </div>
                        <div className="projectUpload-card-second">
                            <div className="projectUpload-card-grid">
                                <div className="projectUpload-col">
                                    <span>Bản demo duyệt giọng nói:</span>
                                    <input type="file" id="btn-upload-voice" hidden />
                                    <label for="btn-upload-voice" >Upload</label>
                                </div>
                                <div className="projectUpload-col">
                                    <span>Văn bản cần đọc:</span>
                                    <input type="file" id="btn-upload-doc" hidden />
                                    <label for="btn-upload-doc">Upload</label>
                                </div>
                            </div>
                            <div className="projectUpload-card-display">
                                <div className="projectUpload-first-row-col-1">
                                    <span>Giá:</span>
                                    <input />
                                    <span>vnđ/phút</span>
                                </div>
                                <div className="projectUpload-first-row-col-2">
                                    <span>Loại văn bản:</span>
                                    <select>
                                        <option>Quảng cáo</option>
                                        <option>Khác</option>
                                    </select>
                                </div>
                                <div className="projectUpload-first-row-col-3">
                                    <span>Thumbnail:</span>
                                    <input type="file" id="thumbnail" hidden />
                                    <label for="thumbnail">Upload</label>
                                </div>
                                <div className="projectUpload-second-row-col-1">
                                    <span>Giới tính:</span>
                                    <select>
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                        <option>Khác</option>
                                    </select>
                                </div>
                                <div className="projectUpload-second-row-col-2">
                                    <span>Tone giọng:</span>
                                    <select>
                                        <option>Cao</option>
                                        <option>Trầm</option>
                                    </select>
                                </div>
                                <div className="projectUpload-second-row-col-3">
                                    <span>Thời lượng yêu cầu:</span>
                                    <input />
                                    <span>Phút</span>
                                </div>
                                <div className="projectUpload-third-row-col-1">
                                    <span>Vùng miền:</span>
                                    <select>
                                        <option>Miền Bắc</option>
                                        <option>Miền Nam</option>
                                        <option>Miền Tây</option>
                                        <option>Miền Trung</option>
                                    </select>
                                </div>
                                <div className="projectUpload-third-row-col-2">
                                    <span>Địa phương:</span>
                                    <select>
                                        <option>Hà Nội</option>
                                        <option>Hồ Chí Minh</option>
                                        <option>Khác</option>
                                    </select>
                                </div>
                                <div className="projectUpload-third-row-col-3">
                                    <span>Phát âm:</span>
                                    <select>
                                        <option>Tốt</option>
                                        <option>Khá</option>
                                    </select>
                                </div>
                                <div className="projectUpload-fourth-row-col-1">
                                    <span>Truyền cảm:</span>
                                    <select>
                                        <option>Tốt</option>
                                        <option>Khá</option>
                                    </select>
                                </div>
                                <div className="projectUpload-fourth-row-col-2">
                                    <span>Tốc độ đọc:</span>
                                    <select>
                                        <option>Nhanh</option>
                                        <option>Chậm</option>
                                    </select>
                                </div>
                                <div className="projectUpload-fourth-row-col-3">
                                    <span>Trọng âm:</span>
                                    <select>
                                        <option>Tốt</option>
                                        <option>Khá</option>
                                    </select>
                                </div>
                                <div className="projectUpload-fifth-row-col-1">
                                    <span>Số lần chỉnh sửa:</span>
                                    <input />
                                </div>
                                <div className="projectUpload-fifth-row-col-2">
                                    <span>Hạn hoàn tất:</span>
                                    <DatePicker dateFormat="dd-MM-yyyy" yearDropdownItemNumber={50}
                                        showYearDropdown scrollableYearDropdown selected={deadline}
                                        onChange={(date) => setDeadline(date)} />
                                </div>
                            </div>
                        </div>
                        <div className="projectUpload-card-third">
                            <button>Hoàn tất</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectUpload;