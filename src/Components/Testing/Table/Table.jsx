import { Badge, Input, Pagination, Progress, Space, Table } from 'antd';
import React, { useEffect, useState, useMemo } from 'react';
import style from "./Table.module.css";
import { useSelector } from 'react-redux';
const { Search } = Input;



const MyPagintaion = ({ total, onChange, current, pageSize }) => {
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

const MyTable = (props) => {
  const [current, setCurrent] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searhText, setSearchText] = useState("");


  const data = [];
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
      sorter: (a, b) => a - b
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

  const createTable = () => {
    console.log(props.tableValue)
    if (!props.tableValue) {
      return;
    }

    props.tableValue.map(task => {
      let status = "";
      switch (task.status) {
        case task.status === "created":
          status = [<Badge color={"#1890FF"} key={task.id + 6} />, "Не Начато"];
          console.log('rere')
          break;
        case task.status === "in_progress":
          status = [<Badge color={"#FAAD14"} key={task.id + 6} />, "В процессе"];
          break;
        case task.status === "done": //примерное значение
          status = [<Badge color={"#52C41A"} key={task.id + 6} />, "Выполнено"];
          break;
        default:
          status = [<Badge color={"#D9D9D9"} key={task.id + 6} />, "Отказано"]; // примерный ответ
          break;
      }
      data.push({
        key: task.id,
        test: `Тест "...`,
        subtest: `Тест #${task.id}`,
        sender: [<a key={task.id + 4}>{task.hr}</a>],
        inviteDate: [task.invited_at],
        endDate: [task.deadline_at],
        testState: status,
        progress: <Progress percent={30} key={task.id + 5} />,
        actions: [<a key={task.id + 3} href="#" className={style.actionsSpan}>Перейти</a>,
        <a key={task.id + 1} href="#" className={style.actionsSpan}>Отказ</a>,
        <a key={task.id + 2} href="#" >Результат</a>]
      });
    })
    return data;
  }

  useMemo(() => {
    return createTable()
  }, [props.tableValue])

  useEffect(() => {

  }, [searhText])

  const pageSize = 10;
  const getData = (current, pageSize) => {
    return data.slice((current - 1) * pageSize, current * pageSize)
  }

  const rowSelection = {
    selectedRows,
    onChange: setSelectedRows,
  };
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
      <Space style={{ width: 350 }}>
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
            className={style.table}
          />
        </div>
        <div className={style.pagination}>
          <MyPagintaion
            total={data.length}
            current={current}
            onChange={setCurrent}
            pageSize={pageSize}
          />
        </div>
      </div>
    </div>
  )
}

export default MyTable;
