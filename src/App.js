import { useState, useEffect } from 'react';
import logo from './logo.svg';
import logoCollapse from './logo-collapse.svg';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import './App.css';

const App = () => {
  const [isExpand, setIsExpand] = useState(true);
  const [sidebarHandlerClass, setSidebarHandlerClass] = useState('expanded-sidebar');
  const [iconHandlerClass, setIconHandlerClass] = useState('expanded-arrow');
  const [logoUrl, setLogoUrl] = useState(logo);

  useEffect(() => {
    if (isExpand) {
      setSidebarHandlerClass('expanded-sidebar');
      setIconHandlerClass('expanded-arrow');
      changeLogo(logo);
    } else {
      setSidebarHandlerClass('collapse-sidebar');
      setIconHandlerClass('collapse-arrow');
      changeLogo(logoCollapse);
    }
  }, [isExpand]);

  const changeLogo = (url) => {
    setLogoUrl(url);
  };

  const clickCollapseExpandBtn = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div className="App">
      <div className={`sidebar ${sidebarHandlerClass}`}>
        <div className="logo">
          <img className={isExpand ? 'logo-expand' : 'logo-collapse'} src={logoUrl} alt="logo"></img>
        </div>
      </div>
      <div className="content">
        <Tooltip title={isExpand ? 'Collapse' : 'Expand'}>
          <Button className={`btn-handler ${iconHandlerClass}`} size="large" shape="circle" icon={<ArrowLeftOutlined />} onClick={clickCollapseExpandBtn} />
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
