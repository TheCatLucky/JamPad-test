import { Pagination, Table, Space, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import style from "./Table.module.css";
const { Search } = Input;
const columns = [
  {
    title: 'Тест',
    dataIndex: 'test',
    sorter: (a, b) => a - b
  },
  {
    title: 'Подтест',
    dataIndex: 'subtest',
    /* sorter: (a, b) => (a.subtest.slice(6) - b.subtest.slice(6)) */
  },
  {
    title: 'Отправитель',
    dataIndex: 'sender',
  },
  {
    title: 'Приглашение',
    dataIndex: 'inviteDate',
    sorter: (a, b) => a - b
  },
  {
    title: 'Завершение',
    dataIndex: 'endDate',
    sorter: (a, b) => a - b
  },
  {
    title: 'Состояние',
    dataIndex: 'testState',
    sorter: (a, b) => a-b
  },
  {
    title: 'Прогресс',
    dataIndex: 'progress',
  },
  {
    title: 'Действия',
    dataIndex: 'actions',
  },
];
const data = [];
for (let i = 0; i < 50; i++) {
  data.push({
    key: i,
    test: `Тест "...`,
    subtest: `Тест #${i}`,
    sender: `Андрей`,
    inviteDate: "21.01.2020",
    endDate: "25.01.2020",
    testState: "В процессе",
    progress: "Полоса прогресса",
    actions: "Перейти Отказ Результат"
  });
}
const pageSize = 10;
const getData = (current, pageSize) => {
  return data.slice((current - 1) * pageSize, current * pageSize)
}

const MyPagintaion = ({ total, onChange, current }) => {
  return (
    <Pagination
      size="small"
      total={total}
      current={current}
      onChange={onChange}
      pageSize={pageSize}
      position='bottomCenter'
    />
  )
};

const MyTable = () => {
  const [current, setCurrent] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searhText, setSearchText] = useState("");
  const rowSelection = {
    selectedRows,
    onChange: setSelectedRows,
  };
  useEffect(() => {
    
  }, [searhText])
  const onSearch = (e) => {
    let td = document.querySelectorAll("tbody tr");
    td.forEach((row) => {
      if (!row.textContent.includes(searhText)) {
        row.style.display = "none";
      } else {
        row.style.display = "table-row";
      }
    })
  }
  const handleChange = (e) => {
    setSearchText(e.target.value);
  }

  return (
    <div>
      <Space style={{width: 350}}>
        <Search placeholder="input search teasdfxt"
          onSearch={onSearch}
          value={searhText}
          onChange={(e) => handleChange(e)}
          className={style.search} />
      </Space>
      <div className={style.tableZone}>
        <div className={style.tableSize}>
          <Table
            columns={columns}
            dataSource={getData(current, pageSize)}
            pagination={false}
            rowSelection={rowSelection}
            className='table'
          />
        </div>
        <div className={style.pagination}>
          <MyPagintaion
            total={data.length}
            current={current}
            onChange={setCurrent}
          />
        </div>
      </div>
    </div>
  )
}

export default MyTable;
