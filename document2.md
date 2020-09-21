1. HTML5
- video
 <header></header>
 <main></main>
- post: <article></article>
- Menu: <nav></nav>
- <sidebar></sidebar>
- <footer></footer>
- <section></section>
- <list-product></list-product>
- <form-product></form-product>
- <address></address>

2. CSS
2.2 Khai báo css cho 1 trang web
	- sử dụng thẻ <style></style> (khai báo nội tuyến)
	- <p style="color: blue">sdfdfsdf</p> (khai báo trực tiếp trên thẻ html -> ít dùng)
	- khai báo bên ngoài trang -> nhúng vào trang web thông qua thẻ link
		<link rel="stylesheet" type="text/css" href="đường_dẫn_file_css">

- :first-child -> lấy ra thẻ đầu tiên
- :last-child -> lấy ra thẻ cuối cùng

2.5 các thuộc tính css thường dùng
* background:
- Cú pháp ngắn gọn
	background: color | url (đường dẫn ảnh) | position | repeat
- viết riêng
	background-color: value;
	background-image: url();
	background-repeat: value;
	background-position: value;
	background-size: value;
	background-attachment: value;

* width, height: đơn vị thường dùng px | %
ex: div{
	width:100px;
	height:100%;
}

* các thuộc tính css liên quan đến text
- color: value; //quy định màu chữ
- font-size: value; //cỡ chữ, đơn vị là: px | em | pt | %,...
- font-weight: in đậm chữ
- font-style: thường dùng in nghiêng
- line-height: khoảng cách giữa các dòng
- text-align: left, right, center
- font-family: font chữ
- letter-spacing: khoảng cách giữa các ký tự (từ)
- text-indent: value; // đơn vị là px. Thụt đầu dòng

* margin và padding
- margin: tạo khoảng cách giữa các thẻ với nhau (các thẻ nằm ngoài nhau)
- padding: tạo khoảng cách từ đường viền của thẻ đến những nội dung nằm bên trong nó. nội dung có thể là các thẻ html, text, ảnh.

Cách định nghĩa ngắn gọn:
	margin: top right bottom left;
	padding: top right bottom left;

* float & clear
	float: left | right
		Bắt buộc phải set width cho thẻ
		-> tạo ra các thẻ html nằm ngang hàng nhau
		Để các thẻ nằm ngang hàng nhau (tất cả phải định nghĩa float giống nhau)
	clear: left |right | both

*BTVN:
	Sử dụng div hoặc html5 và css (áp dụng cho hw2)