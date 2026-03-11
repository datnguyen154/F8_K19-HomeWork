Câu 1:

- Inline style có độ ưu tiên cao nhất trong CSS

Câu 2:

- Nếu một phần tử HTML có cả h1, .title, và #main cùng set color thì #main thắng vì id có độ ưu tiên cao hơn trong trường hợp này nên nó sẽ ghi đè 2 cái kia

Câu 3:

- Nếu thêm style="color: pink" trực tiếp vào phần tử ở Câu 2, thì phần tử sẽ là màu hồng vì inline style có độ ưu tiên cao nhất trong CSS

Câu 4:

- CSS được đọc từ trên xuống dưới, khi 2 selector có cùng độ ưu tiên thì style khai báo sau sẽ ghi đè style trước. Vì theme.css được khai báo sau base.css nên các rule trùng nhau sẽ override

- Điều kiện để override thành công:
    - Selector có độ ưu tiên cao hơn
    - Cùng độ ưu tiên nhưng khai báo sau
    - Sử dụng !important

Câu 5:

- Vì trong 1 phần tử lại có id mà id thì có độ ưu tiên cao hơn class nên 2 phần tử hiển thị màu khác nhau

Câu 6:

- Phần tử trong project có CSS phức tạp nhất là h1 trong trang DASHBOARD có tag(h1), class, id, inline style tác động lên nó. Inline style thắng cuối cùng vì inline style có độ ưu tiên cao nhất trong CSS
