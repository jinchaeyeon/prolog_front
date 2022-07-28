import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Hidden } from '@mui/material';
import MyBoardList from '../../molecules/MyPage/MyBoardList';
import ThumbUpBoardList from '../../molecules/MyPage/ThumbUpBoardList';
import MyLayoutList from '../../molecules/MyPage/MyLayoutList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MyTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example" >
          <Tab label="내가 쓴 글" {...a11yProps(0)} />
          <Tab label="좋아요 한 글" {...a11yProps(1)} />
          <Hidden smDown>
            <Tab label="내 레이아웃" {...a11yProps(2)} />
          </Hidden>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MyBoardList></MyBoardList>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ThumbUpBoardList></ThumbUpBoardList>
      </TabPanel>
      {/* <Hidden smDown>
        <TabPanel value={value} index={2}>
          <MyLayoutList></MyLayoutList>
        </TabPanel>
      </Hidden> */}
    </Box>
  );
}
