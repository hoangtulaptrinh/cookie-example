import React, { useState } from 'react';
import * as App from '../App'

function RememberName() {
  const [name, setName] = useState(null);
  const letSetName = () => {
    setName(prompt('nhập tên mày vào'))
  }
  var now = new Date();
  now.setMonth(now.getMonth() + 1)
  // nếu tên trùng với cookie thì hiện alert ra 
  // lệnh if này phải để trước lệnh set cookie ở dưới nếu không thì không check được cookie ở lần nhập trước
  if (name === App.getCookie('TenNguoiDung') && name !== null) {
    alert(`Chào Mừng Thằng Ngu ${App.getCookie('TenNguoiDung')} Đã Trở Lại`)
  }
  if (name !== null && name !== '') {
    document.cookie = 'TenNguoiDung=' + name + '; expires=' + now.toUTCString();
  }
  return (
    <div className="RememberName">
      <button onClick={letSetName}>SetName</button>
    </div>
  );
}

export default RememberName;