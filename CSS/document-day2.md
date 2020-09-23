1. HTML5
- Video
- <header></header>
- <main></main>
- Post: <article></article>
- Menu: <nav></nav>
- <sidebar></sidebar>
- <footer></footer>
- <section></section>
- <list-product></list-product>
- <form-product></form-product>
- <address></address>
- <canvas></canvas>
- <figure></figure>

2. CSS
2.1 Tại sao sử dụng CSS
- Viết code ít hơn
- Đơn giản hóa việc định dạng format cho 1 trang
- Chạy cho nhiều device

2.2 Khai báo CSS cho 1 trang web
- Khai báo nội tuyến
	<style>
	
	</style>

- Khai báo trực tiếp trên thẻ HTML (ít dùng)
	<p style="color: blue">Đây là thẻ P</p>
- Khai báo bên ngoài trang -> nhúng vào trang web thông qua thẻ Link
	<link rel="stylesheet" type="text/css" href="đường dẫn file css" />

2.3 Làm thế nào để định nghĩa CSS cho 1 thẻ
    Selector: (chọn thẻ HTML cần định nghĩa)
        - tên thẻ Ex: div {
            thuộc tính css
        };

        - Class name Ex: .text {
            thuộc tính css
        }

        - ID name Ex: #text {
            thuộc tính css
        }
        
        - Thuộc tính của thẻ
            a[href="test"] {
                thuộc tính của thẻ
            }

        - :first-child (lấy ra thẻ đầu tiên)

        - :last-child (lấy ra thẻ cuối cùng)

2.4 Cú pháp của định nghĩa css cho 1 thể
selector {
	css attribute 1: value1;
	css attribute 2: value2;
	css attribute 3: value3;
}

Ex div {
	color: red;
	border: 1px solid red;
	background: orange;
}

2.5 Các thuộc tính css thường sử dụng
* background
- Cú pháp ngắn gọn
	background: color | url(đường dẫn ảnh) repeat position
- Viết riêng
	background-color: value;
	background-image: url();
	background-repeat: value;
	background-position: value
	background-size: value;
	background-attachment: value;

* Width | Height
- Đơn vị là px | %
Ex:
	div {
		width: 100px;
		height: 100px;
	}

* Các thuộc tính css liên quan đến text
- color: value; // Qui định màu chữ
- font-size: value; // Qui định cỡ chữ, đơn vị là: px | em | pt | %,....
- font-weight: In đậm chữ
- font-style: value; // In nghiêng
- line-height: khoảng các giữa các dòng
- text-align: left, right, center; // Canh lề cho văn bản
- font-family: value; // Qui định kiểu font chữ
- letter-spacing: khoảng cách giữa các ký tự (từ)
- text-indent: value; // Đơn vị là px. Thụt vào đầu dòng

* Margin & padding
- Margin: Tạo khoảng cách giữa các thẻ với nhau (Các thẻ nằm ngoài nhau)
- Padding: Tạo khoảng cách từ đường viền của thẻ đến những nội dung nằm bên trong nó. Nội dung có thể là text, ảnh, thẻ HTML

Cách định nghĩa ngắn gọn
	marign: top right bottom left;
 	padding: top right bottom left;

* Float & clear
- float: left | right
	- Bắt buộc phải set width cho thẻ	
	- Tạo ra các thẻ HTML nằm ngang hàng nhau
	- Để các thẻ nằm ngang hàng nhau (tất cả phải đc định nghĩa float giống nhau)

- clear: left | right | both

*HOMEWORK: Dùng html5 hoặc thẻ div, thanh menu dùng thẻ ul