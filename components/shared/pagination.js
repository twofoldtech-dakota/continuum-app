import React from 'react'
import LeftArrow from '../../components/svgs/leftArrow'
import RightArrow2 from '../../components/svgs/rightArrow2'
export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, previousPageNumber, nextPageNumber}) => {
    // const pageNumbers = [];
    // for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
    //     pageNumbers.push(index);
    // }
    console.log(previousPageNumber);
    console.log(currentPage);
    console.log(nextPageNumber);
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
                                    <li className={previousPageNumber == 0 ? "hidden" : ""}>
                                    <a onClick={() => paginate(previousPageNumber)} href="#">
                                    <LeftArrow />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={() => paginate(nextPageNumber)}>
                                            <RightArrow2 />
                                        </a>
                                    </li>
                                </ul>
        </div>
    )
}
export default Pagination;