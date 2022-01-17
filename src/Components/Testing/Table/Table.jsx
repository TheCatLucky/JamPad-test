import { Badge, Input, Pagination, Progress, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import style from "./Table.module.css";
const { Search } = Input;

const MyPagintaion = ({ total, onChange, currentPage, pageSize }) => {
  return (
    <Pagination
      size="small"
      total={total}
      current={currentPage}
      onChange={onChange}
      pageSize={pageSize}
      position='bottomCenter'
    />
  )
};

const MyTable = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searhText, setSearchText] = useState("");
  const [tableData, setTableData] = useState([]);
  const [currentTableData, setCurrentTableData] = useState([])
  const holProgress = useSelector(state => state.test.currentHolProgress)
  const uscProgress = useSelector(state => state.test.currentUscProgress)

  useEffect(() => {
    setTableData(props.tableValue);
  }, [props.tableValue]);

  useEffect(() => {
    setCurrentTableData(tableData);
    createTable(tableData)
  }, [tableData]);

  const data = [];
  const columns = [
    {
      title: 'Тест',
      dataIndex: 'test',
      sorter: (a, b) => a.test < b.test

    },
    {
      title: 'Подтест',
      dataIndex: 'subtest',
    },
    {
      title: 'Отправитель',
      dataIndex: 'sender',
    },
    {
      title: 'Приглашение',
      dataIndex: 'inviteDate',
      sorter: (a, b) => parseFloat(a.inviteDate) - parseFloat(b.inviteDate)
    },
    {
      title: 'Завершение',
      dataIndex: 'endDate',
      sorter: (a, b) => parseFloat(a.endDate) - parseFloat(b.endDate)

    },
    {
      title: 'Состояние',
      dataIndex: 'testState',
      sorter: (a, b) => a.testState < b.testState
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

  const createTable = (tableData) => {
    if (!tableData) {
      return;
    }
    tableData.map(task => {

      const date = (serverDate) => {
        let day = serverDate.getDate();
        let month = serverDate.getMonth();
        let year = serverDate.getFullYear();
        if (day <= 9) {
          day = `0${day}`
        }
        if (month + 1 <= 9) {
          month = `0${month}`
        }
        return `${day}.${month + 1}.${year}`
      }
      let inviteDate = date(new Date(Date.parse(task.invited_at)));
      let endDate = date(new Date(Date.parse(task.deadline_at)))
      let test = null;
      let startTest = null;
      let progress = 0;
      switch (task.id) {
        case 1:
          test = `Тест Холланда`
          startTest = <NavLink key={task.id + 3} to="/hollandTest" className={style.actionsSpan}>Перейти</NavLink>
          progress = holProgress
          break;

        case 2:
          test = `Тест УСК`
          startTest = <NavLink key={task.id + 3} to="/uscTest" className={style.actionsSpan}>Перейти</NavLink>
          progress = uscProgress
          break;

        default:
          break;
      }
      let status = "";
      switch (task.status) {
        case "created":
          status = [<Badge color={"#1890FF"} key={task.id + 6} />, "Не Начато"];
          break;
        case "in_progress":
          status = [<Badge color={"#FAAD14"} key={task.id + 6} />, "В процессе"];
          break;
        case "done": //примерное значение
          status = [<Badge color={"#52C41A"} key={task.id + 6} />, "Выполнено"];
          break;
        default:
          status = [<Badge color={"#D9D9D9"} key={task.id + 6} />, "Отказано"]; // примерный ответ
          break;
      }
      data.push({
        key: task.id,
        test: test,
        subtest: `Тест #${task.id}`,
        sender: [<a key={task.id + 4}>{task.hr}</a>],
        inviteDate: inviteDate,
        endDate: endDate,
        testState: status,
        progress: <Progress percent={progress} key={task.id + 5} />,
        actions: [startTest,
          <a key={task.id + 1} href="#" className={style.actionsSpan}>Отказ</a>,
          <a key={task.id + 2} href="#" >Результат</a>]
      });
    })
    return data;
  }
  createTable(currentTableData)
  const onSelectChange = (selectedRowKeys) => {
    setSelectedRows({ selectedRowKeys });
  };
  const pageSize = 10;
  const getData = (currentPage, pageSize) => {
    return data.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  }

  const rowSelection = {
    selectedRows,
    onChange: onSelectChange,
  };

  const onSearch = (value) => {
    setCurrentTableData(currentTableData.filter((i) => {
      for (let arr in i) {
        if (typeof (i[arr]) === "string" && (i[arr]).toLowerCase().includes(searhText.toLowerCase())) {
          return i
        }
      }
    }))
  }

  return (
    <div>
      <Space style={{ width: 350 }}>
        <Search placeholder="input search text"
          onSearch={onSearch}
          value={searhText}
          onChange={(e) => setSearchText(e.target.value)}
          className={style.search} />
      </Space>
      <div className={style.tableZone}>
        <div className={style.tableSize}>
          <Table
            columns={columns}
            dataSource={getData(currentPage, pageSize)}
            pagination={false}
            rowSelection={rowSelection}
            className={style.table}
          />
        </div>
        <div className={style.pagination}>
          <MyPagintaion
            total={data.length}
            current={currentPage}
            onChange={setCurrentPage}
            pageSize={pageSize}
          />
        </div>
      </div>
    </div>
  )
}

export default MyTable;
