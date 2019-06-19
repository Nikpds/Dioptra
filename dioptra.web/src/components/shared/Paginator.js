import React from 'react'
import { Pagination } from 'antd'
import './shared.less'
import { strings } from '../../contexts/LocalizationProvider'
const Paginator = ({ total, current, pageSize, onPaginationChange }) => {
  const onShowSizeChange = (current, size) => {
    onPaginationChange(current, size)
  }
  const onChange = (page, pageSize) => {
    onPaginationChange(page, pageSize)
  }
  return (
    <Pagination
      size="small"
      disabled={false}
      total={total}
      current={current}
      pageSize={pageSize}
      pageSizeOptions={['10', '20', '30', '40']}
      showTotal={total => `${strings.pagination.totalItems} ${total}`}
      showSizeChanger={true}
      onShowSizeChange={onShowSizeChange}
      onChange={onChange}
    />
  )
}

export default Paginator
