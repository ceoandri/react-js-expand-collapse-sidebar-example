import { useState, useEffect } from 'react';
import logo from './Logo.svg';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import './App.css';

const App = () => {
  const [isExpand, setIsExpand] = useState(true);
  const [sidebarHandlerClass, setSidebarHandlerClass] = useState('expanded-sidebar');
  const [iconHandlerClass, setIconHandlerClass] = useState('expanded-arrow');

  useEffect(() => {
    if (isExpand) {
      setSidebarHandlerClass('expanded-sidebar');
      setIconHandlerClass('expanded-arrow');
    } else {
      setSidebarHandlerClass('collapse-sidebar');
      setIconHandlerClass('collapse-arrow');
    }
  }, [isExpand]);

  const clickCollapseExpandBtn = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div className="App">
      <div className={`sidebar ${sidebarHandlerClass}`}>
        M
      </div>
      <div className="content">
        <Tooltip title={isExpand ? 'Collapse' : 'Expand'}>
          <Button className={`btn-handler ${iconHandlerClass}`} shape="circle" icon={<ArrowLeftOutlined />} onClick={clickCollapseExpandBtn} />
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
