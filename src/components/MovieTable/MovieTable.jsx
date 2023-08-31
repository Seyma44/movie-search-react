import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Space, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import imageAsset from '../../assets/noimage.jpeg';
import './MovieTable.scss'

const MovieTable = ({ movies }) => {
  const defaultPosterUrl = imageAsset || 'https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg';
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 18 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space >
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Ok
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
         
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) => {
      const dataIndexValue = record[dataIndex];
      if (dataIndexValue !== undefined && dataIndexValue !== null) {
        const dataIndexValueString = dataIndexValue.toString();
        return dataIndexValueString.toLocaleLowerCase().includes(value.toLocaleLowerCase());
      }
      return false;
    },
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'Poster',
      dataIndex: 'Poster',
      key: 'Poster',
      render: (text, record) => (
        <Link to={`/detail/${record.imdbID}`}>
        <img
          src={text !== 'N/A' ? text : defaultPosterUrl} // Use the actual poster image or default image
          alt="poster"
          style={{ maxWidth: '100px' }}
        />
      </Link>
      ),
    },
    {
      title: 'Title',
      dataIndex: 'Title',
      key: 'Title',
      ...getColumnSearchProps('Title'),
    },
    {
      title: 'Year',
      dataIndex: 'Year',
      key: 'Year',
      ...getColumnSearchProps('Year'),
    },
    {
      title: 'Type',
      dataIndex: 'Type',
      key: 'Type',
      ...getColumnSearchProps('Type'),
    },
    {
      title: 'IMDb ID',
      dataIndex: 'imdbID',
      key: 'imdbID',
      ...getColumnSearchProps('imdbID'),
    },
  ];

  return (
    <div className="container">
      <Table
        dataSource={movies}
        columns={columns}
        pagination={{ pageSize: 10 }}
        rowKey={(record) => record.imdbID}
        style={{
          width: '76%', // Ensure the table container takes full width
          overflowX: 'auto', // Enable horizontal scrolling
        }}
        scroll={{ x: 800 }} 
      />
    </div>
  );
};

export default MovieTable;
