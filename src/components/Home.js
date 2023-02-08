import './Home.scss';

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="left">
                    <strong>Yêu cầu</strong>
                    <ul>
                        <li>Sử dụng API  từ trang web <a href="https://reqres.in/" target={'_blank'}>https://reqres.in/</a> để  tạo website.</li>
                        <li>Sử dụng thư viện React để tạo một màn hình website cơ bản bao gồm các chức năng:
                            <ol>
                                <li>&nbsp;&nbsp;&nbsp;&nbsp;Đăng nhập</li>
                                <li>&nbsp;&nbsp;&nbsp;&nbsp;Thêm User</li>
                                <li>&nbsp;&nbsp;&nbsp;&nbsp;Sửa User</li>
                                <li>&nbsp;&nbsp;&nbsp;&nbsp;Xoá User</li>
                                <li>&nbsp;&nbsp;&nbsp;&nbsp;Hiển thị tất cả các User</li>
                                <li>&nbsp;&nbsp;&nbsp;&nbsp;Tìm kiếm User theo email</li>
                                <li>&nbsp;&nbsp;&nbsp;&nbsp;Sắp xếp theo FirstName</li>
                                <li>&nbsp;&nbsp;&nbsp;&nbsp;Import User từ file .csv</li>
                                <li>&nbsp;&nbsp;&nbsp;&nbsp;Export User ra file .csv</li>
                            </ol>
                        </li>
                        <li>Tự do tùy chỉnh html, css, để có một website nhẹ nhàng, khoa học và đẹp.</li>
                        <li>Commit và đẩy source code lên github public.</li>
                        <li>Triển khai website lên <strong>Heroku</strong> để demo</li>
                    </ul>
                    <strong>Requirements</strong>
                    <ul>
                        <li>Backend (optional - không bắt buộc)</li>
                        <li>Thời gian hoàn thành: <strong className="text-danger">1-3 ngày</strong></li>
                        <li>Gửi link Heroku và Github</li>
                        <li>Thời gian phản hồi 2 ngày làm việc kể từ ngày nhận được bài thi.</li>
                    </ul>
                </div>
                <div className="right">
                    <strong>Basic</strong>
                    <ol>
                        <li>Create git repos, setup git local</li>
                        <li>Login. Axios. Store to local storage</li>
                        <li>Private routes. Check token</li>
                        <li>
                            CRUD Users
                            <ul>
                                <li>List Users</li>
                                <li>Create User</li>
                                <li>Edit User</li>
                                <li>Delete User</li>
                            </ul>
                        </li>
                        <li>
                            Customize list users
                            <ul>
                                <li>Paginate list Users</li>
                                <li>Filter by email</li>
                                <li>Sort by first name</li>
                            </ul>
                        </li>
                        <li>
                            Working with excel
                            <ul>
                                <li>Import excel (read file excel)</li>
                                <li>Export excel</li>
                            </ul>
                        </li>
                    </ol>
                    <strong>Advance: </strong>use redux
                </div>
            </div>
        </>
    );
}

export default Home;;