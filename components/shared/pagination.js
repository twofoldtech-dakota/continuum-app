import React from 'react'
import LeftArrow from '../../components/svgs/leftArrow'
import RightArrow2 from '../../components/svgs/rightArrow2'
export const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
        pageNumbers.push(index);
    }
    var nextPageNumber = paginate + 1;
    var previousPageNumber = paginate <= 1 ? 0 : 0;
    return (
        <div className="show-result">
            {/* <p>Showing {postsPerPage ? postsPerPage : 0} of {totalPosts ? totalPosts : 0} results</p> */}
                                <ul>
                                    {/* {pageNumbers ? pageNumbers.map(number => (
                                        <li key={number} className="">
                                            <a onClick={() => paginate(number)} href="#">
                                                 {number}
                                            </a>
                                        </li>
                                    )) : null} */}
                                    <li className="">
                                        <a onClick={() => paginate(previousPageNumber)} href="#">
                                            <LeftArrow />
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => paginate(nextPageNumber)} href="#">
                                            <RightArrow2 />
                                        </a>
                                    </li>
                                </ul>
        </div>
    )
}
export default Pagination;