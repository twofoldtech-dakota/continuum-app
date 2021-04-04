
import React, { useEffect, useState } from "react";
import LeftArrow from '../../components/svgs/leftArrow'
import RightArrow2 from '../../components/svgs/rightArrow2'
export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, previousPageNumber, nextPageNumber}) => {
    // const pageNumbers = [];
    // for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
    //     pageNumbers.push(index);
    // }
    var lastPage = totalPosts / postsPerPage;
    useEffect(() => {
        
        //component updates if sort is updated
        }, [previousPageNumber, nextPageNumber, currentPage]);
    return (
        <div className={previousPageNumber <= 1 && nextPageNumber >= lastPage ? "hidden": "show-result"}>
            {/* <p>Showing {postsPerPage ? postsPerPage : 0} of {totalPosts ? totalPosts : 0} results</p> */}
                                <ul>
                                    {/* {pageNumbers ? pageNumbers.map(number => (
                                        <li key={number} className="">
                                            <a onClick={() => paginate(number)} href="#">
                                                 {number}
                                            </a>
                                        </li>
                                    )) : null} */}
                                    <li className={previousPageNumber < 1 ? "hidden" : "show"}>
                                        <a onClick={() => paginate(previousPageNumber)} href="#">
                                            <LeftArrow />
                                        </a>
                                    </li>
                                    <li className={nextPageNumber >= lastPage ? "hidden" : "show"}>
                                        <a href="#" onClick={() => paginate(nextPageNumber)}>
                                            <RightArrow2 />
                                        </a>
                                    </li>
                                </ul>

                                <span>{totalPosts && totalPosts > 1 ? totalPosts + " courses" : ""}</span>
        </div>
    )
}
export default Pagination;