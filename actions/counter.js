import axios from 'axios';

export const increase = () => {
  return {
    type: 'INCREASE'
  };
};

export const decrease = () => {
  return {
    type: 'DECREASE'
  };
};

export const getListData = data => {
  return {
    type: 'GETLISTS',
    payload: data
  };
};

export function fetchList(params) {
  return dispatch => {
    // 利用dispatch进行动作的派发
    var total = 0;
    const url = `http://localhost:3000/posts?_page=${params.page}&_limit=5`;
    return axios({
      url: url,
      method: 'get'
    }).then(res => {
      // res.data.total = res.headers['x-total-count'];
      dispatch(getListData(res.data));
    });
    // fetch(url)
    //   .then(res => {
    //     total = res.headers.get('X-Total-Count');
    //     return res.json();
    //   })
    //   .then(data => {
    //     data.total = +total;
    //     dispatch(getListData(data));
    //   });
  };
}
