import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import "./filter.scss"
import { FilterSearch } from './FilterSearch';

const apikey = "https://jsonplaceholder.typicode.com/posts";

export const Filter = () => {


    // handle Filter
    const [Filter, setFilter] = useState({
        index: 20,
        page: 1,
        end: 100
    });

    // Handle API
    const [dataInformation, setDataInformation] = useState([]);

    // Pagination
    const [Pagination, setPagination] = useState(1);
    
    // Pagination Clicked
    const PaginationClicked = (changePage) => {
        setPagination(changePage);
        setFilter({
            ...Filter,
            page: changePage
        })
    };

    // Formula the end pages Item/Page
    const PaginationTotal = Math.ceil(Filter.end / Filter.page);


    useEffect(() => {
        const handleGET = async () => {
            try{
                //get api
                const response = await 
                    fetch(`${apikey}?_limit=${Filter.index}&_page=${Filter.page}`);

                //convert JSON
                const responseJSON = await response.json();
        
                //set for state 
                setDataInformation(responseJSON);
            }
            catch(error){
                console.log(error);
            }
        };

        handleGET();
    }, [Filter])

    return (
        <>
            <div className="filter">
                <div className="container d-flex justify-content-center h-100 mt-5">
                    <div className="filter-layout">
                        <FilterSearch
                            item={dataInformation}
                        />
                        <div className="filter-list">
                            <div className="pagination d-flex justify-content-evenly">
                                <button 
                                    disabled={Pagination === 1}
                                    className="pagination-button btn btn-primary fs-5"
                                    onClick={() => PaginationClicked(Pagination - 1)}
                                >Previous</button>
                            
                                <button 
                                    disabled={Pagination === PaginationTotal}
                                    className="pagination-button btn btn-primary fs-5"
                                    onClick={() => PaginationClicked(Pagination + 1)}
                                >Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
