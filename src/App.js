import React, { useState } from 'react';
import './App.css';
import RememberName from './components/RememberName'
import _ from 'lodash'

//hàm lấy ra cookie theo tên cookie truyền vào
export const getCookie = (name) => {
  var cookies = document.cookie;
  // khỏi tạo cookie cần tìm là null
  var result = null;
  if (cookies.length > 0) {
    // chuyển danh sách các cookies từ chuỗi về dạng mảng
    var arrCookies = cookies.split(';');
    for (let i = 0; i < arrCookies.length; i++) {
      // nếu có tồn tại cookie cần tìm thì gán result bằng phần ở sau dấu = 
      if (_.includes(arrCookies[i], name)) {
        // +1 để bỏ đi dấu = ở đầu chuỗi
        result = arrCookies[i].slice(arrCookies[i].indexOf('=') + 1);
        break;
      }
    }
  }
  return result;
}
function App() {
  const [render, reRender] = useState(false);
  var now = new Date();
  now.setMonth(now.getMonth() + 1)
  const token = '7dhs7dasd6asdasd7asd'
  const name = 'Do Tung Duong'
  const age = 21
  const setCookie = () => {
    // expires là ngày hết hạn của cookie
    document.cookie = 'token=' + token + '; expires=' + now.toUTCString();
    document.cookie = 'name=' + name + '; expires=' + now.toUTCString();
    document.cookie = 'age=' + age + '; expires=' + now.toUTCString();
    reRender(!render)
  }
  const deleteCookie = () => {
    // ở đây set expires là năm 1970 để cho nó hết hạn , qua đó nó sẽ bị xóa bỏ
    document.cookie = 'token' + '=; expires= Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'name' + '=; expires= Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'age' + '=; expires= Thu, 01 Jan 1970 00:00:01 GMT;';
    reRender(!render)
  }
  return (
    <div className="App">
      <div>
        <button onClick={setCookie}>Set Cookie</button>
        {
          document.cookie
        }
        <button onClick={deleteCookie}>Delete Cookie</button>
      </div>
      <RememberName />
    </div>
  );
}

export default App;