/**
 * 
 * Responsive Tree
 * 
 */

import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import SortableTree from "react-sortable-tree"
import 'react-sortable-tree/style.css' // This only needs to be imported once in your app

function ResponsiveTree(props) {
  const { records = [], loading, onChange } = props
  const [treeData, setTreeData] = useState(false)

  useEffect(() => {
    setTreeData(records)
  }, [records])

  if (loading) {
    return <div>Loading...</div>
  }


  return (
    <div style={{ height: '600px', overflow: 'auto' }}>
      {records && records.length > 0 ? <SortableTree
        treeData={treeData || records}
        maxDepth={3}
        onChange={treeData => onChange ? onChange : setTreeData(treeData)}
        isVirtualized={false}
      /> : "No Records Found"}
    </div>
  )

}


ResponsiveTree.propTypes = {
  records: PropTypes.array,
  loading: PropTypes.bool,
  onChange: PropTypes.func
}

export default ResponsiveTree