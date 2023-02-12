import React from "react";

import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from "react-redux";
import { switchPage } from '../../store/langSlice';

export  const Paging = (props) => {
    let pages = [];
    const dispatch = useDispatch();
    let currentPage = useSelector( state => state.lang.selectedPage.selectedPage);
    
    const switchPageNumer = (page) =>  {
        console.log('page', page)
        dispatch(switchPage( { selectedPage: page } ))
    }
    
    const PageLinkItem = (number) => {
        return (
            <div key={`s_${number}`}>
            <Pagination.Item key={number} 
            active={number === currentPage}
            onClick={ () => {switchPageNumer(number)}
        }>{number}</Pagination.Item>
            </div>
        );
    }
    
    
    const showPages = 9;
    let start = 2;
    let end = start + showPages;
    let half = Math.ceil(showPages /2 );

    
    if (currentPage >  half) {
        start = (currentPage - half  < 0) ? 2 : currentPage - half;
        end =  (currentPage + half > props.totalPages) ?  props.totalPages -1 : currentPage + half;
        if( Math.abs(start - end) < showPages ) start =  props.totalPages - showPages ;
    }
    
    if (currentPage <  half) {
        start = (currentPage - half < 1) ? 2:  currentPage - half;
        end =  (currentPage + half > props.totalPages) ?  props.totalPages-1 : currentPage + half ;
        if( Math.abs(start - end) < showPages ) end = showPages +1;
    }
    
    pages.push(PageLinkItem(1));
    if (start > 2) pages.push(<Pagination.Ellipsis  key='afterfirst'/>);
    for (let number = start; number <= end; number++) {
        pages.push(
                PageLinkItem(number)
            )
    }
    if(end < props.totalPages ) pages.push(<Pagination.Ellipsis key='prelast'/>);
    pages.push(PageLinkItem(props.totalPages));
    return pages;


}
