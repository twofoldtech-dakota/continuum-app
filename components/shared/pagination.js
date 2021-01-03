import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts}) => {
    const pageNumbers = [];
    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); i++) {
        const element = array[index];
        pageNumbers.push(index);
    }
    return (
        <div className="show-result">
            <p>Showing {postsPerPage} of {totalPosts} results</p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <LeftArrow />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <RightArrow2 />
                                        </a>
                                    </li>
                                </ul>
        </div>
    )
}
