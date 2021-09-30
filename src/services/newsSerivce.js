import { get } from '../utils/apiHelper';
import constant from '@/constant';
const apiKey = constant.apiId;
const pageSize = constant.pageSize

const getNewsList = function(data) {
  const { keywords, from, to, sortBy, pageNum } = data;
  let formSegment = ''
  let toSegment = ''
  let sortBySegment = ''
 
  if (from && from !== '' && from.trim() !== '') {
    formSegment = `&from=${from}`;
  }
  if (to && to !== '' && to.trim() !== '') {
    toSegment = `&to=${to}`;
  }
  if (sortBy && sortBy.trim()!==''){
    sortBySegment = `&sortBy=${sortBy}`;
  }


  const url = `/everything?q=${keywords}${formSegment}${toSegment}${sortBySegment}&page=${pageNum}&pageSize=${pageSize}&apikey=${apiKey}`;

  return get(url);
};

export { getNewsList };
