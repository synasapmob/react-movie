export const PageList = ({
  item,
  search
}) => {


    // Search Element in array (item)
    const newFilter = search
        ? item.filter(element =>     
              element.title.includes(search)
          ) 
        : item

    return (
      <ul className="filter-content">
          {newFilter.map(data => 
              <li 
                  key={data.id}  
                  className="filter-item"
              >
              {data.title}
              </li>  
          )}
      </ul>
    )
}

// 
//       <li 
//                 className="filter-item"
//                 key={data.id}
//             >
//                 {data.id}
//             </li>
//             