import React from 'react'
import './ProjectApprovalAtDetail.css';
import { Link } from 'react-router-dom';

export default function ProjectApprovalAtDetail() {
    return (
        <div>
            <h2 className='paad-title'>Quảng cáo sản phẩm kem dưỡng ẩm Hảo Hảo</h2>
            <div className='paad-container'>
                <div className='paad-card'>
                    <div className='paad-display'>
                        <div className='paad-card-left'>
                            <div className='paad-description'>
                                <span>Mô tả:</span>
                            </div>
                            <div className='paad-detail'>
                                <span>Yêu cầu chi tiết:</span>
                            </div>
                            <div className='paad-demo'>
                                <span>Văn bản demo</span>
                            </div>
                            <div className='paad-main'>
                                <span>Văn bản chính</span>
                            </div>
                            <div className='paad-duration'>
                                <span>Thời lượng yêu cầu:</span>
                            </div>
                        </div>
                        <div className='paad-card-right'>
                            <div className='paad-text-description'>
                                <span>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                    aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                                    Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos,
                                    qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur,
                                    adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.
                                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                    Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat,
                                    quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti
                                    atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa,
                                    qui officia deserunt
                                </span>
                            </div>
                            <div className='paad-text-detail'>
                                <span>
                                    Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat,
                                    quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti
                                    atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa,
                                    qui officia deserunt
                                </span>
                            </div>
                            <div className='paad-text-demo'>
                                <Link
                                    to="/mp3/test.docx"
                                    download="Test-Docx-Demo"
                                    target="blank"
                                >
                                    <button >Download</button>
                                </Link>
                            </div>
                            <div className='paad-text-main'>
                                <Link
                                    to="/mp3/test.docx"
                                    download="Test-Docx-Main"
                                    target="blank"
                                >
                                    <button >Download</button>
                                </Link>
                            </div>
                            <div className='paad-text-duration'>
                                <span>2 phút</span>
                            </div>
                        </div>
                    </div>
                    <div className='paad-button'>
                        <button>Duyệt</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
