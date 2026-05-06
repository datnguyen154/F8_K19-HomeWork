Bài 1:

- student.name không bị thay đổi

- student.parent.name có bị đổi

- Khi sử dụng Spread Operator (...) thì sẽ là sao chép nông nên JavaScript sẽ thực hiện sao chép từng thuộc tính ở cấp độ đầu tiên. student.name là một kiểu dữ liệu nguyên thủy nên khi sao chép js tạo ra một bản sao hoàn toàn mới về giá trị 'hoang'. Vì vậy, mentor.name và student.name nằm ở hai ô nhớ khác nhau. Khi đổi mentor.name = 'bang', nó chỉ tác động đến đối tượng mentor

- student.parent là một Reference Type (kiểu dữ liệu tham chiếu - một object).Khi dùng { ...student }, JavaScript không tạo ra một object parent mới. Thay vào đó, nó chỉ sao chép địa chỉ vùng nhớ (reference) của object parent đó. Kết quả là: Cả student.parent và mentor.parent đều đang trỏ chung vào cùng một đối tượng trong bộ nhớ.

Bài 2:

- student.parent.name không bị ảnh hưởng

- Cách dùng JSON.parse(JSON.stringify(obj)) là deep copy (sao chép sâu). JSON.stringify(student): Chuyển toàn bộ đối tượng student thành một chuỗi văn bản (string). Lúc này, mọi mối quan hệ về bộ nhớ (tham chiếu) đều bị cắt đứt. JSON.parse(...): Lấy chuỗi văn bản đó và xây dựng lại một đối tượng hoàn toàn mới từ đầu. Vì đối tượng được xây dựng lại từ một chuỗi văn bản, nên tất cả các cấp (kể cả các object lồng nhau như parent) đều được cấp phát ô nhớ mới riêng biệt.

Bài 3:

- Mảng có bị thay đổi

- Phần tử name: 'a' bị thay đổi thành name: 'z' vì Khi sử dụng Spread Operator (...) là sao chép nông (shallow copy) sẽ sao chép địa chỉ vùng nhớ ở object trong mảng nên khi thay đổi 1 cái thì cái kia cũng bị ảnh hưởng

Bài 4:

- Kết quả là 999. Tương tự khi dùng Spread Operator (...) thì nó sẽ là shallow copy (sao chép nông) sẽ sao chép từng thuộc tính ở cấp độ đầu tiên, khi gặp object con bên trong thì nó sẽ sao chép địa chỉ vùng nhớ nên khi thay đổi 1 cái sẽ ảnh hưởng đến cái còn lại
