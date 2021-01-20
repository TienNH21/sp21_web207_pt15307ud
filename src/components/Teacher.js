function Teacher({ info }) {
  const listMon = info.subjects
    .map(function (value, index) {
      return (
        <li key={index}>
          { value.code } - { value.name }
        </li>
      );
    });

  const element = (
    <ul>
      <li>Họ Tên: { info.name }</li>
      <li>Ngày sinh: { info.birthday }</li>
      <li>Địa chỉ: { info.address }</li>
      <li>
        Tình trạng: {
          info.married == true ?
            'Đã kết hôn' :
            'Độc thân'
        }
      </li>
      <li>Môn Học:
        <ul>
          { listMon }
        </ul>
      </li>
    </ul>
  );

  return element;
}

export default Teacher;
