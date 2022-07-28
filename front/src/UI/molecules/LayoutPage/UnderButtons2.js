import { Box } from '@mui/material';
import OutlinedButton from '../../atoms/Commons/OutlinedButton';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function UnderButtons2(props) {
  const data = props.data;
  const title = props.title.title;
  const datas = [];

  const handleClick = () => {
    data.map((dataitem) => {
      datas.push({
        height: dataitem.height,
        width: dataitem.width,
        coordinateX: dataitem.position.x,
        coordinateY: dataitem.position.y,
        type: dataitem.data.type,
        remove: dataitem.data.remove
      });
    });

    const submit = {
      user: '',
      moldName: title,
      layouts: datas,
    };
  };

  return (
    <Box onClick={handleClick} sx={{ float: 'right', marginTop: 3, marginBottom: 3 }}>
      <OutlinedButton content="작성하기" style={{ marginLeft: 2 }} />
      {/* <Link to="/"> */}
        <OutlinedButton content="목록으로" style={{ marginLeft: 2 }} />
      {/* </Link> */}
    </Box>
  );
}
