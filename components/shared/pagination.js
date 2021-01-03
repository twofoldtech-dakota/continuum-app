import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
        pageNumbers.push(index);
    }
    console.log(Math.ceil(totalPosts / postsPerPage));
    console.log(pageNumbers);
    console.log(postsPerPage);
    console.log(totalPosts);
    return (
        <div className="show-result">
            {/* <p>Showing {postsPerPage ? postsPerPage : 0} of {totalPosts ? totalPosts : 0} results</p> */}
                                <ul>
                                    {pageNumbers ? pageNumbers.map(number => (
                                        <li key={number} className="">
                                            <a onClick={() => paginate(number)} href="#">
                                                 {number}
                                            </a>
                                        </li>
                                    )) : null}
                                   {/* <li>
                                        <a href="#">
                                            <LeftArrow />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <RightArrow2 />
                                        </a>
                                    </li>  */}
                                </ul>
        </div>
    )
}
export default Pagination;