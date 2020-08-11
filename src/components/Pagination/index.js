import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({productsPerPage, totalProducts, paginate}) => {
    // console.log(productsPerPage + " " + totalProducts)
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    // console.log(pageNumbers)
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                    </li>
                    {pageNumbers.map((pageNumber, index) => (
                         <li className="page-item" key={index}>
                            <a className="page-link" onClick={() => paginate(pageNumber)}>{pageNumber}</a>
                        </li>
                    ))}
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

Pagination.propTypes = {

}

export default Pagination
