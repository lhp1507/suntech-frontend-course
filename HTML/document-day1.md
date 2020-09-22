HTML

1. Tại sao phải sử dụng các thẻ HTML?
- HTML là ngôn ngữ mà trình duyệt có thể biên dịch được.

2. Cách tạo trang HTML và cấu trúc cơ bản của 1 trang HTML:
- file_name.html

3. Cấu trúc thẻ HTML:
- Luôn bắt đầu bằng thẻ mở và kết thúc bằng một thẻ đóng.
- Giữa thẻ mở và thẻ đóng có "nội dung".
    + Nội dung:
        Ảnh.
        Text.
        Video.
        Các thẻ HTML khác.
    Ex: <h1>Content</h1>
        <div>
            <img src=""/>
            <p>Content</p>
        </div>
- Mỗi thẻ HTML có 1 hoặc nhiều thuộc tính, hoặc không có thuộc tính nào. Và thuộc tính luôn nằm ở thẻ mở.
    Ex: <div class="test" name="red">Content</div>
        <a href="">Google</a>
        <h3>Content</h3>
- Chúng ta có thể định nghĩa thuộc tính của thẻ html theo ý muốn.
    Ex: <div number="1" color="red"></div>
- Một số trường hợp đặc biệt thì không có thẻ đóng. Dấu đóng thẻ sẽ nằm trên thẻ mở.
    Ex: <br/>
        <hr/>
        <input type="" name="" />

3. Các thẻ HTML thường sử dụng:
* Các thẻ tiêu đề cho nội dung:
- h1 -> h6
    <h1>Nội dung H1</h1>
    <h2>Nội dung H2</h2>
    <h3>Nội dung H3</h3>
    <h4>Nội dung H4</h4>
    <h5>Nội dung H5</h5>
    <h6>Nội dung H6</h6>
* Những thẻ thể hiện văn bản:
- In đậm văn bản
    <strong>Nội dung</strong>
    <b>Nội dung</b>
    Đối với SEO ưu tiên sử dụng thẻ <strong></strong>
- In nghiêng và gạch chân
    <i>Nội dung</i>
    <u>Nội dung</u>
- Thể hiện font và cỡ chữ
    <font size="30pt" color="red">Nội dung</font>
- Thể hiện xóa văn bản
    <del>Nội dung</del>
- Thể hiện đoạn văn
    <p align="">Nội dung</p>

    <pre>
        Nội dung
    </pre>
    -> giữ được format nội dung.

* Những thẻ thể hiện liên kết và hình ảnh
- Thẻ liên kết
    <a href="" title="" target="">Nội dung</a>
        + href: Trang đích sẽ chuyển đến.
        + title: Làm rõ liên kết.
        + target: Quy định về cách chuyển trang.
- Thẻ ảnh
    <img src="" alt="" width="" height="" />
        + src: đường dẫn ảnh.
        + width: độ rộng ảnh.
        + height: độ cao ảnh.
        + alt: Mô tả ảnh (có vai trò SEO). Sẽ hiển thị khi đường dẫn ảnh bị sai.

* Thẻ đại diện cho nhóm thẻ block, thẻ đại diện cho nhóm thẻ inline

Các loại thẻ html
    - Block -> Ex: div (Khung sườn)
    - Inline -> Ex: span (Tiểu tiết)
    - None -> Ex: meta

* Các thẻ form
- Cổng giao tiếp giữa user và hệ thống.

* Thẻ danh sách
    Bất tuần tự
        <ul>
            <li>Item</li>
            <li>Item1</li>
        </ul>
    Tuần tự
        <ol>
            <li>Item1</li>
            <li>Item2</li>
        </ol>

* Thẻ table
    <table border="" cellspacing="" cellpadding="" width="" align="" height="" bgcolor="">
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
    </table>

    <!--
        border: đường viền bảng
        width: chiều rộng bảng
        height: chiều cao bảng
        bgcolor: màu nền bảng
        cellspacing: khoảng cách giữa các border ở các cột với nhau
        cellpadding: khoảng cách giữa đường viền với nội dung bên trong cột
        colspan: gộp các cột trên cùng một dòng.
        rowspan: gộp các cột ở các dòng khác nhau
        align: left|center|right, căn lề văn bản
        valign: top|middle|bottom
    -->